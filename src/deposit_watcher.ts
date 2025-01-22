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

let SlackHookURL: string;
async function main() {
  let evmContext = await createEVMContext();
  let svmContext = await createSVMContext();

  const SLACKHOOKURL = process.env.SLACKHOOKURL;
  if (!SLACKHOOKURL) throw `missing env SLACKHOOKURL`;
  SlackHookURL = SLACKHOOKURL;

  await sendSlackMessage(SlackHookURL, 'deposit watcher start, replay transaction in the past an hour');

  let scanStartHeight = 0;
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
      await sendSlackMessage(SlackHookURL, `warn: ETH RPC error:${e}`);
    }

    await sleep(60000);
  }
}

async function handleEvent(
  evm: EVM_CONTEXT,
  svm: SVM_CONTEXT,
  event: TransactionDepositedEvent,
) {
  //check if deposit from domain messenger
  if (
    event.args.from.toLowerCase() !=
      '0xCc248cE37870443D5B2B02a36619d3478738F207'.toLowerCase() ||
    event.args.to.toLowerCase() !=
      '0x02C806312CB859F1BC25448E39F87AA09857D83CCB4A837DF55648E000000000'.toLowerCase()
  ) {
    const warnMessage = `warn: invalid portal sender in deposit tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>`;
    await sendSlackMessage(SlackHookURL, warnMessage);
    return;
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
    const warnMessage = `warn: invalid deposit tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, error:${error}`;
    await sendSlackMessage(SlackHookURL, warnMessage);
    return;
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
    const warnMessage = `warn: deposit tx not processed. l1 tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, l2 tx: <https://explorer.soo.network/tx/${signature}|${signature}>`;
    await sendSlackMessage(SlackHookURL, warnMessage);
    return;
  }

  let infoMessage = `info: ${depositDesc}, l1 tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, l2 tx: <https://explorer.soo.network/tx/${signature}|${signature}>`;
  await sendSlackMessage(SlackHookURL, infoMessage);
}

main().catch((error) => {
  console.error(error);
});
