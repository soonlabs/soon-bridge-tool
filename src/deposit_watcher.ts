import { createEVMContext, EVM_CONTEXT } from './helper/evm_context';
import {
  calculateDepositTxSignature,
  parseDepositTransactionEventData,
  sendSlackMessage,
  sleep,
} from './helper/tool';
import { OptimismPortal__factory } from '../typechain-types';
import { TransactionDepositedEvent } from '../typechain-types/OptimismPortal';
import { createSVMContext, SVM_CONTEXT } from './helper/svm_context';
import minimist from 'minimist';

//const CROSSDOMAINMESSENGERALIAS = "0xCc248cE37870443D5B2B02a36619d3478738F207";//eth mainnet
const CROSSDOMAINMESSENGERALIAS = '0x3D5bE2360492863C4058e93aCbcE858084D5c611'; //bsc mainnet

// const L1ExplorerURL = 'https://etherscan.io/tx/';//eth mainnet
const L1ExplorerURL = 'https://bscscan.com/tx/'; //bsc mainnet

// const L2ExplorerURL = 'https://explorer.soo.network/tx';//eth mainnet
const L2ExplorerURL = 'https://explorer.svmbnbmainnet.soo.network/tx/'; //bsc mainnet

const options = {
  string: ['startHeight'],
};

let SlackHookURL: string;
async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  let evmContext = await createEVMContext();
  let svmContext = await createSVMContext();

  const SLACKHOOKURL = process.env.SLACKHOOKURL;
  if (!SLACKHOOKURL) throw `missing env SLACKHOOKURL`;
  SlackHookURL = SLACKHOOKURL;

  let scanStartHeight = 0;
  if (!args.startHeight) {
    await sendSlackMessage(
      SlackHookURL,
      'deposit watcher start, replay transaction in the past an hour',
    );
  } else {
    scanStartHeight = args.startHeight.toNumber;
    await sendSlackMessage(
      SlackHookURL,
      'deposit watcher start, replay transaction from height:' +
        args.startHeight,
    );
  }

  const OptimismPortal = OptimismPortal__factory.connect(
    evmContext.EVM_OP_PORTAL,
    evmContext.EVM_USER,
  );
  let filters = OptimismPortal.filters.TransactionDeposited();

  while (true) {
    try {
      let latestBlock = await evmContext.EVM_PROVIDER.getBlock('latest');
      let latestHeight = latestBlock.number - 5;
      console.log(`latest block height: ${latestHeight}`);
      if (scanStartHeight == 0) {
        scanStartHeight = latestHeight - 300;
      }

      let deposits = await OptimismPortal.queryFilter(
        filters,
        scanStartHeight,
        latestHeight - 1,
      );
      for (let i = 0; i < deposits.length; i++) {
        await handleEvent(evmContext, svmContext, deposits[i]);
      }

      scanStartHeight = latestHeight;
    } catch (e) {
      await sendSlackMessage(SlackHookURL, `warn: L1 RPC error:${e}`);
    }

    await sleep(60000);
  }
}

async function handleEvent(
  evm: EVM_CONTEXT,
  svm: SVM_CONTEXT,
  event: TransactionDepositedEvent,
) {
  console.log('tx hash:', event.transactionHash);
  //check if deposit from domain messenger
  let isBridgeSenderValid = true;
  if (
    event.args.from.toLowerCase() != CROSSDOMAINMESSENGERALIAS.toLowerCase() ||
    event.args.to.toLowerCase() !=
      '0x02C806312CB859F1BC25448E39F87AA09857D83CCB4A837DF55648E000000000'.toLowerCase()
  ) {
    isBridgeSenderValid = false;
    const warnMessage = `warn: invalid portal sender in deposit tx: <${L1ExplorerURL}${event.transactionHash}|${event.transactionHash}>`;
    await sendSlackMessage(SlackHookURL, warnMessage);
  }

  //check if valid deposit transaction
  let depositDesc;
  try {
    let opaqueData;
    if (event.args.opaqueData.startsWith('0x')) {
      opaqueData = event.args.opaqueData.slice(2);
    } else {
      opaqueData = event.args.opaqueData;
    }
    depositDesc = await parseDepositTransactionEventData(evm, opaqueData);
  } catch (error) {
    if (isBridgeSenderValid) {
      const warnMessage = `warn: invalid deposit tx: <${L1ExplorerURL}${event.transactionHash}|${event.transactionHash}>, error:${error}`;
      await sendSlackMessage(SlackHookURL, warnMessage);
    }
  }

  const signature = calculateDepositTxSignature(
    event.blockHash,
    event.logIndex,
  );

  let res;
  try {
    res = await svm.SVM_Connection.getTransaction(signature);
  } catch (e) {
    await sendSlackMessage(SlackHookURL, `warn: Soon RPC error:${e}`);
  }
  if (!res) {
    const warnMessage = `warn: deposit tx not processed. l1 tx: <${L1ExplorerURL}${event.transactionHash}|${event.transactionHash}>, l2 tx: <${L2ExplorerURL}${signature}|${signature}>`;
    await sendSlackMessage(SlackHookURL, warnMessage);
    return;
  }

  let infoMessage = `info: ${depositDesc}, l1 tx: <${L1ExplorerURL}${event.transactionHash}|${event.transactionHash}>, l2 tx: <${L2ExplorerURL}${signature}|${signature}>`;
  await sendSlackMessage(SlackHookURL, infoMessage);
}

main().catch((error) => {
  console.error(error);
});
