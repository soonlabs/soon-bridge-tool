import {ethers, Wallet} from 'ethers';
import {StaticJsonRpcProvider} from "@ethersproject/providers/src.ts/url-json-rpc-provider";
import 'dotenv/config'

export interface EVM_CONTEXT {
    EVM_PROVIDER: StaticJsonRpcProvider,
    EMV_USER: Wallet,
    EMV_PROPOSER: Wallet,
}

export const createEVMContext = async (isHappyPass: boolean): Promise<EVM_CONTEXT> => {
    const EVM_PROPOSER_KEY = isHappyPass ? "0x103d65b622f9532a22aa59e70f54c4300ecdd778927477591f4fc459e6f8c093": process.env.EVM_PROPOSER_KEY
    const EVM_USER_KEY = isHappyPass ? "0x103d65b622f9532a22aa59e70f54c4300ecdd778927477591f4fc459e6f8c093": process.env.EVM_USER_KEY
    const EVM_PROVIDER_URL = isHappyPass ? "http://localhost:8545": process.env.EVM_PROVIDER_URL

    if (!EVM_PROPOSER_KEY)
        throw `missing required env EVM_PROPOSER_KEY for EVM`;

    if (!EVM_USER_KEY)
        throw `missing required env EVM_USER_KEY for EVM`;

    if (!EVM_PROVIDER_URL)
        throw `missing required env EVM_PROVIDER_URL for EVM`;

    let EVM_PROVIDER = new ethers.providers.StaticJsonRpcProvider(EVM_PROVIDER_URL)
    let EMV_USER = new ethers.Wallet(EVM_USER_KEY, EVM_PROVIDER);
    let EMV_PROPOSER = new ethers.Wallet(EVM_PROPOSER_KEY, EVM_PROVIDER);

    return {
        EVM_PROVIDER,
        EMV_USER,
        EMV_PROPOSER
    }
}

