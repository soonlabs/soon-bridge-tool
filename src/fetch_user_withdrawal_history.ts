import {
  createSVMContext,
  DEFAULT_BRIDGE_PROGRAM,
  genProgramDataAccountKeyWithBufferSeeds,
} from './helper/svm_context';
import {
  PublicKey,
} from '@solana/web3.js';
import { Numberu64 } from './helper/number.utils';
import minimist from 'minimist';

const options = {
  string: ['l2User'],
};

async function main() {
  const args = minimist(process.argv.slice(1), options);
  console.log('args:', args);

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

  const counterLe = accountInfo?.data?.length ? Numberu64.fromBuffer(accountInfo!.data.slice(0, 8)) : new Numberu64(0);
  const counter = new Numberu64(counterLe.toNumber());
  console.log(`counter: ${counter}`);

  const userKey = new PublicKey(args.l2User);
  const withdrawTxKeys: PublicKey[] = [];
  for (let i = 0; i < counter.toNumber(); i++) {
    const currentCounter = new Numberu64(i);
    const withdrawTxKey = genProgramDataAccountKeyWithBufferSeeds(
      [userKey.toBuffer(), currentCounter.toBuffer()],
      DEFAULT_BRIDGE_PROGRAM,
    );
    console.log(`Withdraw ID for counter ${i}: ${withdrawTxKey.toString()}`);
    withdrawTxKeys.push(withdrawTxKey);
  }

  try {
    const withdrawAccountsInfo = await svmContext.SVM_Connection.getMultipleAccountsInfo(withdrawTxKeys);

    withdrawAccountsInfo.forEach((accountInfo, index) => {
      if (accountInfo) {
        console.log(`Withdraw Account ${withdrawTxKeys[index].toString()}:`);
        console.log(`Data: ${accountInfo.data.toString('hex')}`);
        console.log(`Lamports: ${accountInfo.lamports}`);
        console.log(`Owner: ${accountInfo.owner.toString()}`);
        console.log(`Executable: ${accountInfo.executable}`);
      } else {
        console.log(`Withdraw Account ${withdrawTxKeys[index].toString()} not found.`);
      }
    });
  } catch (error) {
    console.error('Error fetching withdraw accounts:', error);
  }
}

main().catch((error) => {
  console.error(error);
});
