// src/index.ts
import { ethers } from 'ethers';
import {base58PublicKeyToHex} from "./helper/tool";

async function main() {
  console.log('nothing yet..');
  const hex = base58PublicKeyToHex("7jz49FaN6iDVYUrXs9EVP9kdQo8ZLTH411h8w8DVsdLs");
  console.log("hex:", hex);
}

main().catch((error) => {
  console.error(error);
});
