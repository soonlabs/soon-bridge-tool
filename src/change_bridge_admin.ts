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
  string: ['newAdmin'],
};

async function main() {
  const args = minimist(process.argv.slice(2), options);
  console.log('args:', args);
  let svmContext = await createSVMContext();

  const newAdminKey = new PublicKey(args.newAdmin);

  const [bridgeOwnerKey] = PublicKey.findProgramAddressSync(
    [Buffer.from('bridge-owner')],
    svmContext.SVM_BRIDGE_PROGRAM_ID,
  );
  console.log(`bridgeOwnerKey: ${bridgeOwnerKey.toString()}`);

  const instructionIndex = Buffer.from(
    Int8Array.from([BridgeInstructionIndex.ChangeBridgeAdmin]),
  );
  const instruction = new TransactionInstruction({
    data: Buffer.concat([instructionIndex, newAdminKey.toBuffer()]),
    keys: [
      { pubkey: bridgeOwnerKey, isSigner: false, isWritable: true },
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
