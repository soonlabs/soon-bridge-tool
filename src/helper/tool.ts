import { ethers } from 'ethers';
import bs58 from 'bs58';
import { Types } from '../../typechain-types/OptimismPortal';
import axios from 'axios';
import { EVM_CONTEXT } from './evm_context';
import { PublicKey } from '@solana/web3.js';
import { formatEther, formatUnits } from 'ethers/lib/utils';
import { ERC20__factory } from '../../typechain-types';

export const SYSTEM_PROGRAM = new PublicKey('11111111111111111111111111111111');
export const DEFAULT_L1_BLOCK_INFO_PROGRAM = new PublicKey(
  'L1BLockinfo11111111111111111111111111111111',
);
export const DEFAULT_BRIDGE_PROGRAM = new PublicKey(
  'Bridge1111111111111111111111111111111111111',
);

export function isValidEthereumAddress(address: string): boolean {
  return ethers.utils.isAddress(address);
}

export function isValidSolanaSignature(signature: string): boolean {
  if (signature.length !== 88) {
    return false;
  }

  try {
    const decoded = bs58.decode(signature);
    return decoded.length === 64;
  } catch (error) {
    return false;
  }
}

export function isValidSolanaPublicKey(publicKey: string): boolean {
  try {
    const decoded = bs58.decode(publicKey);
    return decoded.length === 32;
  } catch (error) {
    return false;
  }
}

export function base58PublicKeyToHex(publicKey: string): string {
  const decoded = bs58.decode(publicKey);
  if (decoded.length !== 32) {
    throw 'invalid public key';
  }
  return ethers.utils.hexlify(decoded);
}

export function hexToBase58(hex: string): string {
  const uint8Array = ethers.utils.arrayify(hex);
  return bs58.encode(uint8Array);
}

export function parseWithdrawTxInfo(
  withdrawInfoData: Buffer,
): Types.WithdrawalTransactionStruct {
  const nonce = '0x' + withdrawInfoData.slice(0, 32).toString('hex');
  const sender = '0x' + withdrawInfoData.slice(32, 64).toString('hex');
  const target = '0x' + withdrawInfoData.slice(64, 84).toString('hex');
  const value = '0x' + withdrawInfoData.slice(84, 116).toString('hex');
  const gasLimit = '0x' + withdrawInfoData.slice(116, 148).toString('hex');
  const data = '0x' + withdrawInfoData.slice(148).toString('hex');

  return {
    nonce,
    sender,
    target,
    value,
    gasLimit,
    data,
  };
}

export function calculateDepositTxSignature(
  l1BlockHash: string,
  logIndex: number,
) {
  const bigNumber = ethers.BigNumber.from(logIndex);
  const hexString = bigNumber.toHexString();
  let logIndexString = ethers.utils.hexZeroPad(hexString, 32);
  if (logIndexString.startsWith('0x')) {
    logIndexString = logIndexString.slice(2);
  }
  let INNER_HASH = ethers.utils.keccak256(l1BlockHash + logIndexString);
  if (INNER_HASH.startsWith('0x')) {
    INNER_HASH = INNER_HASH.slice(2);
  }

  const DEPOSIT_DOMAIN =
    '0x0000000000000000000000000000000000000000000000000000000000000000';
  let DEPOSIT_SOURCE_HASH = ethers.utils.keccak256(DEPOSIT_DOMAIN + INNER_HASH);

  DEPOSIT_SOURCE_HASH = DEPOSIT_SOURCE_HASH + '0'.repeat(64);

  return hexToBase58(DEPOSIT_SOURCE_HASH);
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendSlackMessage(slackUrl: string, message: string) {
  console.log(message);
  try {
    const response = await axios.post(slackUrl, {
      text: message,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status != 200) {
      console.error('send slack message failed, response data', response.data);
    }
  } catch (e) {
    console.error('send slack message failed:', e);
  }

  await sleep(500);
}

const ParseDepositABI = [
  'relayMessage(uint256,address,bytes32,uint256,uint256,bytes)',
  'finalizeBridgeETH(bytes32,address,uint256,bytes)',
  'finalizeBridgeERC20(address,bytes32,bytes32,address,uint256,bytes)',
];

export async function parseDepositTransactionEventData(
  evm: EVM_CONTEXT,
  event_data: string,
): Promise<string> {
  //32(mint) + 32(value) + 8(gas limit) + 1(is_creation)
  let messengerData = event_data.slice(73 * 2).toUpperCase();

  //decode relayMessage(uint256,address,bytes32,uint256,uint256,bytes)
  if (messengerData.startsWith('E5D0A3D7')) {
    // let nonce = messengerData.slice(4*2, 36*2);
    let from = messengerData.slice(36 * 2, 68 * 2);
    // let to = messengerData.slice(68*2, 100*2);
    // let value = messengerData.slice(100*2, 132*2);
    // let gasLimit = messengerData.slice(132*2, 164*2);
    // let bridgeDataOffset = messengerData.slice(164, 196*2);
    // let bridgeDataLength = messengerData.slice(196*2, 228*2);

    let fromAddress = from.slice(24);
    if (fromAddress === evm.EVM_STANDARD_BRIDGE.toUpperCase().slice(2)) {
      let bridgeData = messengerData.slice(228 * 2);
      if (bridgeData.startsWith('596a37c5'.toUpperCase())) {
        let from = bridgeData.slice(4 * 2, 36 * 2);
        let to = bridgeData.slice(36 * 2, 68 * 2);
        let amount = bridgeData.slice(68 * 2, 100 * 2);
        let ethAmount = ethers.BigNumber.from('0x' + amount);

        //share decimal is 9
        return `Native Token deposited, value: ${formatUnits(ethAmount, 9)}`;
      } else if (bridgeData.startsWith('f73fb39c'.toUpperCase())) {
        let l2_token = bridgeData.slice(4 * 2, 36 * 2);
        let l1_token = bridgeData.slice(36 * 2, 68 * 2);
        let from = bridgeData.slice(68 * 2, 100 * 2);
        let to = bridgeData.slice(100 * 2, 132 * 2);
        let amount = bridgeData.slice(132 * 2, 164 * 2);
        let l1_token_address = '0x' + l1_token.slice(24);
        const ERC20 = ERC20__factory.connect(
          l1_token_address,
          evm.EVM_PROVIDER,
        );
        let symbol = await ERC20.symbol();
        let decimal = await ERC20.decimals();
        let tokenAmount = ethers.BigNumber.from('0x' + amount);
        //share decimal is 9
        return `ERC20/BRC20 deposited, token: ${symbol}, amount: ${formatUnits(tokenAmount, 9)}`;
      } else {
        throw 'invalid L1StandardBridge selector';
      }
    } else {
      throw 'invalid caller for L1CrossDomainMessenger';
    }
  } else {
    throw 'invalid cross domain messenger selector';
  }
}

export function concatHexStrings(hexArray: string[]): string {
  const strippedHexParts = hexArray.map((hex) =>
    hex.startsWith('0x') ? hex.slice(2) : hex,
  );

  return '0x' + strippedHexParts.join('');
}
