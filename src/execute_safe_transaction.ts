import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import { concatHexStrings, isValidEthereumAddress } from './helper/tool';
import { GnosisSafe__factory } from '../typechain-types';
import { ethers } from 'ethers';

// interface Args {
//   _: string[];
//   safe: string;
//   target: string;
//   data: string;
//   signatures: string[];
// }

const options = {
  string: ['safe', 'target', 'data', 'signatures'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  //const args = minimist(process.argv.slice(2), options) as Args;
  console.log('args:', args);

  if (!isValidEthereumAddress(args.safe)) {
    throw new Error('invalid safe address.');
  }

  if (!isValidEthereumAddress(args.target)) {
    throw new Error('invalid target address.');
  }

  // let signatures = concatHexStrings(args.signatures);

  let evmContext = await createEVMContext();
  let GnosisSafe = GnosisSafe__factory.connect(args.safe, evmContext.EVM_USER);
  const receipt = await (
    await GnosisSafe.execTransaction(
      args.target,
      0,
      args.data,
      0,
      0,
      0,
      0,
      ethers.constants.AddressZero,
      ethers.constants.AddressZero,
      args.signatures,
    )
  ).wait(1);

  console.log(
    `Execute Transaction success. txHash: ${receipt.transactionHash}`,
  );
}

main().catch((error) => {
  console.error(error);
});
