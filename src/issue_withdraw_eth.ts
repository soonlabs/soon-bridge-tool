import {
  BridgeInstructionIndex,
  createSVMContext,
  DEFAULT_BRIDGE_PROGRAM,
  genProgramDataAccountKey,
  genProgramDataAccountKeyWithBufferSeeds,
  sendTransaction,
  SYSTEM_PROGRAM,
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
  const userWithdrawalCounterSeeds = [
    Buffer.from('svm-withdraw-counter'),
    svmContext.SVM_USER.publicKey.toBuffer(),
  ];
  const userWithdrawalCounterKey = genProgramDataAccountKeyWithBufferSeeds(
    userWithdrawalCounterSeeds,
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(
    `User withdrawal counter key: ${userWithdrawalCounterKey.toString()}`,
  );

  //get counter
  const accountInfo = await svmContext.SVM_Connection.getAccountInfo(
    userWithdrawalCounterKey,
  );
  const instructions: TransactionInstruction[] = [];

  if (!accountInfo) {
    console.log('User withdrawal counter key not found. Creating...');
    const createCounterInstructionIndex = Buffer.from(
      Int8Array.from([
        BridgeInstructionIndex.CreateUserWithdrawalCounterAccount,
      ]),
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

  const counterLe = accountInfo
    ? Numberu64.fromBuffer(accountInfo!.data.slice(0, 8))
    : new Numberu64(0);
  const counter = new Numberu64(counterLe.toNumber());
  console.log(`counter: ${counter}`);

  //get withdraw tx key
  const withdrawTxKey = genProgramDataAccountKeyWithBufferSeeds(
    [svmContext.SVM_USER.publicKey.toBuffer(), counter.toBuffer()],
    DEFAULT_BRIDGE_PROGRAM,
  );
  console.log(`Withdraw ID: ${withdrawTxKey.toString()}`);

  //get vault key
  const vaultKey = genProgramDataAccountKey('vault', DEFAULT_BRIDGE_PROGRAM);
  console.log(`vaultKey key: ${vaultKey.toString()}`);

  //get bridge config key
  const bridgeConfigKey = genProgramDataAccountKey(
    'bridge-config',
    DEFAULT_BRIDGE_PROGRAM,
  );
  console.log(`bridgeConfigKey key: ${bridgeConfigKey.toString()}`);

  const withdrawETHInstructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.WithdrawETH]),
  );
  const withdrawETHInstruction = new TransactionInstruction({
    data: Buffer.concat([
      withdrawETHInstructionIndex,
      Buffer.concat([ethers.utils.arrayify(args.l1Target)]),
      new Numberu128(args.value).toBuffer(),
      new Numberu128(args.gasLimit).toBuffer(),
    ]),
    keys: [
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: userWithdrawalCounterKey, isSigner: false, isWritable: true },
      { pubkey: withdrawTxKey, isSigner: false, isWritable: true },
      { pubkey: vaultKey, isSigner: false, isWritable: true },
      { pubkey: bridgeConfigKey, isSigner: false, isWritable: false },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
  });

  instructions.push(withdrawETHInstruction);
  const signature = await sendTransaction(svmContext, instructions);
  const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  console.log(`Withdraw Height: ${status!.value?.slot}`);
}

main().catch((error) => {
  console.error(error);
});
