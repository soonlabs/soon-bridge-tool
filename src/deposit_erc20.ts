import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import {
  base58PublicKeyToHex,
  isValidEthereumAddress,
  isValidSolanaPublicKey,
} from './helper/tool';
import { ERC20__factory, L1StandardBridge__factory } from '../typechain-types';

const options = {
  string: ['l1Token', 'l2Token', 'l2Receiver', 'amount', 'gasLimit'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Token)) {
    throw new Error('invalid l1Token address.');
  }
  if (!isValidSolanaPublicKey(args.l2Token)) {
    throw new Error('invalid l2Token pubkey.');
  }
  if (!isValidSolanaPublicKey(args.l2Receiver)) {
    throw new Error('invalid l2 receiver pubkey.');
  }

  let EVMContext = await createEVMContext(false);

  const ERC20 = ERC20__factory.connect(args.l1Token, EVMContext.EVM_USER);
  await (
    await ERC20.approve(EVMContext.EVM_STANDARD_BRIDGE, args.amount)
  ).wait(1);

  const L1Bridge = L1StandardBridge__factory.connect(
    EVMContext.EVM_STANDARD_BRIDGE,
    EVMContext.EVM_USER,
  );
  const receipt = await (
    await L1Bridge.bridgeERC20To(
      args.l1Token,
      base58PublicKeyToHex(args.l2Token),
      base58PublicKeyToHex(args.l2Receiver),
      args.amount,
      args.gasLimit,
      '0x',
      {
        gasLimit: 1000000,
      },
    )
  ).wait(1);

  console.log(`Deposit ERC20 success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
  console.error(error);
});
