import { ethers, Wallet } from 'ethers';
import { StaticJsonRpcProvider } from '@ethersproject/providers/src.ts/url-json-rpc-provider';
import 'dotenv/config';
import { formatEther } from 'ethers/lib/utils';
import {
  L1CrossDomainMessenger__factory,
  L1StandardBridge__factory,
} from '../../typechain-types';

export interface EVM_CONTEXT {
  EVM_PROVIDER: StaticJsonRpcProvider;
  EVM_USER: Wallet;
  EVM_PROPOSER: Wallet | undefined;
  EVM_OP_PORTAL: string;
  EVM_STANDARD_BRIDGE: string;
}

export const createEVMContext = async (): Promise<EVM_CONTEXT> => {
  const EVM_PROPOSER_KEY = process.env.EVM_PROPOSER_KEY;
  let EVM_USER_KEY = process.env.EVM_USER_KEY;
  const EVM_RPC_URL = process.env.EVM_RPC_URL;
  const EVM_STANDARD_BRIDGE = process.env.EVM_STANDARD_BRIDGE;

  if (!EVM_USER_KEY) {
    EVM_USER_KEY =
      '0x103d65b622f9532a22aa59e70f54c4300ecdd778927477591f4fc459e6f8c093';
    console.log('evm use default user key');
  }

  if (!EVM_RPC_URL) throw `missing required env EVM_RPC_URL for EVM`;

  if (!EVM_STANDARD_BRIDGE)
    throw `missing required env EVM_STANDARD_BRIDGE for EVM`;

  let EVM_PROVIDER = new ethers.providers.StaticJsonRpcProvider(
    EVM_RPC_URL,
  );
  let EVM_USER = new ethers.Wallet(EVM_USER_KEY, EVM_PROVIDER);
  let balance = await EVM_USER.getBalance();
  console.log('evm user address:', await EVM_USER.getAddress());
  console.log('evm user balance: ', formatEther(balance));

  let EVM_PROPOSER;
  if (EVM_PROPOSER_KEY) {
    EVM_PROPOSER = new ethers.Wallet(EVM_PROPOSER_KEY, EVM_PROVIDER);
    balance = await EVM_PROPOSER.getBalance();
    console.log('evm proposer address:', await EVM_PROPOSER.getAddress());
    console.log('evm proposer balance: ', formatEther(balance));
  }

  const StandardBridge = L1StandardBridge__factory.connect(
    EVM_STANDARD_BRIDGE,
    EVM_PROVIDER,
  );
  const l1CrossDomainMessenger = await StandardBridge.messenger();
  const L1CrossDomainMessenger = L1CrossDomainMessenger__factory.connect(
    l1CrossDomainMessenger,
    EVM_PROVIDER,
  );
  const EVM_OP_PORTAL = await L1CrossDomainMessenger.PORTAL();

  return {
    EVM_PROVIDER,
    EVM_USER,
    EVM_PROPOSER,
    EVM_OP_PORTAL,
    EVM_STANDARD_BRIDGE,
  };
};
