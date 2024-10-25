import { PublicKey } from '@solana/web3.js';
import minimist from 'minimist';
import { getAssociatedTokenAddressSync } from '@solana/spl-token';

const options = {
  string: ['l2Pubkey', 'splMintKey'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  const l2Pubkey = new PublicKey(args.l2Pubkey);
  const splMintKey = new PublicKey(args.splMintKey);
  const userATAKey = getAssociatedTokenAddressSync(splMintKey, l2Pubkey);
  console.log(`userATAKey: ${userATAKey.toString()}`);
}

main().catch((error) => {
  console.error(error);
});
