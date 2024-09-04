import { ethers } from 'ethers';
import bs58 from 'bs58';
import { Types } from '../../typechain-types/OptimismPortal';

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

export function parseWithdrawTxInfo(
  withdrawInfoData: Buffer,
): Types.WithdrawalTransactionStruct {
  const nonce = '0x' + withdrawInfoData.slice(0, 32).toString('hex');
  const sender = '0x' + withdrawInfoData.slice(32, 64).toString('hex');
  const target = '0x' + withdrawInfoData.slice(64, 84).toString('hex');
  const value = '0x' + withdrawInfoData.slice(84, 116).toString('hex');
  const gasLimit = '0x' + withdrawInfoData.slice(116, 148).toString('hex');
  const data = '0x' + withdrawInfoData.slice(148).toString('hex');
  const ethValue = parseInt(value, 16);
  console.log(`ethValue: ${ethValue}`);
  if (ethValue === 0) {
    console.log("list erc20 cross chain info:");
    const l1Token = '0x' + data.slice(490, 530);
    const l2Token = '0x' + data.slice(530, 594);
    const from = '0x' + data.slice(594, 658);
    const to = '0x' + data.slice(682, 722);
    const amount = '0x' + data.slice(722, 786);
    const amountInDecimal12 = parseInt(amount, 16);
    console.log(`l1Token: ${l1Token}`);
    console.log(`l2Token: ${l2Token}`);
    console.log(`from: ${from}`);
    console.log(`to: ${to}`);
    console.log(`amount: ${amount}`);
    console.log(`amountInDecimal12: ${amountInDecimal12}`);
  }
  return {
    nonce,
    sender,
    target,
    value,
    gasLimit,
    data,
  };
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
