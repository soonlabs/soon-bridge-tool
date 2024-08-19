// src/index.ts
import { ethers } from 'ethers';
import { base58PublicKeyToHex } from './helper/tool';
import { createSVMContext } from './helper/svm_context';

async function main() {
  let svmContext = await createSVMContext();
  // const signature = "39zvQqiSRfVBsS21sQ8Hkcwwr8BaQNrMFLdFD2BWvpBQqBBsGArTZVEjuzWdCnSrasbEqWQdHtBwhpRs7kFXCYW2";
  // const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  // console.log(`Tx Signature Height: ${status!.value?.slot}`);
  const hexKey = base58PublicKeyToHex(
    'Bridge1111111111111111111111111111111111111',
  );
  console.log(`hexKey: ${hexKey}`);
}

main().catch((error) => {
  console.error(error);
});
