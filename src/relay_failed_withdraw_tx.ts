import { createEVMContext } from './helper/evm_context';
import minimist from 'minimist';
import {
  L1CrossDomainMessenger__factory,
  OptimismPortal__factory,
} from '../typechain-types';

const options = {
  string: ['txHash'],
};

const RelaySignature =
  'relayMessage(uint256,bytes32,address,uint256,uint256,bytes)';

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!args.txHash) {
    throw new Error('missing l1 withdraw tx hash');
  }

  let EVMContext = await createEVMContext();
  let transaction = await EVMContext.EVM_PROVIDER.getTransaction(args.txHash);
  const portalInterface = OptimismPortal__factory.createInterface();
  const parsedTransaction = portalInterface.parseTransaction(transaction);
  if (parsedTransaction.args._tx.target === EVMContext.EVM_MESSENGER) {
    const messengerInterface =
      L1CrossDomainMessenger__factory.createInterface();
    const relayData = messengerInterface.decodeFunctionData(
      RelaySignature,
      parsedTransaction.args._tx.data,
    );

    console.log(`relayData:${relayData}`);
    if (relayData[2] === EVMContext.EVM_STANDARD_BRIDGE) {
      let L1CrossDomainMessenger = L1CrossDomainMessenger__factory.connect(
        EVMContext.EVM_MESSENGER,
        EVMContext.EVM_USER,
      );
      const receipt = await (
        await L1CrossDomainMessenger.relayMessage(
          relayData[0],
          relayData[1],
          relayData[2],
          relayData[3],
          relayData[4],
          relayData[5],
          {
            gasLimit: '600000',
            maxFeePerGas: '20000000000', //20G
            maxPriorityFeePerGas: '400000000', //0.4G
          },
        )
      ).wait(1);
      console.log(`Relay withdraw success. txHash: ${receipt.transactionHash}`);
    } else {
      console.log(`invalid withdraw transaction, invalid relay target`);
    }
  } else {
    console.log(`invalid withdraw transaction, invalid bridge target`);
  }
}

main().catch((error) => {
  console.error(error);
});
