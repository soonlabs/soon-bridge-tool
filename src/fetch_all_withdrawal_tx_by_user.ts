import minimist from 'minimist';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';

const options = {
  string: ['withdrawId'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  const sender = new PublicKey(args.sender);
  let svmContext = await createSVMContext();

  // @ts-ignore
  const accounts = await svmContext.SVM_Connection.getParsedProgramAccounts(
    svmContext.SVM_WITHDRAW_PROGRAM_ID,
    {
      filters: [
        {
          dataSize: 568,
        },
        {
          memcmp: {
            offset: 35,
            bytes: sender.toBase58(),
          },
        },
      ],
    }
  );

  console.log(
    `Found ${accounts.length} withdrawal tx(s) for wallet ${sender}: `
  );
  // @ts-ignore
  accounts.forEach((account, i) => {
    console.log(
        `Withdraw tx PDA address ${i}: ${account.pubkey}`
    );
  });
}

main().catch((error) => {
  console.error(error);
});
