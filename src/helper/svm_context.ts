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
    SVM_SOON_RPC_URL: string,
    SVM_USER: Keypair,
    SVM_DEPOSITOR: Keypair,
    SVM_WITHDRAW_PROGRAM_ID: PublicKey,
    SVM_L1_BLOCK_INFO_PROGRAM_ID: PublicKey,
    SVM_DEPOSIT_PROGRAM_ID: PublicKey,
}

export const createSVMContext = async (): Promise<SVM_CONTEXT> => {
    const SVM_USER_KEY = process.env.SVM_USER_KEY
    if (!SVM_USER_KEY)
        throw `missing required env SVM_USER_KEY for SVM`;

    const SVM_DEPOSITOR_KEY = process.env.SVM_DEPOSITOR_KEY
    if (!SVM_DEPOSITOR_KEY)
        throw `missing required env SVM_DEPOSITOR_KEY for SVM`;

    const SVM_CONNECTION_URL = process.env.SVM_CONNECTION_URL
    if (!SVM_CONNECTION_URL)
        throw `missing required env SVM_CONNECTION_URL for SVM`;

    const SVM_SOON_RPC_URL = process.env.SVM_SOON_RPC_URL
    if (!SVM_SOON_RPC_URL)
        throw `missing required env SVM_SOON_RPC_URL for SVM`;

    let SVM_WITHDRAW_PROGRAM_KEY = process.env.SVM_WITHDRAW_PROGRAM_KEY
    if (!SVM_WITHDRAW_PROGRAM_KEY)
        SVM_WITHDRAW_PROGRAM_KEY = "SvmWithdrawBridge11111111111111111111111111"

    let SVM_L1_BLOCK_INFO_PROGRAM_KEY = process.env.SVM_L1_BLOCK_INFO_PROGRAM_KEY
    if (!SVM_L1_BLOCK_INFO_PROGRAM_KEY)
        SVM_L1_BLOCK_INFO_PROGRAM_KEY = "L1BLockinfo11111111111111111111111111111111"

    let SVM_DEPOSIT_PROGRAM_KEY = process.env.SVM_DEPOSIT_PROGRAM_KEY
    if (!SVM_DEPOSIT_PROGRAM_KEY)
        SVM_DEPOSIT_PROGRAM_KEY = "Deposit111111111111111111111111111111111111"

    const privateKeyArray = Uint8Array.from(SVM_USER_KEY.slice(1, -1).split(',').map(Number));
    const SVM_USER = Keypair.fromSecretKey(privateKeyArray);
    console.log('svm user address:', SVM_USER.publicKey.toBase58());

    const depositorKeyArray = Uint8Array.from(SVM_DEPOSITOR_KEY.slice(1, -1).split(',').map(Number));
    const SVM_DEPOSITOR = Keypair.fromSecretKey(depositorKeyArray);
    console.log('svm depositor address:', SVM_DEPOSITOR.publicKey.toBase58());

    const SVM_Connection = new Connection(SVM_CONNECTION_URL, 'confirmed');

    const balance = await SVM_Connection.getBalance(SVM_USER.publicKey);
    console.log("svm user balance: ", balance);

    const SVM_WITHDRAW_PROGRAM_ID = new PublicKey(SVM_WITHDRAW_PROGRAM_KEY);
    const SVM_L1_BLOCK_INFO_PROGRAM_ID = new PublicKey(SVM_L1_BLOCK_INFO_PROGRAM_KEY);
    const SVM_DEPOSIT_PROGRAM_ID = new PublicKey(SVM_DEPOSIT_PROGRAM_KEY);

    return {
        SVM_Connection,
        SVM_USER,
        SVM_DEPOSITOR,
        SVM_WITHDRAW_PROGRAM_ID,
        SVM_L1_BLOCK_INFO_PROGRAM_ID,
        SVM_DEPOSIT_PROGRAM_ID,
        SVM_SOON_RPC_URL
    }
}

export function genDepositInfoAccount(depositorKey: PublicKey, programId: PublicKey): PublicKey {
    const depositSeed = Buffer.from('deposit');
    const [depositKey, ] = PublicKey.findProgramAddressSync([depositSeed, depositorKey.toBuffer()], programId);
    console.log(`depositKey: ${depositKey}`);
    return depositKey;
}

export function genProgramDataAccountKey(seed: string,  programId: PublicKey): PublicKey {
    const seedBuffer = Buffer.from(seed);
    const [key, ] = PublicKey.findProgramAddressSync([seedBuffer], programId);
    return key;
}

export async function initProgramDataAccount(svmContext: SVM_CONTEXT, seed: string, programId: PublicKey): Promise<string> {
    const accountKey = genProgramDataAccountKey(seed, programId)
    console.log(`accountKey: ${accountKey}`);

    const instructionIndex = Buffer.alloc(4);
    instructionIndex.writeUInt32LE(0);
    const instruction = new TransactionInstruction({
        data: Buffer.concat([
            instructionIndex,
        ]),
        keys: [
            { pubkey: accountKey, isSigner: false, isWritable: true },
            { pubkey: svmContext.SVM_USER.publicKey, isSigner: true, isWritable: true },
            { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
        ],
        programId: programId,
    });

    return await sendTransaction(svmContext, [instruction])
}

export async function sendTransaction(svmContext: SVM_CONTEXT, instructions: TransactionInstruction[], skipPreflight = false) {
    const tx = new Transaction({ feePayer: svmContext.SVM_USER.publicKey });
    tx.add(...instructions);

    const signature = await sendAndConfirmTransaction(svmContext.SVM_Connection, tx, [svmContext.SVM_USER], { skipPreflight });
    console.log(`send transaction success. signature: ${signature}`);

    return signature;
}

