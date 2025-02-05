import { createEVMContext, EVM_CONTEXT } from './helper/evm_context';
import { hexToBase58, sendSlackMessage, sleep } from './helper/tool';
import {
  ERC20__factory,
  L1CrossDomainMessenger__factory,
  L1StandardBridge__factory,
  OptimismPortal__factory,
} from '../typechain-types';
import { WithdrawalProvenEvent } from '../typechain-types/OptimismPortal';
import { formatEther, formatUnits } from 'ethers/lib/utils';
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

  await sendSlackMessage(
    SlackHookURL,
    'withdraw watcher start, replay transaction in the past an hour',
  );

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

      // let withdraws = await OptimismPortal.queryFilter(
      //   filters,
      //   21671664,
      //   21671664,
      // );
      let withdraws = await OptimismPortal.queryFilter(
        filters,
        scanStartHeight,
        latestHeight - 1,
      );
      for (let i = 0; i < withdraws.length; i++) {
        try {
          await handleEvent(evmContext, withdraws[i]);
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

      let bridgeData: string = relayData[5].toLowerCase();
      if (bridgeData.startsWith('0x596a37c5')) {
        //ETH withdraw
        const finalizeData = bridgeInterface.decodeFunctionData(
          FinalizeETHSignature,
          relayData[5],
        );
        const from = hexToBase58(finalizeData[0]);
        const to = finalizeData[1];
        const amount = `${finalizeData[2]}000000000`;
        const ethValue = formatEther(amount);
        const message = `info: ETH withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, from: <https://explorer.soo.network/address/${from}|${from}>, to: <https://etherscan.io/address/${to}|${to}>, amount: ${ethValue}ETH`;
        await sendSlackMessage(SlackHookURL, message);
      } else if (bridgeData.startsWith('0xf73fb39c')) {
        //ERC20 withdraw
        const finalizeData = bridgeInterface.decodeFunctionData(
          FinalizeERC20Signature,
          relayData[5],
        );
        const l1_token_address = finalizeData[0];
        const ERC20 = ERC20__factory.connect(
          l1_token_address,
          evm.EVM_PROVIDER,
        );
        let symbol = await ERC20.symbol();
        const from = hexToBase58(finalizeData[2]);
        const to = finalizeData[3];
        const amount = formatUnits(finalizeData[4], 9);
        const message = `info: ERC20 withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, from: <https://explorer.soo.network/address/${from}|${from}>, to: <https://etherscan.io/address/${to}|${to}>, amount: ${amount} ${symbol}`;
        await sendSlackMessage(SlackHookURL, message);
      } else {
        const message = `info: withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, invalid seletor for L1StandardBridge`;
        await sendSlackMessage(SlackHookURL, message);
      }
    }
  } else {
    const warnMessage = `warn: withdraw proved in tx: <https://etherscan.io/tx/${event.transactionHash}|${event.transactionHash}>, relay target is:  <https://etherscan.io/address/${parsedTransaction.args._tx.target}|${parsedTransaction.args._tx.target}>, not native l1 messenger`;
    await sendSlackMessage(SlackHookURL, warnMessage);
  }
}

main().catch((error) => {
  console.error(error);
});
