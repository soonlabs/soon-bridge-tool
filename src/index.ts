// src/index.ts
import { ethers } from 'ethers';
import { base58PublicKeyToHex } from './helper/tool';
import { createSVMContext, transferSOL } from './helper/svm_context';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

async function main() {
  let svmContext = await createSVMContext();
  // const signature = "39zvQqiSRfVBsS21sQ8Hkcwwr8BaQNrMFLdFD2BWvpBQqBBsGArTZVEjuzWdCnSrasbEqWQdHtBwhpRs7kFXCYW2";
  // const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  // console.log(`Tx Signature Height: ${status!.value?.slot}`);
  const hexKey = base58PublicKeyToHex(
    'Bridge1111111111111111111111111111111111111',
  );

  console.log(`hexKey: ${hexKey}`);
  await transferSOL(
    svmContext,
    new PublicKey('9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU'),
    LAMPORTS_PER_SOL * 1000000,
  );
}

main().catch((error) => {
  console.error(error);
});
