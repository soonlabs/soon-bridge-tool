import {
  BridgeInstructionIndex,
  createSVMContext,
  sendTransaction,
} from './helper/svm_context';
import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { ethers } from 'ethers';
import minimist from 'minimist';
import { isValidEthereumAddress, SYSTEM_PROGRAM } from './helper/tool';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const options = {
  string: ['l1Token', 'name', 'symbol', 'decimals'],
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

  const instructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.CreateSPL]),
  );
  const instruction = new TransactionInstruction({
    data: Buffer.concat([
      instructionIndex,
      ethers.utils.arrayify(args.l1Token),
      Buffer.from(Int8Array.from([args.name.length])),
      Buffer.from(args.name, 'utf8'),
      Buffer.from(Int8Array.from([args.symbol.length])),
      Buffer.from(args.symbol, 'utf8'),
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
      {
        pubkey: svmContext.SVM_BRIDGE_ADMIN.publicKey,
        isSigner: true,
        isWritable: false,
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
