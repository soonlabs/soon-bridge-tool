import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import 'dotenv/config';
import { ethers } from 'ethers';
import { Buffer } from 'buffer';
import {
  DEFAULT_BRIDGE_PROGRAM,
  DEFAULT_L1_BLOCK_INFO_PROGRAM,
  SYSTEM_PROGRAM,
} from './tool';

export interface SVM_CONTEXT {
  SVM_Connection: Connection;
  SVM_RPC_URL: string;
  SVM_USER: Keypair;
  // SVM_DEPOSITOR: Keypair;
  SVM_BRIDGE_ADMIN: Keypair;
  SVM_BRIDGE_PROGRAM_ID: PublicKey;
  SVM_L1_BLOCK_INFO_PROGRAM_ID: PublicKey;
  SQUADS_PROGRAM_KEY: PublicKey | undefined;
  SQUADS_CREATE_KEY: PublicKey | undefined;
}

export enum L1BlockInfoInstructionIndex {
  CreateL1BlockInfoAccount = 0,
  //UpdateL1BlockInfo = 1,
}

export enum BridgeInstructionIndex {
  CreateVaultAccount = 0,
  //DepositETH = 1,
  CreateWithdrawalCounterAccount = 2,
  WithdrawETH = 3,
  CreateSPL = 4,
  //DepositERC20 = 5,
  WithdrawSPL = 6,
  CreateBridgeConfig = 7,
  ChangeBridgeAdmin = 8,
  CreateUserWithdrawalCounterAccount = 9,
  AddSPLMetadata = 10,
}

export const createSVMContext = async (): Promise<SVM_CONTEXT> => {
  const SVM_USER_KEY = process.env.SVM_USER_KEY;
  if (!SVM_USER_KEY) throw `missing required env SVM_USER_KEY for SVM`;

  // const SVM_DEPOSITOR_KEY = process.env.SVM_DEPOSITOR_KEY;
  // if (!SVM_DEPOSITOR_KEY)
  //   throw `missing required env SVM_DEPOSITOR_KEY for SVM`;

  const SVM_BRIDGE_ADMIN_KEYPAIR = process.env.SVM_BRIDGE_ADMIN_KEYPAIR;
  if (!SVM_BRIDGE_ADMIN_KEYPAIR)
    throw `missing required env SVM_BRIDGE_ADMIN_KEYPAIR for SVM`;

  const SVM_RPC_URL = process.env.SVM_RPC_URL;
  if (!SVM_RPC_URL) throw `missing required env SVM_RPC_URL for SVM`;

  let SVM_BRIDGE_PROGRAM_ID;
  let SVM_BRIDGE_PROGRAM_KEY = process.env.SVM_BRIDGE_PROGRAM_KEY;
  if (SVM_BRIDGE_PROGRAM_KEY) {
    SVM_BRIDGE_PROGRAM_ID = new PublicKey(SVM_BRIDGE_PROGRAM_KEY);
  } else {
    SVM_BRIDGE_PROGRAM_ID = DEFAULT_BRIDGE_PROGRAM;
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

  // const depositorKeyArray = Uint8Array.from(
  //   SVM_DEPOSITOR_KEY.slice(1, -1).split(',').map(Number),
  // );
  // const SVM_DEPOSITOR = Keypair.fromSecretKey(depositorKeyArray);
  // console.log('svm depositor address:', SVM_DEPOSITOR.publicKey.toBase58());

  const bridgeAdminKeyArray = Uint8Array.from(
    SVM_BRIDGE_ADMIN_KEYPAIR.slice(1, -1).split(',').map(Number),
  );
  const SVM_BRIDGE_ADMIN = Keypair.fromSecretKey(bridgeAdminKeyArray);
  console.log(
    'svm bridge admin address:',
    SVM_BRIDGE_ADMIN.publicKey.toBase58(),
  );

  const SVM_Connection = new Connection(SVM_RPC_URL, 'confirmed');

  const balance = await SVM_Connection.getBalance(SVM_USER.publicKey);
  console.log('svm user balance: ', balance);

  const squads_program_key = process.env.SQUADS_PROGRAM_KEY;
  const SQUADS_PROGRAM_KEY = squads_program_key ? new PublicKey(squads_program_key) : undefined;

  const squads_create_key = process.env.SQUADS_CREATE_KEY;
  const SQUADS_CREATE_KEY = squads_create_key ? new PublicKey(squads_create_key) : undefined;

  return {
    SVM_Connection,
    SVM_USER,
    // SVM_DEPOSITOR,
    SVM_BRIDGE_ADMIN,
    SVM_BRIDGE_PROGRAM_ID,
    SVM_L1_BLOCK_INFO_PROGRAM_ID,
    SVM_RPC_URL,
    SQUADS_CREATE_KEY,
    SQUADS_PROGRAM_KEY,
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

export function genProgramDataAccountKeyWithBufferSeeds(
  seeds: Array<Buffer | Uint8Array>,
  programId: PublicKey,
): PublicKey {
  const [key] = PublicKey.findProgramAddressSync(seeds, programId);
  return key;
}

export async function initProgramDataAccount(
  svmContext: SVM_CONTEXT,
  seed: string,
  programId: PublicKey,
  ixIndex: BridgeInstructionIndex | L1BlockInfoInstructionIndex,
): Promise<string> {
  const accountKey = genProgramDataAccountKey(seed, programId);
  console.log(`accountKey: ${accountKey}`);

  const instructionIndex = Buffer.from(Int8Array.from([ixIndex]));
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

export async function createBridgeConfigAccount(
  svmContext: SVM_CONTEXT,
  seed: string,
  programId: PublicKey,
  l1CrossDomainMessenger: string,
  l1StandardBridge: string,
): Promise<string> {
  const accountKey = genProgramDataAccountKey(seed, programId);
  console.log(`accountKey: ${accountKey}`);

  const instructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.CreateBridgeConfig]),
  );

  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      Buffer.concat([ethers.utils.arrayify(l1CrossDomainMessenger)]),
      Buffer.concat([ethers.utils.arrayify(l1StandardBridge)]),
    ]),
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
  requireAdminSig: boolean = false,
  skipPreflight = false,
) {
  // const tx = new Transaction({ feePayer: svmContext.SVM_USER.publicKey });
  // tx.add(...instructions);
  try {
    const recentBlockHash =
      await svmContext.SVM_Connection.getLatestBlockhash('processed');
    // tx.recentBlockhash = recentBlockHash.blockhash;
    console.log(`get recentBlockhash: ${recentBlockHash.blockhash}`);

    const transaction = new TransactionMessage({
      payerKey: svmContext.SVM_USER.publicKey,
      recentBlockhash: recentBlockHash.blockhash,
      instructions: instructions,
    }).compileToV0Message();
    let versionedTx = new VersionedTransaction(transaction);
    let signers = [svmContext.SVM_USER];
    if (requireAdminSig) {
      signers.push(svmContext.SVM_BRIDGE_ADMIN);
    }
    versionedTx.sign(signers);
    const txId = await svmContext.SVM_Connection.sendTransaction(versionedTx, {
      skipPreflight,
      preflightCommitment: 'processed',
    });
    console.log(`send transaction success. signature: ${txId}`);
    return txId;
  } catch (e) {
    console.log(`send transaction failed. error: ${e}`);
    return '';
  }

  //sendAndConfirmTransaction may cause exceed block height error
  /*
  try {
    const signature = await sendAndConfirmTransaction(
      svmContext.SVM_Connection,
      tx,
      [svmContext.SVM_USER],
      { skipPreflight, commitment: 'processed' },
    );
    console.log(`send transaction success. signature: ${signature}`);
    return signature;
  } catch (e) {
    console.log(`send transaction failed. error: ${e}`);
    return '';
  }*/
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
