import { ethers } from 'ethers';
import minimist from 'minimist';
import { hexToBase58 } from './helper/tool';

const options = {
  string: ['l1BlockHash'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  const SEQUENCE_NUM =
    '0000000000000000000000000000000000000000000000000000000000000000';
  let INNER_HASH = ethers.utils.keccak256(args.l1BlockHash + SEQUENCE_NUM);
  if (INNER_HASH.startsWith('0x')) {
    INNER_HASH = INNER_HASH.slice(2);
  }

  const L1_ATTRIBUTE_DEPOSIT_DOMAIN =
    '0x0000000000000000000000000000000000000000000000000000000000000001';
  let DEPOSIT_SOURCE_HASH = ethers.utils.keccak256(
    L1_ATTRIBUTE_DEPOSIT_DOMAIN + INNER_HASH,
  );

  DEPOSIT_SOURCE_HASH = DEPOSIT_SOURCE_HASH + '0'.repeat(64);

  let base58Hash = hexToBase58(DEPOSIT_SOURCE_HASH);

  console.log(`Tx signature: ${base58Hash}`);
}

main().catch((error) => {
  console.error(error);
});
