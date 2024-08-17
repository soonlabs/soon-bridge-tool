import {
  BridgeInstructionIndex, createBridgeConfigAccount,
  createSVMContext,
  genDepositInfoAccount,
  genProgramDataAccountKey,
  initProgramDataAccount,
  L1BlockInfoInstructionIndex,
  sendTransaction,
  SVM_CONTEXT,
  SYSTEM_PROGRAM,
  transferSOL
} from './helper/svm_context';
import { LAMPORTS_PER_SOL, PublicKey, SYSVAR_RENT_PUBKEY, TransactionInstruction } from '@solana/web3.js';
import { isValidEthereumAddress, sleep } from './helper/tool';
import minimist from 'minimist';

const options = {
  string: ['l1CrossDomainMessenger', 'l1StandardBridge'],
};

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

async function createBridgeConfig(svmContext: SVM_CONTEXT, l1CrossDomainMessenger: string, l1StandardBridge: string) {
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
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1CrossDomainMessenger) || !isValidEthereumAddress(args.l1StandardBridge)) {
    throw new Error('invalid ethereum address format.');
  }

  let svmContext = await createSVMContext();

  await createBridgeConfig(svmContext, args.l1CrossDomainMessenger, args.l1StandardBridge);

  await createL1BlockInfo(svmContext);

  await createVault(svmContext);

  await createWithdrawCounter(svmContext);

  await transferForVault(svmContext);
}

main().catch((error) => {
  console.error(error);
});
