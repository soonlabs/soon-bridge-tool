import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';
import { ethers } from 'ethers';

const options = {
  string: ['l1Token', 'l1Receiver', 'amount'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Token)) {
    throw new Error('invalid l1Token address.');
  }
  if (!isValidEthereumAddress(args.l1Receiver)) {
    throw new Error('invalid l1Receiver address.');
  }
  if (isNaN(Number(args.amount))) {
    throw new Error('amount must be a valid number.');
  }
  if (isNaN(Number(args.gasLimit))) {
    throw new Error('gasLimit must be a valid number.');
  }

  let EVMContext = await createEVMContext();

  const functionSignature = 'mint(address,uint256)';
  const iface = new ethers.utils.Interface([`function ${functionSignature}`]);
  const ERC20 = new ethers.Contract(
    args.l1Token,
    iface,
    EVMContext.EVM_PROVIDER,
  );

  const receipt = await (
    await ERC20.connect(EVMContext.EVM_USER).mint(
      args.l1Receiver,
      args.amount,
      {
        gasLimit: 1000000,
      },
    )
  ).wait(1);

  console.log(`Mint ERC20 success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
  console.error(error);
});
