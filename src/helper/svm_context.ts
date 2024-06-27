import {clusterApiUrl, Connection, Keypair} from "@solana/web3.js";
import 'dotenv/config'

export interface SVM_CONTEXT {
    SVM_Connection: Connection,
    SVM_USER: Keypair,
}

export const createSVMContext = async (): Promise<SVM_CONTEXT> => {
    const SVM_USER_KEY = process.env.SVM_USER_KEY
    if (!SVM_USER_KEY)
        throw `missing required env SVM_USER_KEY for SVM`;

    const SVM_CONNECTION_URL = process.env.SVM_CONNECTION_URL
    if (!SVM_CONNECTION_URL)
        throw `missing required env SVM_CONNECTION_URL for SVM`;

    const privateKeyArray = Uint8Array.from(SVM_USER_KEY.slice(1, -1).split(',').map(Number));
    const SVM_USER = Keypair.fromSecretKey(privateKeyArray);
    console.log('user public key:', SVM_USER.publicKey.toBase58());

    const SVM_Connection = new Connection(SVM_CONNECTION_URL);

    const balance = await SVM_Connection.getBalance(SVM_USER.publicKey);
    console.log("svm user balance: ", balance);

    return {
        SVM_Connection,
        SVM_USER,
    }
}
