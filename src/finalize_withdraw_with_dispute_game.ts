import minimist from 'minimist';
import { isValidSolanaPublicKey, parseWithdrawTxInfo } from './helper/tool';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import { createEVMContext } from './helper/evm_context';
import {DisputeGameFactory__factory, KailuaGame__factory, OptimismPortal2__factory} from '../typechain-types';
import { ethers } from 'ethers';

const options = {
  string: ['withdrawId'],
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
  const withdrawTx = parseWithdrawTxInfo(withdrawInfo.data);
  const encodeInfo = ethers.utils.defaultAbiCoder.encode(
    ['uint', 'bytes32', 'address', 'uint', 'uint', 'bytes'],
    [
      withdrawTx.nonce,
      withdrawTx.sender,
      withdrawTx.target,
      withdrawTx.value,
      withdrawTx.gasLimit,
      withdrawTx.data,
    ],
  );
  const withdrawHash = ethers.utils.keccak256(encodeInfo);

  //console.log("withdrawHash:", withdrawHash);

  let EVMContext = await createEVMContext();
  const OptimismPortal = OptimismPortal2__factory.connect(
    EVMContext.EVM_OP_PORTAL,
    EVMContext.EVM_USER,
  );

  const isFinalized = await OptimismPortal.finalizedWithdrawals(withdrawHash);
  if (isFinalized) {
    console.log('Withdraw is already Finalised.');
  } else {
    const submitterCount =
      await OptimismPortal.numProofSubmitters(withdrawHash);
    if (submitterCount.toNumber() == 0) {
      console.log('Withdraw need prove first.');
    } else {
      const respectedGameType = await OptimismPortal.respectedGameType();
      //遍历所有提交者，找到respectedGameType对应的提交者
      let submitter = null;
      let provenWithdrawals = null;
      for (let i = 0; i < submitterCount.toNumber(); i++) {
        submitter = await OptimismPortal.proofSubmitters(withdrawHash, i);
        provenWithdrawals = await OptimismPortal.provenWithdrawals(withdrawHash, submitter);
        const game = KailuaGame__factory.connect(
            provenWithdrawals.disputeGameProxy,
            EVMContext.EVM_PROVIDER
        );
        const gameType = await game.gameType();
        if (gameType == respectedGameType) {
          break;
        }
      }
      if (submitter == null || provenWithdrawals == null) {
        console.log('Withdraw not found in respected game, need to prove again.');
        return;
      }
      const finalizedPeriod = await OptimismPortal.proofMaturityDelaySeconds();
      const finalizedTimestamp =
        provenWithdrawals.timestamp.add(finalizedPeriod);
      const latestBlock = await EVMContext.EVM_PROVIDER.getBlock('latest');

      if (finalizedTimestamp.gt(latestBlock.timestamp)) {
        const diff = finalizedTimestamp.sub(latestBlock.timestamp);
        console.log(
          `Withdraw can't be finalised Yet. still need to wait: ${diff.toString()} seconds`,
        );
      } else {
        const receipt = await (
          await OptimismPortal.finalizeWithdrawalTransactionExternalProof(
            withdrawTx,
            submitter,
            {
              gasLimit: 1500000,
            },
          )
        ).wait(1);
        console.log(
          `Finalize withdraw success. txHash: ${receipt.transactionHash}`,
        );
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
});
