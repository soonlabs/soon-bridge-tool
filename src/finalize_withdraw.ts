import {createEVMContext} from "./helper/evm_context";
import minimist from "minimist";
import {isValidSolanaPublicKey, parseWithdrawTxInfo} from "./helper/tool";
import {createSVMContext} from "./helper/svm_context";
import {PublicKey} from "@solana/web3.js";
import {OptimismPortal__factory} from "../typechain-types";

const options = {
    string: ['withdrawId']
};

async function main() {
    const args = minimist(process.argv.slice(2), options);
    console.log("args:", args);

    if (isValidSolanaPublicKey(args.withdrawId)) {
        throw new Error("invalid solana pubkey format.");
    }

    let svmContext = await createSVMContext();
    const withdrawInfo = await svmContext.SVM_Connection.getAccountInfo(new PublicKey(args.withdrawId));
    if (!withdrawInfo || withdrawInfo.data.length < 148) {
        throw new Error("invalid withdraw Id.");
    }
    //get withdraw tx
    const withdrawTx = parseWithdrawTxInfo(withdrawInfo.data);

    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const receipt = await (await OptimismPortal.connect(EVMContext.EVM_USER).finalizePDAWithdrawalTransaction(withdrawTx)).wait(1)
    console.log(`Finalize withdraw success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
