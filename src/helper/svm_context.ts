import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import 'dotenv/config';

export const SYSTEM_PROGRAM = new PublicKey('11111111111111111111111111111111');
export const DEFAULT_DEPOSIT_PROGRAM = new PublicKey(
  'Deposit111111111111111111111111111111111111',
);
export const DEFAULT_L1_BLOCK_INFO_PROGRAM = new PublicKey(
  'L1BLockinfo11111111111111111111111111111111',
);
export const DEFAULT_WITHDRAW_PROGRAM = new PublicKey(
  'SvmWithdrawBridge11111111111111111111111111',
);

export interface SVM_CONTEXT {
  SVM_Connection: Connection;
  SVM_SOON_RPC_URL: string;
  SVM_USER: Keypair;
  SVM_DEPOSITOR: Keypair;
  SVM_WITHDRAW_PROGRAM_ID: PublicKey;
  SVM_L1_BLOCK_INFO_PROGRAM_ID: PublicKey;
  SVM_DEPOSIT_PROGRAM_ID: PublicKey;
}

export enum InstructionIndex {
  CreateBot = 0,
  RedeemAllAssetsFromBot = 1,
  StartBot = 2,
}

export const createSVMContext = async (): Promise<SVM_CONTEXT> => {
  const SVM_USER_KEY = process.env.SVM_USER_KEY;
  if (!SVM_USER_KEY) throw `missing required env SVM_USER_KEY for SVM`;

  const SVM_DEPOSITOR_KEY = process.env.SVM_DEPOSITOR_KEY;
  if (!SVM_DEPOSITOR_KEY)
    throw `missing required env SVM_DEPOSITOR_KEY for SVM`;

  const SVM_CONNECTION_URL = process.env.SVM_CONNECTION_URL;
  if (!SVM_CONNECTION_URL)
    throw `missing required env SVM_CONNECTION_URL for SVM`;

  const SVM_SOON_RPC_URL = process.env.SVM_SOON_RPC_URL;
  if (!SVM_SOON_RPC_URL) throw `missing required env SVM_SOON_RPC_URL for SVM`;

  let SVM_DEPOSIT_PROGRAM_ID;
  let SVM_DEPOSIT_PROGRAM_KEY = process.env.SVM_DEPOSIT_PROGRAM_KEY;
  if (SVM_DEPOSIT_PROGRAM_KEY) {
    SVM_DEPOSIT_PROGRAM_ID = new PublicKey(SVM_DEPOSIT_PROGRAM_KEY);
  } else {
    SVM_DEPOSIT_PROGRAM_ID = DEFAULT_DEPOSIT_PROGRAM;
  }

  let SVM_WITHDRAW_PROGRAM_ID;
  let SVM_WITHDRAW_PROGRAM_KEY = process.env.SVM_WITHDRAW_PROGRAM_KEY;
  if (SVM_WITHDRAW_PROGRAM_KEY) {
    SVM_WITHDRAW_PROGRAM_ID = new PublicKey(SVM_WITHDRAW_PROGRAM_KEY);
  } else {
    SVM_WITHDRAW_PROGRAM_ID = DEFAULT_WITHDRAW_PROGRAM;
  }

  let SVM_L1_BLOCK_INFO_PROGRAM_ID;
  let SVM_L1_BLOCK_INFO_PROGRAM_KEY = process.env.SVM_L1_BLOCK_INFO_PROGRAM_KEY;
  if (SVM_L1_BLOCK_INFO_PROGRAM_KEY) {
    SVM_L1_BLOCK_INFO_PROGRAM_ID = new PublicKey(SVM_L1_BLOCK_INFO_PROGRAM_KEY);
  } else {
    SVM_L1_BLOCK_INFO_PROGRAM_ID = DEFAULT_L1_BLOCK_INFO_PROGRAM;
  }

  const privateKeyArray = Uint8Array.from(
    SVM_USER_KEY.slice(1, -1).split(',').map(Number),
  );
  const SVM_USER = Keypair.fromSecretKey(privateKeyArray);
  console.log('svm user address:', SVM_USER.publicKey.toBase58());

  const depositorKeyArray = Uint8Array.from(
    SVM_DEPOSITOR_KEY.slice(1, -1).split(',').map(Number),
  );
  const SVM_DEPOSITOR = Keypair.fromSecretKey(depositorKeyArray);
  console.log('svm depositor address:', SVM_DEPOSITOR.publicKey.toBase58());

  const SVM_Connection = new Connection(SVM_CONNECTION_URL, 'confirmed');

  const balance = await SVM_Connection.getBalance(SVM_USER.publicKey);
  console.log('svm user balance: ', balance);

  return {
    SVM_Connection,
    SVM_USER,
    SVM_DEPOSITOR,
    SVM_WITHDRAW_PROGRAM_ID,
    SVM_L1_BLOCK_INFO_PROGRAM_ID,
    SVM_DEPOSIT_PROGRAM_ID,
    SVM_SOON_RPC_URL,
  };
};

export function genDepositInfoAccount(
  depositorKey: PublicKey,
  programId: PublicKey,
): PublicKey {
  const depositSeed = Buffer.from('deposit');
  const [depositKey] = PublicKey.findProgramAddressSync(
    [depositSeed, depositorKey.toBuffer()],
    programId,
  );
  console.log(`depositKey: ${depositKey}`);
  return depositKey;
}

export function genProgramDataAccountKey(
  seed: string,
  programId: PublicKey,
): PublicKey {
  const seedBuffer = Buffer.from(seed);
  const [key] = PublicKey.findProgramAddressSync([seedBuffer], programId);
  return key;
}

export async function initProgramDataAccount(
  svmContext: SVM_CONTEXT,
  seed: string,
  programId: PublicKey,
): Promise<string> {
  const accountKey = genProgramDataAccountKey(seed, programId);
  console.log(`accountKey: ${accountKey}`);

  const instructionIndex = Buffer.from(
    Int8Array.from([InstructionIndex.CreateBot]),
  );
  const instruction = new TransactionInstruction({
    data: Buffer.concat([instructionIndex]),
    keys: [
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: accountKey, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: true,
      },
    ],
    programId: programId,
  });

  return await sendTransaction(svmContext, [instruction]);
}

export async function sendTransaction(
  svmContext: SVM_CONTEXT,
  instructions: TransactionInstruction[],
  skipPreflight = false,
) {
  const tx = new Transaction({ feePayer: svmContext.SVM_USER.publicKey });
  tx.add(...instructions);

  try {
    const signature = await sendAndConfirmTransaction(
      svmContext.SVM_Connection,
      tx,
      [svmContext.SVM_USER],
      { skipPreflight, commitment: 'finalized' },
    );
    console.log(`send transaction success. signature: ${signature}`);
    return signature;
  } catch (e) {
    console.log(`send transaction failed. error: ${e}`);
    return '';
  }
}

export async function transferSOL(
  svmContext: SVM_CONTEXT,
  to: PublicKey,
  amount: number,
): Promise<string> {
  const instruction = SystemProgram.transfer({
    fromPubkey: svmContext.SVM_USER.publicKey,
    toPubkey: to,
    lamports: amount,
  });
  return await sendTransaction(svmContext, [instruction]);
}
