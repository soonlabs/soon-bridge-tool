import minimist from 'minimist';
import { isValidSolanaPublicKey, parseWithdrawTxInfo } from './helper/tool';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import { createEVMContext } from './helper/evm_context';
import {
  L2OutputOracle__factory,
  OptimismPortal__factory,
} from '../typechain-types';
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

  let EVMContext = await createEVMContext(false);
  const OptimismPortal = OptimismPortal__factory.connect(
    EVMContext.EVM_OP_PORTAL,
    EVMContext.EVM_USER,
  );
  const provenWithdrawals =
    await OptimismPortal.provenWithdrawals(withdrawHash);

  const l2OutputOracleAddress = await OptimismPortal.l2Oracle();
  const L2OutputOracle = L2OutputOracle__factory.connect(
    l2OutputOracleAddress,
    EVMContext.EVM_PROPOSER,
  );
  const finalizedPeriod = await L2OutputOracle.FINALIZATION_PERIOD_SECONDS();
  const finalizedTimestamp = provenWithdrawals.timestamp.add(finalizedPeriod);
  const latestBlock = await EVMContext.EVM_PROVIDER.getBlock('latest');

  if (finalizedTimestamp.gt(latestBlock.timestamp)) {
    const diff = finalizedTimestamp.sub(latestBlock.timestamp);
    console.log(
      `Not Finalised Yet. still need to wait: ${diff.toString()} seconds`,
    );
  } else {
    console.log('Congratulation! withdraw Finalised.');
  }
}

main().catch((error) => {
  console.error(error);
});
