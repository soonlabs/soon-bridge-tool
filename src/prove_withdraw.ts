import minimist from 'minimist';
import { isValidSolanaPublicKey, parseWithdrawTxInfo } from './helper/tool';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import { createEVMContext } from './helper/evm_context';
import {
  L2OutputOracle__factory,
  OptimismPortal__factory,
} from '../typechain-types';
import axios from 'axios';
import { ethers } from 'ethers';
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

  let EVMContext = await createEVMContext(false);
  const OptimismPortal = OptimismPortal__factory.connect(
    EVMContext.EVM_OP_PORTAL,
    EVMContext.EVM_USER,
  );
  const l2OutputOracleAddress = await OptimismPortal.l2Oracle();
  const L2OutputOracle = L2OutputOracle__factory.connect(
    l2OutputOracleAddress,
    EVMContext.EVM_PROPOSER,
  );
  const l2OutputIndex = await L2OutputOracle.getL2OutputIndexAfter(
    args.withdrawHeight,
  );
  const proposeL2Height = (await L2OutputOracle.getL2Output(l2OutputIndex))
    .l2BlockNumber;
  console.log(`proposeL2Height: ${proposeL2Height}`);

  //get output root proof
  const response0 = await axios.post(svmContext.SVM_SOON_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'outputAtBlock',
    params: [proposeL2Height.toNumber()],
  });
  console.log('outputAtBlock response data:', response0.data);

  //get withdraw proof
  const response1 = await axios.post(svmContext.SVM_SOON_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'getSoonWithdrawalProof',
    params: [args.withdrawId, proposeL2Height.toNumber()],
  });
  console.log('getSoonWithdrawalProof response data:', response1.data);

  const hexPubkey = ethers.utils.hexlify(bs58.decode(args.withdrawId));
  const receipt = await (
    await OptimismPortal.connect(
      EVMContext.EVM_USER,
    ).proveWithdrawalTransaction(
      withdrawTx,
      l2OutputIndex,
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
