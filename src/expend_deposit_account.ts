import {
  createSVMContext,
  genDepositInfoAccount,
  sendTransaction,
  SYSTEM_PROGRAM,
} from './helper/svm_context';
import { TransactionInstruction } from '@solana/web3.js';
import { Numberu16 } from './helper/number.utils';
import minimist from 'minimist';

interface Args {
  expandNum: number;
}

async function main() {
  console.log('start expend deposit account');
  const args = minimist<Args>(process.argv.slice(2));

  let svmContext = await createSVMContext();

  const depositAccount = genDepositInfoAccount(
    svmContext.SVM_DEPOSITOR.publicKey,
    svmContext.SVM_DEPOSIT_PROGRAM_ID,
  );

  const instructionIndex = Buffer.alloc(4);
  instructionIndex.writeUInt32LE(2);
  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      new Numberu16(args.expandNum.toString()).toBuffer(),
    ]),
    keys: [
      { pubkey: depositAccount, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: true,
      },
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
    ],
    programId: svmContext.SVM_DEPOSIT_PROGRAM_ID,
  });

  await sendTransaction(svmContext, [instruction]);

  console.log('done..');
}

main().catch((error) => {
  console.error(error);
});
