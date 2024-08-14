import { PublicKey } from '@solana/web3.js';
import minimist from 'minimist';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const options = {
  string: ['l2Pubkey', 'splMintKey'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  const l2Pubkey = new PublicKey(args.l2Pubkey);
  const splMintKey = new PublicKey(args.splMintKey);
  const [userATAKey, ] = PublicKey.findProgramAddressSync(
    [l2Pubkey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), splMintKey.toBuffer()],
    ASSOCIATED_TOKEN_PROGRAM_ID,
  );
  console.log(`userATAKey: ${userATAKey.toString()}`);
}

main().catch((error) => {
  console.error(error);
});
