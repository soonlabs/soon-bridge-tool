import { createEVMContext, EVM_CONTEXT } from './helper/evm_context';
import { sendSlackMessage, sleep } from './helper/tool';
import {
  L1CrossDomainMessenger__factory,
  OptimismPortal__factory,
} from '../typechain-types';
import minimist from 'minimist';
import { FailedRelayedMessageEvent } from '../typechain-types/CommonTest';

const RelaySignature =
  'relayMessage(uint256,bytes32,address,uint256,uint256,bytes)';
let SlackHookURL: string;

const options = {
  string: ['startHeight'],
};

// const L1ExplorerURL = 'https://etherscan.io/tx/';//eth mainnet
const L1ExplorerURL = 'https://bscscan.com/tx/'; //bsc mainnet

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  let evmContext = await createEVMContext();

  const SLACKHOOKURL = process.env.SLACKHOOKURL;
  if (!SLACKHOOKURL) throw `missing env SLACKHOOKURL`;
  SlackHookURL = SLACKHOOKURL;

  let scanStartHeight = 0;
  if (!args.startHeight) {
    await sendSlackMessage(
      SlackHookURL,
      'auto-relay watcher start, scan transaction in the past an hour',
    );
  } else {
    scanStartHeight = args.startHeight.toNumber;
    await sendSlackMessage(
      SlackHookURL,
      'auto-relay watcher start, scan transaction from height:' +
        args.startHeight,
    );
  }

  const L1CrossDomainMessenger = L1CrossDomainMessenger__factory.connect(
    evmContext.EVM_MESSENGER,
    evmContext.EVM_USER,
  );
  let filters = L1CrossDomainMessenger.filters.FailedRelayedMessage();
  while (true) {
    try {
      let latestBlock = await evmContext.EVM_PROVIDER.getBlock('latest');
      let latestHeight = latestBlock.number;
      console.log(`latest block height: ${latestHeight}`);
      if (scanStartHeight == 0) {
        scanStartHeight = latestHeight - 300;
      }

      let failed = await L1CrossDomainMessenger.queryFilter(
        filters,
        scanStartHeight,
        latestHeight - 1,
      );
      if (failed.length > 0) {
        const message = `warn: find ${failed.length} failed withdraw transaction`;
        await sendSlackMessage(SlackHookURL, message);
      }
      for (let i = 0; i < failed.length; i++) {
        let item = failed[i];
        let isRelayed = await L1CrossDomainMessenger.successfulMessages(
          item.topics[1],
        );
        if (isRelayed) {
          continue;
        }

        try {
          await handleEvent(evmContext, failed[i]);
        } catch (e) {
          await sendSlackMessage(
            SlackHookURL,
            `warn: parse withdraw data have unexpected error:${e}`,
          );
        }
      }

      scanStartHeight = latestHeight;
    } catch (e) {
      await sendSlackMessage(SlackHookURL, `warn: ETH RPC error:${e}`);
    }

    await sleep(60000);
  }
}

async function handleEvent(evm: EVM_CONTEXT, event: FailedRelayedMessageEvent) {
  let transaction = await evm.EVM_PROVIDER.getTransaction(
    event.transactionHash,
  );
  const message = `warn: failed withdraw transaction: <${L1ExplorerURL}${event.transactionHash}|${event.transactionHash}>, ready to relay...`;
  await sendSlackMessage(SlackHookURL, message);
  const portalInterface = OptimismPortal__factory.createInterface();
  const parsedTransaction = portalInterface.parseTransaction(transaction);
  if (parsedTransaction.args._tx.target === evm.EVM_MESSENGER) {
    const messengerInterface =
      L1CrossDomainMessenger__factory.createInterface();
    const relayData = messengerInterface.decodeFunctionData(
      RelaySignature,
      parsedTransaction.args._tx.data,
    );

    if (relayData[2] === evm.EVM_STANDARD_BRIDGE) {
      let L1CrossDomainMessenger = L1CrossDomainMessenger__factory.connect(
        evm.EVM_MESSENGER,
        evm.EVM_USER,
      );

      try {
        let nonce = await evm.EVM_PROVIDER.getTransactionCount(
          await evm.EVM_USER.getAddress(),
        );
        const receipt = await (
          await L1CrossDomainMessenger.relayMessage(
            relayData[0],
            relayData[1],
            relayData[2],
            relayData[3],
            relayData[4],
            relayData[5],
            {
              nonce: nonce,
              gasLimit: '800000',
              maxFeePerGas: '10000000000', //10G
              maxPriorityFeePerGas: '1000000000', //1G
            },
          )
        ).wait(1);
        const message = `warn: Relay withdraw success. txHash: <${L1ExplorerURL}${receipt.transactionHash}|${receipt.transactionHash}>`;
        await sendSlackMessage(SlackHookURL, message);
      } catch (e) {
        await sendSlackMessage(SlackHookURL, '<!channel>relay failed');
      }
    } else {
      await sendSlackMessage(
        SlackHookURL,
        `invalid withdraw transaction, invalid relay target`,
      );
    }
  } else {
    await sendSlackMessage(
      SlackHookURL,
      `invalid withdraw transaction, invalid bridge target`,
    );
  }
}

main().catch((error) => {
  console.error(error);
});
