import { createEVMContext } from './helper/evm_context';
import { sleep } from './helper/tool';
import { L1StandardBridge__factory } from '../typechain-types';
import minimist from 'minimist';
import { ethers } from 'ethers';

const options = {
  string: ['startHeight', 'endHeight', 'erc20'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);

  let evmContext = await createEVMContext();

  const bridge = L1StandardBridge__factory.connect(
    evmContext.EVM_STANDARD_BRIDGE,
    evmContext.EVM_USER,
  );
  let filters = bridge.filters.ERC20DepositInitiated(args.erc20);

  const scanStep = Number(40000);
  let totalDeposit = ethers.BigNumber.from(0);
  let scanFrom = Number(args.startHeight);
  let endHeight = Number(args.endHeight);

  while (scanFrom <= endHeight) {
    try {
      let scanTo = scanFrom + scanStep;
      if (scanTo > endHeight) {
        scanTo = endHeight;
      }

      let deposits = await bridge.queryFilter(filters, scanFrom, scanTo);

      for (let i = 0; i < deposits.length; i++) {
        let item = deposits[i];
        console.log(
          `l2Token: ${item.args[1]}, amount: ${item.args[4]}, txHash: ${item.transactionHash}`,
        );
        totalDeposit = totalDeposit.add(item.args[4]);
      }

      scanFrom = scanTo + 1;
    } catch (e) {
      console.log(`error: ${e}`);
    }

    await sleep(1000);
  }

  console.log(`totalDeposit: ${totalDeposit}`);
}

main().catch((error) => {
  console.error(error);
});
