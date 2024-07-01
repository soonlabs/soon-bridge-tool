import {ethers} from "ethers";
import bs58 from 'bs58';
import {Types} from "../../typechain-types/OptimismPortal";
import BN from "bn.js";

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
    if (publicKey.length !== 44) {
        return false;
    }

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
        throw "invalid public key"
    }
    return decoded.toString()
}

export function parseWithdrawTxInfo(withdrawInfoData: Buffer): Types.PdaWithdrawalTransactionStruct {
    const nonce = "0x" + withdrawInfoData.slice(0, 32).toString("hex")
    const sender = "0x" + withdrawInfoData.slice(32, 64).toString("hex");
    const target = "0x" + withdrawInfoData.slice(64, 84).toString("hex")
    const value = "0x" + withdrawInfoData.slice(84, 116).toString("hex")
    const gasLimit = "0x" + withdrawInfoData.slice(116, 148).toString("hex")
    const data = "0x" + withdrawInfoData.slice(148).toString("hex")

    return {
        nonce,
        sender,
        target,
        value,
        gasLimit,
        data
    }
}

export function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
