import {
  BridgeInstructionIndex,
  createSVMContext,
  sendTransaction,
  SYSTEM_PROGRAM,
} from './helper/svm_context';
import {
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { ethers } from 'ethers';
import minimist from 'minimist';
import { isValidEthereumAddress } from './helper/tool';
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
      { pubkey: splTokenOwnerKey, isSigner: false, isWritable: true },
      { pubkey: splTokenMintKey, isSigner: false, isWritable: true },
      {
        pubkey: svmContext.SVM_USER.publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    programId: svmContext.SVM_BRIDGE_PROGRAM_ID,
  });

  const signature = await sendTransaction(svmContext, [instruction]);
  console.log(`Tx signature: ${signature}`);
}

main().catch((error) => {
  console.error(error);
});
