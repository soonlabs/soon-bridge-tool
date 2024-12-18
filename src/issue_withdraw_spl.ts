import {
  BridgeInstructionIndex,
  createSVMContext,
  DEFAULT_BRIDGE_PROGRAM,
  genProgramDataAccountKey, genProgramDataAccountKeyWithBufferSeeds,
  sendTransaction,
  SYSTEM_PROGRAM
} from './helper/svm_context';
import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { ethers } from 'ethers';
import { Numberu128, Numberu64 } from './helper/number.utils';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';
import {
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

const options = {
  string: ['l1Token', 'l1Target', 'amount', 'gasLimit'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Token)) {
    throw new Error('l1Token is invalid ethereum address format.');
  }
  if (!isValidEthereumAddress(args.l1Target)) {
    throw new Error('l1Target is invalid ethereum address format.');
  }

  let svmContext = await createSVMContext();
  //get counter key
  const userWithdrawalCounterSeeds = [Buffer.from('svm-withdraw-counter'), svmContext.SVM_USER.publicKey.toBuffer()]
  const userWithdrawalCounterKey = genProgramDataAccountKeyWithBufferSeeds(
    userWithdrawalCounterSeeds,
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`User withdrawal counter key: ${userWithdrawalCounterKey.toString()}`);

  //get counter
  const accountInfo =
    await svmContext.SVM_Connection.getAccountInfo(userWithdrawalCounterKey);
  const instructions: TransactionInstruction[] = [];

  if (!accountInfo) {
    console.log('User withdrawal counter key not found. Creating...');
    const createCounterInstructionIndex = Buffer.from(
      Int8Array.from([BridgeInstructionIndex.CreateUserWithdrawalCounterAccount]),
    );
    const createUserWithdrawalCounterInstruction = new TransactionInstruction({
      keys: [
        { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
        { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
        { pubkey: userWithdrawalCounterKey, isSigner: false, isWritable: true },
        {
          pubkey: svmContext.SVM_USER.publicKey,
          isSigner: true,
          isWritable: true,
        },
      ],
      programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
      data: createCounterInstructionIndex,
    });

    instructions.push(createUserWithdrawalCounterInstruction);
  } else {
    console.log('User withdrawal counter key exists.');
  }

  const counterLe = accountInfo ? Numberu64.fromBuffer(accountInfo!.data.slice(0, 8)) : new Numberu64(0);
  const counter = new Numberu64(counterLe.toNumber());
  console.log(`counter: ${counter}`);

  //get bridge config key
  const bridgeConfigKey = genProgramDataAccountKey(
    'bridge-config',
    DEFAULT_BRIDGE_PROGRAM,
  );
  console.log(`bridgeConfigKey key: ${bridgeConfigKey.toString()}`);

  //get withdraw tx key
  const withdrawTxKey = genProgramDataAccountKeyWithBufferSeeds(
    [svmContext.SVM_USER.publicKey.toBuffer(), counter.toBuffer()],
    DEFAULT_BRIDGE_PROGRAM,
  );
  console.log(`Withdraw ID: ${withdrawTxKey.toString()}`);

  const [splTokenOwnerKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('spl-owner'), ethers.utils.arrayify(args.l1Token)],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`splTokenOwnerKey: ${splTokenOwnerKey.toString()}`);

  const [splTokenMintKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('spl-mint'), ethers.utils.arrayify(args.l1Token)],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`splTokenMintKey: ${splTokenMintKey.toString()}`);

  const userATAKey = getAssociatedTokenAddressSync(
    splTokenMintKey,
    svmContext.SVM_USER.publicKey,
  );
  console.log(`userATAKey: ${userATAKey.toString()}`);

  const withdrawSplInstructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.WithdrawSPL]),
  );
  const withdrawSplInstruction = new TransactionInstruction({
    data: Buffer.concat([
      withdrawSplInstructionIndex,
      Buffer.concat([ethers.utils.arrayify(args.l1Token)]),
      Buffer.concat([ethers.utils.arrayify(args.l1Target)]),
      new Numberu128(args.amount).toBuffer(),
      new Numberu128(args.gasLimit).toBuffer(),
    ]),
    keys: [
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: userWithdrawalCounterKey, isSigner: false, isWritable: true },
      { pubkey: withdrawTxKey, isSigner: false, isWritable: true },
      { pubkey: splTokenOwnerKey, isSigner: false, isWritable: false },
      { pubkey: splTokenMintKey, isSigner: false, isWritable: true },
      { pubkey: userATAKey, isSigner: false, isWritable: true },
      { pubkey: bridgeConfigKey, isSigner: false, isWritable: false },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
  });
  console.log(`Withdraw ID: ${withdrawTxKey.toString()}`);

  instructions.push(withdrawSplInstruction);
  const signature = await sendTransaction(svmContext, instructions);
  const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  console.log(`Withdraw Height: ${status!.value?.slot}`);
}

main().catch((error) => {
  console.error(error);
});
