// src/index.ts
import { ethers } from 'ethers';
import {createEVMContext} from "./helper/evm_context";

async function main() {
    let EVMContext = await createEVMContext(false);


}

main().catch((error) => {
    console.error(error);
});
