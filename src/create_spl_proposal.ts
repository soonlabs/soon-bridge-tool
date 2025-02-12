import {
  BridgeInstructionIndex,
  createSVMContext,
  sendTransaction,
} from './helper/svm_context';
import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
  TransactionMessage,
} from '@solana/web3.js';
import { ethers } from 'ethers';
import minimist from 'minimist';
import { isValidEthereumAddress, SYSTEM_PROGRAM } from './helper/tool';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import * as multisig from "@sqds/multisig";

const options = {
  string: ['l1Token', 'name', 'symbol', 'uri', 'decimals'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Token)) {
    throw new Error('invalid ethereum address format.');
  }

  let svmContext = await createSVMContext();
  const squadsProgramKey = svmContext.SQUADS_PROGRAM_KEY;
  if (!squadsProgramKey) {
    throw new Error('missing variable SQUADS_PROGRAM_KEY in .env file.');
  }
  const squadsCreateKey = svmContext.SQUADS_CREATE_KEY;
  if (!squadsCreateKey) {
    throw new Error('missing variable SQUADS_CREATE_KEY in .env file.');
  }

  const [splTokenOwnerKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('spl-owner'), ethers.utils.arrayify(args.l1Token)],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`splTokenOwnerKey: ${splTokenOwnerKey.toString()}`);

  const [splTokenMintKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('spl-mint'), ethers.utils.arrayify(args.l1Token)],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`splTokenMintKey: ${splTokenMintKey.toString()}`);

  const [vaultKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('vault')],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`vaultKey key: ${vaultKey.toString()}`);

  const [bridgeOwnerKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('bridge-owner')],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`bridgeOwnerKey: ${bridgeOwnerKey.toString()}`);

  const [metadataKey] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      PROGRAM_ID.toBuffer(),
      splTokenMintKey.toBuffer(),
    ],
    PROGRAM_ID,
  );

  const [multisigPda] = multisig.getMultisigPda({
    createKey: squadsCreateKey,
    programId: squadsProgramKey,
  });

  // vault pda is the multisig version of bridge owner
  const [vaultPda] = multisig.getVaultPda({
    multisigPda,
    index: 0,
    programId: squadsProgramKey,
  });
  console.log("vault PDA address:", vaultPda.toBase58());

  const instructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.CreateSPL]),
  );
  const createSPLTokenInstruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      ethers.utils.arrayify(args.l1Token),
      Buffer.from(Int8Array.from([args.name.length])),
      Buffer.from(args.name, 'utf8'),
      Buffer.from(Int8Array.from([args.symbol.length])),
      Buffer.from(args.symbol, 'utf8'),
      Buffer.from(Int8Array.from([args.uri.length])),
      Buffer.from(args.uri, 'utf8'),
      Buffer.from(Int8Array.from([args.decimals])),
    ]),
    keys: [
      { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
      { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: splTokenOwnerKey, isSigner: false, isWritable: false },
      { pubkey: splTokenMintKey, isSigner: false, isWritable: true },
      { pubkey: vaultKey, isSigner: false, isWritable: true },
      { pubkey: bridgeOwnerKey, isSigner: false, isWritable: false },
      { pubkey: vaultPda, isSigner: true, isWritable: true },
      { pubkey: PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: metadataKey, isSigner: false, isWritable: true },
    ],
    programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
  });

  const bridgeMessage = new TransactionMessage({
    payerKey: svmContext.SVM_USER.publicKey,
    recentBlockhash: (await svmContext.SVM_Connection.getLatestBlockhash()).blockhash,
    instructions: [createSPLTokenInstruction],
  });

  // Get the current multisig transaction index
  const multisigInfo = await multisig.accounts.Multisig.fromAccountAddress(
    svmContext.SVM_Connection,
    multisigPda
  );
  const currentTransactionIndex = Number(multisigInfo.transactionIndex);
  const newTransactionIndex = BigInt(currentTransactionIndex + 1);

  console.log("✨ Creating vault transaction proposal...");
  const vaultTransactionInstruction = multisig.instructions.vaultTransactionCreate({
    multisigPda,
    transactionIndex: newTransactionIndex,
    creator: svmContext.SVM_USER.publicKey,
    vaultIndex: 0,
    ephemeralSigners: 0,
    transactionMessage: bridgeMessage,
    memo: "Bridge from destination",
    programId: squadsProgramKey,
  });

  const createProposalInstruction = multisig.instructions.proposalCreate({
      multisigPda,
      transactionIndex: newTransactionIndex,
      creator: svmContext.SVM_USER.publicKey,
      programId: squadsProgramKey,
  });

  const signature = await sendTransaction(svmContext, [vaultTransactionInstruction, createProposalInstruction], false);
  console.log(`Tx signature: ${signature}`);
}

main().catch((error) => {
  console.error(error);
});
