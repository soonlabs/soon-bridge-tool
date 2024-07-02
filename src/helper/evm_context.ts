import { ethers, Wallet } from 'ethers';
import { StaticJsonRpcProvider } from '@ethersproject/providers/src.ts/url-json-rpc-provider';
import 'dotenv/config';
import { formatEther } from 'ethers/lib/utils';

export interface EVM_CONTEXT {
  EVM_PROVIDER: StaticJsonRpcProvider;
  EVM_USER: Wallet;
  EVM_PROPOSER: Wallet;
  EVM_OP_PORTAL: string;
  EVM_STANDARD_BRIDGE: string;
}

export const createEVMContext = async (
  isHappyPass: boolean,
): Promise<EVM_CONTEXT> => {
  const EVM_PROPOSER_KEY = isHappyPass
    ? '0x103d65b622f9532a22aa59e70f54c4300ecdd778927477591f4fc459e6f8c093'
    : process.env.EVM_PROPOSER_KEY;
  const EVM_USER_KEY = isHappyPass
    ? '0x103d65b622f9532a22aa59e70f54c4300ecdd778927477591f4fc459e6f8c093'
    : process.env.EVM_USER_KEY;
  const EVM_PROVIDER_URL = isHappyPass
    ? 'http://localhost:8545'
    : process.env.EVM_PROVIDER_URL;
  const EVM_OP_PORTAL = isHappyPass
    ? '0xAC79ce90e2654B64045351b08EE027C1E0C2df97'
    : process.env.EVM_OP_PORTAL;
  const EVM_STANDARD_BRIDGE = process.env.EVM_STANDARD_BRIDGE;

  if (!EVM_PROPOSER_KEY) throw `missing required env EVM_PROPOSER_KEY for EVM`;

  if (!EVM_USER_KEY) throw `missing required env EVM_USER_KEY for EVM`;

  if (!EVM_PROVIDER_URL) throw `missing required env EVM_PROVIDER_URL for EVM`;

  if (!EVM_OP_PORTAL) throw `missing required env EVM_PROVIDER_URL for EVM`;

  if (!EVM_STANDARD_BRIDGE)
    throw `missing required env EVM_STANDARD_BRIDGE for EVM`;

  let EVM_PROVIDER = new ethers.providers.StaticJsonRpcProvider(
    EVM_PROVIDER_URL,
  );
  let EVM_USER = new ethers.Wallet(EVM_USER_KEY, EVM_PROVIDER);
  let balance = await EVM_USER.getBalance();
  console.log('evm user address:', await EVM_USER.getAddress());
  console.log('evm user balance: ', formatEther(balance));

  let EVM_PROPOSER = new ethers.Wallet(EVM_PROPOSER_KEY, EVM_PROVIDER);
  balance = await EVM_USER.getBalance();
  console.log('evm proposer address:', await EVM_USER.getAddress());
  console.log('evm proposer balance: ', formatEther(balance));

  return {
    EVM_PROVIDER,
    EVM_USER,
    EVM_PROPOSER,
    EVM_OP_PORTAL,
    EVM_STANDARD_BRIDGE,
  };
};
