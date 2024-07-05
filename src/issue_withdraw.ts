import {
  createSVMContext,
  genProgramDataAccountKey,
  sendTransaction,
  SYSTEM_PROGRAM,
} from './helper/svm_context';
import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { ethers } from 'ethers';
import { Numberu128, Numberu64 } from './helper/number.utils';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';

const options = {
  string: ['l1Target', 'value', 'gasLimit'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Target)) {
    throw new Error('invalid ethereum address format.');
  }

  let svmContext = await createSVMContext();
  //get counter key
  const counterKey = genProgramDataAccountKey(
    'svm-withdraw-counter',
    svmContext.SVM_WITHDRAW_PROGRAM_ID,
  );
  console.log(`Counter key: ${counterKey.toString()}`);

  //get counter
  const accountInfo =
    await svmContext.SVM_Connection.getAccountInfo(counterKey);
  const withdrawTxSeed = accountInfo!.data.slice(0, 8);
  const counter = Numberu64.fromBuffer(withdrawTxSeed);
  console.log(`counter: ${counter}`);

  //get withdraw tx key
  const [withdrawTxKey] = PublicKey.findProgramAddressSync(
    [withdrawTxSeed],
    svmContext.SVM_WITHDRAW_PROGRAM_ID,
  );

  const instructionIndex = Buffer.alloc(4);
  instructionIndex.writeUInt32LE(1);
  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      svmContext.SVM_USER.publicKey.toBuffer(),
      Buffer.concat([ethers.utils.arrayify(args.l1Target)]),
      new Numberu128(args.value).toBuffer(),
      new Numberu128(args.gasLimit).toBuffer(),
    ]),
    keys: [
      { pubkey: counterKey, isSigner: false, isWritable: true },
      { pubkey: withdrawTxKey, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: false,
      },
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
    ],
    programId: svmContext.SVM_WITHDRAW_PROGRAM_ID,
  });

  const signature = await sendTransaction(svmContext, [instruction]);
  const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  console.log(`Withdraw ID: ${withdrawTxKey.toString()}`);
  console.log(`Withdraw Height: ${status!.value?.slot}`);
}

main().catch((error) => {
  console.error(error);
});
