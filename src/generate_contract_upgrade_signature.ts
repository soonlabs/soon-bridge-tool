import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';
import { GnosisSafe__factory, ProxyAdmin__factory } from '../typechain-types';
import { ethers } from 'ethers';
import { joinSignature } from 'ethers/lib/utils';

const options = {
  string: ['safe', 'proxyAdmin', 'proxy', 'impl'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  if (!isValidEthereumAddress(args.safe)) {
    throw new Error('invalid safe address.');
  }

  if (!isValidEthereumAddress(args.proxyAdmin)) {
    throw new Error('invalid proxyAdmin address.');
  }

  if (!isValidEthereumAddress(args.proxy)) {
    throw new Error('invalid proxy address.');
  }

  if (!isValidEthereumAddress(args.impl)) {
    throw new Error('invalid impl address.');
  }

  let evmContext = await createEVMContext();
  let GnosisSafe = GnosisSafe__factory.connect(
    args.safe,
    evmContext.EVM_PROVIDER,
  );
  let isOwner = await GnosisSafe.isOwner(
    await evmContext.EVM_USER.getAddress(),
  );
  if (!isOwner) {
    throw new Error('wallet address is not owner');
  }

  let ProxyAdmin = ProxyAdmin__factory.connect(
    args.proxyAdmin,
    evmContext.EVM_PROVIDER,
  );
  let upgradeTxData = ProxyAdmin.interface.encodeFunctionData('upgrade', [
    args.proxy,
    args.impl,
  ]);
  console.log(`txData: ${upgradeTxData}`);

  let nonce = await GnosisSafe.nonce();
  let txHash = await GnosisSafe.getTransactionHash(
    args.proxyAdmin,
    0,
    upgradeTxData,
    0,
    0,
    0,
    0,
    ethers.constants.AddressZero,
    ethers.constants.AddressZero,
    nonce,
  );

  let singedMsg = joinSignature(
    evmContext.EVM_USER._signingKey().signDigest(txHash),
  );
  console.log(`singedMsg: ${singedMsg}`);
}

main().catch((error) => {
  console.error(error);
});
