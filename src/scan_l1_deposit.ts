import { createEVMContext, EVM_CONTEXT } from './helper/evm_context';
import { calculateDepositTxSignature, hexToBase58, sleep } from './helper/tool';
import { OptimismPortal__factory } from '../typechain-types';
import { TransactionDepositedEvent } from '../typechain-types/OptimismPortal';
import { createSVMContext, SVM_CONTEXT } from './helper/svm_context';
import { ethers } from 'ethers';

async function main() {
  let evmContext = await createEVMContext();
  let svmContext = await createSVMContext();

  let scanStartHeight = 21541467; //deploy height
  let stepHeight = 1000;
  const OptimismPortal = OptimismPortal__factory.connect(
    evmContext.EVM_OP_PORTAL,
    evmContext.EVM_USER,
  );
  let filters = OptimismPortal.filters.TransactionDeposited();

  let latestBlock = await evmContext.EVM_PROVIDER.getBlock('latest');
  let latestHeight = latestBlock.number;
  while (scanStartHeight < latestHeight) {
    console.log(`scan step, startHeight: ${scanStartHeight}`);
    let scanEndHeight = scanStartHeight + stepHeight;
    let deposits = await OptimismPortal.queryFilter(
      filters,
      scanStartHeight,
      scanEndHeight,
    );
    for (let i = 0; i < deposits.length; i++) {
      await handleEvent(evmContext, svmContext, deposits[i]);
    }

    scanStartHeight = scanEndHeight + 1;
    await sleep(5000);
  }
}

async function handleEvent(
  evm: EVM_CONTEXT,
  svm: SVM_CONTEXT,
  event: TransactionDepositedEvent,
) {
  //check if from & to are legal
  if (
    event.args.from.toLowerCase() !=
      '0xCc248cE37870443D5B2B02a36619d3478738F207'.toLowerCase() ||
    event.args.to.toLowerCase() !=
      '0x02C806312CB859F1BC25448E39F87AA09857D83CCB4A837DF55648E000000000'.toLowerCase()
  ) {
    console.log(
      `illegal tx: ${event.transactionHash}, from:${event.args.from}, to:${event.args.to}`,
    );
  }

  const signature = calculateDepositTxSignature(
    event.blockHash,
    event.logIndex,
  );

  const res = await svm.SVM_Connection.getTransaction(signature);
  if (!res) {
    console.log(`tx not processed on L2: ${event.transactionHash}`);
  }
}

main().catch((error) => {
  console.error(error);
});
