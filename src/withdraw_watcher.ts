import { createEVMContext, EVM_CONTEXT } from './helper/evm_context';
import { hexToBase58, sendSlackMessage, sleep } from './helper/tool';
import {
  L1CrossDomainMessenger__factory,
  L1StandardBridge__factory,
  OptimismPortal__factory,
} from '../typechain-types';
import { WithdrawalProvenEvent } from '../typechain-types/OptimismPortal';
import { formatEther } from 'ethers/lib/utils';
import axios from 'axios';

const RelaySignature =
  'relayMessage(uint256,bytes32,address,uint256,uint256,bytes)';
const FinalizeETHSignature = 'finalizeBridgeETH(bytes32,address,uint256,bytes)';
const FinalizeERC20Signature =
  'finalizeBridgeERC20(address,bytes32,bytes32,address,uint256,bytes)';
let SlackHookURL: string;

async function main() {
  let evmContext = await createEVMContext();

  const SLACKHOOKURL = process.env.SLACKHOOKURL;
  if (!SLACKHOOKURL) throw `missing env SLACKHOOKURL`;
  SlackHookURL = SLACKHOOKURL;

  await sendSlackMessage(SlackHookURL, 'withdraw watcher start, replay transaction in the past an hour');

  let scanStartHeight = 0;
  const OptimismPortal = OptimismPortal__factory.connect(
    evmContext.EVM_OP_PORTAL,
    evmContext.EVM_USER,
  );
  let filters = OptimismPortal.filters.WithdrawalProven();
  while (true) {
    try {
      let latestBlock = await evmContext.EVM_PROVIDER.getBlock('latest');
      let latestHeight = latestBlock.number;
      console.log(`latest block height: ${latestHeight}`);
      if (scanStartHeight == 0) {
        scanStartHeight = latestHeight - 300;
      }

      // let withdraws = await OptimismPortal.queryFilter(filters, 21578120, 21578120);
      let withdraws = await OptimismPortal.queryFilter(
        filters,
        scanStartHeight,
        latestHeight - 1,
      );
      for (let i = 0; i < withdraws.length; i++) {
        await handleEvent(evmContext, withdraws[i]);
      }

      scanStartHeight = latestHeight;
    } catch (e) {
      await sendSlackMessage(SlackHookURL, `warn: ETH RPC error:${e}`);
    }

    await sleep(60000);
  }
}

async function handleEvent(evm: EVM_CONTEXT, event: WithdrawalProvenEvent) {
  let transaction = await evm.EVM_PROVIDER.getTransaction(
    event.transactionHash,
  );
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
      const bridgeInterface = L1StandardBridge__factory.createInterface();

      const finalizeData = bridgeInterface.decodeFunctionData(
        FinalizeETHSignature,
        relayData[5],
      );
      const from = hexToBase58(finalizeData[0]);
      const to = finalizeData[1];
      const amount = `${finalizeData[2]}000000000`;
      const ethValue = formatEther(amount);
      const message = `info: withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, from: <https://explorer.soo.network/address/${from}|${from}>, to: <https://etherscan.io/address/${to}|${to}>, value: ${ethValue}ETH`;
      await sendSlackMessage(SlackHookURL, message);
    } else {
      const warnMessage = `warn: withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, bridge target is:  <https://etherscan.io/address/${relayData[2]}|${relayData[2]}>, not standard bridge`;
      await sendSlackMessage(SlackHookURL, warnMessage);
    }
  } else {
    const warnMessage = `warn: withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, relay target is:  <https://etherscan.io/address/${parsedTransaction.args._tx.target}|${parsedTransaction.args._tx.target}>, not native l1 messenger`;
    await sendSlackMessage(SlackHookURL, warnMessage);
  }
}

main().catch((error) => {
  console.error(error);
});
