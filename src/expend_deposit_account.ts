import {
  createSVMContext,
  genDepositInfoAccount,
  InstructionIndex,
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

  const instructionIndex = Buffer.from(
    Int8Array.from([InstructionIndex.StartBot]),
  );
  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      new Numberu16(args.expandNum.toString()).toBuffer(),
    ]),
    keys: [
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
      { pubkey: depositAccount, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_DEPOSITOR.publicKey,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: true,
      },
    ],
    programId: svmContext.SVM_DEPOSIT_PROGRAM_ID,
  });

  await sendTransaction(svmContext, [instruction]);

  console.log('done..');
}

main().catch((error) => {
  console.error(error);
});
