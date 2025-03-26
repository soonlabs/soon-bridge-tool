import {
  BridgeInstructionIndex,
  createSVMContext,
  sendTransaction,
} from './helper/svm_context';
import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { ethers } from 'ethers';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';
import { PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';

const options = {
  string: ['l1Token', 'name', 'symbol', 'uri'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  if (!isValidEthereumAddress(args.l1Token)) {
    throw new Error('invalid ethereum address format.');
  }

  let svmContext = await createSVMContext();

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

  const instructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.UpdateSPLMetadata]),
  );
  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      ethers.utils.arrayify(args.l1Token),
      Buffer.from(Int8Array.from([args.name.length])),
      Buffer.from(args.name, 'utf8'),
      Buffer.from(Int8Array.from([args.symbol.length])),
      Buffer.from(args.symbol, 'utf8'),
      Buffer.from(Int8Array.from([args.uri.length])),
      Buffer.from(args.uri, 'utf8'),
    ]),
    keys: [
      { pubkey: metadataKey, isSigner: false, isWritable: true },
      { pubkey: splTokenMintKey, isSigner: false, isWritable: true },
      { pubkey: splTokenOwnerKey, isSigner: false, isWritable: false },
      { pubkey: PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: bridgeOwnerKey, isSigner: false, isWritable: false },
      {
        pubkey: svmContext.SVM_BRIDGE_ADMIN.publicKey,
        isSigner: true,
        isWritable: true,
      },
    ],
    programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
  });

  const signature = await sendTransaction(svmContext, [instruction], true);
  console.log(`Tx signature: ${signature}`);
}

main().catch((error) => {
  console.error(error);
});
