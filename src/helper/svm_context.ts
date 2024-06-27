import {
    Connection,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    Transaction,
    TransactionInstruction
} from "@solana/web3.js";
import 'dotenv/config'

export const SYSTEM_PROGRAM = new PublicKey('11111111111111111111111111111111');

export interface SVM_CONTEXT {
    SVM_Connection: Connection,
    SVM_USER: Keypair,
    SVM_WITHDRAW_PROGRAM_ID: PublicKey,
}

export const createSVMContext = async (): Promise<SVM_CONTEXT> => {
    const SVM_USER_KEY = process.env.SVM_USER_KEY
    if (!SVM_USER_KEY)
        throw `missing required env SVM_USER_KEY for SVM`;

    const SVM_CONNECTION_URL = process.env.SVM_CONNECTION_URL
    if (!SVM_CONNECTION_URL)
        throw `missing required env SVM_CONNECTION_URL for SVM`;

    const SVM_WITHDRAW_PROGRAM_KEY = process.env.SVM_WITHDRAW_PROGRAM_KEY
    if (!SVM_WITHDRAW_PROGRAM_KEY)
        throw `missing required env SVM_WITHDRAW_PROGRAM_KEY for SVM`;

    const privateKeyArray = Uint8Array.from(SVM_USER_KEY.slice(1, -1).split(',').map(Number));
    const SVM_USER = Keypair.fromSecretKey(privateKeyArray);
    console.log('svm user address:', SVM_USER.publicKey.toBase58());

    const SVM_Connection = new Connection(SVM_CONNECTION_URL, 'confirmed');

    const balance = await SVM_Connection.getBalance(SVM_USER.publicKey);
    console.log("svm user balance: ", balance);

    const SVM_WITHDRAW_PROGRAM_ID = new PublicKey(SVM_WITHDRAW_PROGRAM_KEY);

    return {
        SVM_Connection,
        SVM_USER,
        SVM_WITHDRAW_PROGRAM_ID,
    }
}

export function genWithdrawCounterAccountKey(programId: PublicKey): PublicKey {
    const counterSeed = Buffer.from('svm-withdraw-counter');
    const [counterKey, ] = PublicKey.findProgramAddressSync([counterSeed], programId);
    return counterKey;
}

export async function sendTransaction(svmContext: SVM_CONTEXT, instructions: TransactionInstruction[], skipPreflight = false) {
    const tx = new Transaction({ feePayer: svmContext.SVM_USER.publicKey });
    tx.add(...instructions);

    const signature = await sendAndConfirmTransaction(svmContext.SVM_Connection, tx, [svmContext.SVM_USER], { skipPreflight }).catch((e) => {
        console.error(e);
        throw e;
    });
    console.log(`Signature: ${signature}`);
}

