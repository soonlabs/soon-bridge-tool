import {
  BridgeInstructionIndex,
  createBridgeConfigAccount,
  createSVMContext,
  genProgramDataAccountKey,
  initProgramDataAccount,
  L1BlockInfoInstructionIndex,
  SVM_CONTEXT,
  transferSOL,
} from './helper/svm_context';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { sleep } from './helper/tool';
import { createEVMContext } from './helper/evm_context';
import { L1StandardBridge__factory } from '../typechain-types';

async function createL1BlockInfo(svmContext: SVM_CONTEXT) {
  console.log('start createL1BlockInfo');
  return initProgramDataAccount(
    svmContext,
    'l1-block-info',
    svmContext.SVM_L1_BLOCK_INFO_PROGRAM_ID,
    L1BlockInfoInstructionIndex.CreateL1BlockInfoAccount,
  );
}

async function createVault(svmContext: SVM_CONTEXT) {
  console.log('start createVault');
  return initProgramDataAccount(
    svmContext,
    'vault',
    svmContext.SVM_BRIDGE_PROGRAM_ID,
    BridgeInstructionIndex.CreateVaultAccount,
  );
}

async function createBridgeConfig(
  svmContext: SVM_CONTEXT,
  l1CrossDomainMessenger: string,
  l1StandardBridge: string,
) {
  console.log('start createBridgeConfig');
  return createBridgeConfigAccount(
    svmContext,
    'bridge-config',
    svmContext.SVM_BRIDGE_PROGRAM_ID,
    l1CrossDomainMessenger,
    l1StandardBridge,
  );
}

async function createWithdrawCounter(svmContext: SVM_CONTEXT) {
  console.log('start createWithdrawCounter');
  return initProgramDataAccount(
    svmContext,
    'svm-withdraw-counter',
    svmContext.SVM_BRIDGE_PROGRAM_ID,
    BridgeInstructionIndex.CreateWithdrawalCounterAccount,
  );
}

async function waitVaultAccountInfo(svmContext: SVM_CONTEXT, vault: PublicKey) {
  console.log('check vault account created');
  while (true) {
    const accountInfo = await svmContext.SVM_Connection.getAccountInfo(vault);

    if (accountInfo) {
      console.log('yeah. vault account created.');
      return;
    }
    console.log('nop. wait 10s...');
    await sleep(10000);
  }
}

async function transferForVault(svmContext: SVM_CONTEXT) {
  const vault = genProgramDataAccountKey(
    'vault',
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );

  await waitVaultAccountInfo(svmContext, vault);

  console.log('transfer 1000000 sol for vault');
  await transferSOL(svmContext, vault, LAMPORTS_PER_SOL * 1000000);
}

async function main() {
  let svmContext = await createSVMContext();

  let evmContext = await createEVMContext();
  const StandardBridge = L1StandardBridge__factory.connect(
    evmContext.EVM_STANDARD_BRIDGE,
    evmContext.EVM_USER,
  );
  const l1CrossDomainMessenger = await StandardBridge.messenger();

  await createBridgeConfig(
    svmContext,
    l1CrossDomainMessenger,
    evmContext.EVM_STANDARD_BRIDGE,
  );

  await createL1BlockInfo(svmContext);

  await createVault(svmContext);

  await createWithdrawCounter(svmContext);

  await transferForVault(svmContext);
}

main().catch((error) => {
  console.error(error);
});
