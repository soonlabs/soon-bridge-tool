import {createEVMContext} from "./helper/evm_context";
import minimist from "minimist";
import {isValidSolanaPublicKey} from "./helper/tool";
import {OptimismPortal__factory} from "../typechain-types";

const options = {
    string: ['l2Target', 'value', 'gasLimit']
};

async function main() {
    const args = minimist(process.argv.slice(2), options);
    console.log("args:", args);
    if (!isValidSolanaPublicKey(args.l2Target)) {
        throw new Error("invalid solana pubkey format.");
    }

    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const receipt = await (await OptimismPortal.connect(EVMContext.EVM_USER).depositTransaction(args.l2Target, args.value, args.gasLimit, false, "0x")).wait(1)

    console.log(`Deposit ETH success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
