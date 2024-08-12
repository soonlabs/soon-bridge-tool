// src/index.ts
import { ethers } from 'ethers';
import {base58PublicKeyToHex} from "./helper/tool";
import {createSVMContext} from "./helper/svm_context";

async function main() {
  let svmContext = await createSVMContext();
  const signature = "MqJydEqMWeDChKGh6VSN8JoAZhNAApKjNzRCshk2B9czZGoVPoT5Y8MJivxWH4uZWEA4dN3GG167GYq3ycAzuZg";
  const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  console.log(`Tx Signature Height: ${status!.value?.slot}`);
}

main().catch((error) => {
  console.error(error);
});
