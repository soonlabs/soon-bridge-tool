import {ethers} from "ethers";
import bs58 from 'bs58';
import {Types} from "../../typechain-types/OptimismPortal";
import {Numberu256} from "./number.utils";

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

export function parseWithdrawTxInfo(withdrawInfoData: Buffer): Types.PdaWithdrawalTransactionStruct {
    const nonce = Numberu256.fromBuffer(withdrawInfoData.slice(0, 32)).toString();
    const sender = withdrawInfoData.slice(32, 64).toString("hex");
    const target = withdrawInfoData.slice(64, 84).toString("hex")
    const value = Numberu256.fromBuffer(withdrawInfoData.slice(84, 116)).toString();
    const gasLimit = Numberu256.fromBuffer(withdrawInfoData.slice(116, 148)).toString();
    const data = withdrawInfoData.slice(148).toString("hex")

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
