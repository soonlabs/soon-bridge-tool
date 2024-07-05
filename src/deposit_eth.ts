import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import { base58PublicKeyToHex, isValidSolanaPublicKey } from './helper/tool';
import { L1StandardBridge__factory } from '../typechain-types';

const options = {
  string: ['l2Target', 'value', 'gasLimit'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidSolanaPublicKey(args.l2Target)) {
    throw new Error('invalid solana pubkey format.');
  }

  let EVMContext = await createEVMContext(false);
  const L1Bridge = L1StandardBridge__factory.connect(
    EVMContext.EVM_STANDARD_BRIDGE,
    EVMContext.EVM_USER,
  );
  const receipt = await (
    await L1Bridge.bridgeETHTo(
      base58PublicKeyToHex(args.l2Target),
      args.gasLimit,
      '0x',
      {
        value: args.value,
        gasLimit: 300000,
      },
    )
  ).wait(1);

  console.log(`Deposit ETH success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
  console.error(error);
});
