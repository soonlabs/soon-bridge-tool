import minimist from 'minimist';
import {
  isValidSolanaPublicKey,
  parseWithdrawTxInfo,
  sleep,
} from './helper/tool';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import { createEVMContext } from './helper/evm_context';
import {
  DisputeGameFactory__factory,
  KailuaGame__factory,
  KailuaTournament__factory,
  KailuaTreasury__factory,
  OptimismPortal2__factory,
} from '../typechain-types';
import axios from 'axios';
import { BigNumber, ethers } from 'ethers';
import bs58 from 'bs58';

const options = {
  string: ['withdrawId', 'withdrawHeight'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidSolanaPublicKey(args.withdrawId)) {
    throw new Error('invalid solana pubkey format.');
  }

  let svmContext = await createSVMContext();
  const withdrawInfo = await svmContext.SVM_Connection.getAccountInfo(
    new PublicKey(args.withdrawId),
  );
  if (!withdrawInfo || withdrawInfo.data.length < 148) {
    throw new Error('invalid withdraw Id.');
  }
  //get withdraw tx
  const withdrawTx = parseWithdrawTxInfo(withdrawInfo.data);
  console.log('withdrawTx:', withdrawTx);

  let EVMContext = await createEVMContext();
  const OptimismPortal = OptimismPortal2__factory.connect(
    EVMContext.EVM_OP_PORTAL,
    EVMContext.EVM_USER,
  );
  const dfFactory = await OptimismPortal.disputeGameFactory();
  const DisputeGameFactory = DisputeGameFactory__factory.connect(
    dfFactory,
    EVMContext.EVM_PROVIDER,
  );

  // get kailua treasury
  const gameCount = await DisputeGameFactory.gameCount();
  const latestGameInfo = await DisputeGameFactory.gameAtIndex(gameCount.sub(1));
  const latestGame = KailuaTournament__factory.connect(
    latestGameInfo.proxy_,
    EVMContext.EVM_PROVIDER,
  );
  const kailuaTreasuryAddress = await latestGame.KAILUA_TREASURY();
  const kailuaTreasury = KailuaTreasury__factory.connect(
    kailuaTreasuryAddress,
    EVMContext.EVM_PROVIDER,
  );

  // get latest propose height
  const latestKailuaGameAddr = await kailuaTreasury.lastResolved();
  const latestKailuaGame = KailuaGame__factory.connect(
    latestKailuaGameAddr,
    EVMContext.EVM_PROVIDER,
  );
  const proposedHeight = await latestKailuaGame.l2BlockNumber();
  if (proposedHeight.lt(args.withdrawHeight)) {
    console.log(
      `not proposed yet. current proposed l2 height: ${proposedHeight}`,
    );
    return;
  }
  console.log('proposedHeight:', proposedHeight);

  // get latest resolved game index
  let gameIndex = gameCount.toNumber() - 1;
  for (; gameIndex >= 0; gameIndex--) {
    const gameInfo = await DisputeGameFactory.gameAtIndex(gameIndex);
    if (latestKailuaGameAddr == gameInfo.proxy_) {
      break;
    }
  }

  //get output root proof
  const response0 = await axios.post(svmContext.SVM_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'outputAtBlock',
    params: [proposedHeight.toNumber()],
  });
  console.log('outputAtBlock response data:', response0.data);

  await sleep(1000);

  //get withdraw proof
  const response1 = await axios.post(svmContext.SVM_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'getSoonWithdrawalProof',
    params: [args.withdrawId, proposedHeight.toNumber()],
  });
  console.log('getSoonWithdrawalProof response data:', response1.data);

  const hexPubkey = ethers.utils.hexlify(bs58.decode(args.withdrawId));
  const receipt = await (
    await OptimismPortal.connect(
      EVMContext.EVM_USER,
    ).proveWithdrawalTransaction(
      withdrawTx,
      gameIndex,
      hexPubkey,
      {
        version:
          '0x0000000000000000000000000000000000000000000000000000000000000000',
        stateRoot: response0.data.result.stateRoot,
        messagePasserStorageRoot: response0.data.result.withdrawalRoot,
        latestBlockhash: response0.data.result.blockHash,
      },
      response1.data.result.withdrawalProof,
      {
        gasLimit: 1000000,
      },
    )
  ).wait(1);

  console.log(`Withdraw tx prove success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
  console.error(error);
});
