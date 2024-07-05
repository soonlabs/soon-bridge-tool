import {
  createSVMContext,
  genDepositInfoAccount,
  genProgramDataAccountKey,
  initProgramDataAccount,
  sendTransaction,
  SVM_CONTEXT,
  SYSTEM_PROGRAM,
  transferSOL,
} from './helper/svm_context';
import { LAMPORTS_PER_SOL, TransactionInstruction } from '@solana/web3.js';

async function createL1BlockInfo(svmContext: SVM_CONTEXT) {
  console.log('start createL1BlockInfo');
  return initProgramDataAccount(
    svmContext,
    'l1-block-info',
    svmContext.SVM_L1_BLOCK_INFO_PROGRAM_ID,
  );
}

async function createDeposit(svmContext: SVM_CONTEXT) {
  console.log('start createDeposit');
  const depositAccount = genDepositInfoAccount(
    svmContext.SVM_DEPOSITOR.publicKey,
    svmContext.SVM_DEPOSIT_PROGRAM_ID,
  );
  const instructionIndex = Buffer.alloc(4);
  instructionIndex.writeUInt32LE(1);
  const instruction = new TransactionInstruction({
    data: Buffer.concat([instructionIndex]),
    keys: [
      { pubkey: depositAccount, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_DEPOSITOR.publicKey,
        isSigner: false,
        isWritable: false,
      },
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
}

async function createVault(svmContext: SVM_CONTEXT) {
  console.log('start createVault');
  return initProgramDataAccount(
    svmContext,
    'vault',
    svmContext.SVM_DEPOSIT_PROGRAM_ID,
  );
}

async function createWithdrawCounter(svmContext: SVM_CONTEXT) {
  console.log('start createWithdrawCounter');
  return initProgramDataAccount(
    svmContext,
    'svm-withdraw-counter',
    svmContext.SVM_WITHDRAW_PROGRAM_ID,
  );
}

async function transferForVault(svmContext: SVM_CONTEXT) {
  console.log('transfer 10000 sol for vault');
  const vault = genProgramDataAccountKey(
    'vault',
    svmContext.SVM_DEPOSIT_PROGRAM_ID,
  );
  await transferSOL(svmContext, vault, LAMPORTS_PER_SOL * 10000);
}

async function main() {
  let svmContext = await createSVMContext();

  await createL1BlockInfo(svmContext);

  await createDeposit(svmContext);

  await createVault(svmContext);

  await createWithdrawCounter(svmContext);

  await transferForVault(svmContext);
}

main().catch((error) => {
  console.error(error);
});
