import minimist from "minimist";
import {base58PublicKeyToHex, isValidSolanaPublicKey, parseWithdrawTxInfo} from "./helper/tool";
import {createSVMContext} from "./helper/svm_context";
import {PublicKey} from "@solana/web3.js";
import {createEVMContext} from "./helper/evm_context";
import {OptimismPortal__factory} from "../typechain-types";
import axios from "axios";

const options = {
    string: ['withdrawId', 'withdrawHeight']
};

async function main() {
    const args = minimist(process.argv.slice(2), options);
    console.log("args:", args);
    if (!isValidSolanaPublicKey(args.withdrawId)) {
        throw new Error("invalid solana pubkey format.");
    }

    let svmContext = await createSVMContext();
    const withdrawInfo = await svmContext.SVM_Connection.getAccountInfo(new PublicKey(args.withdrawId));
    if (!withdrawInfo || withdrawInfo.data.length < 148) {
        throw new Error("invalid withdraw Id.");
    }
    //get withdraw tx
    console.log("withdrawInfo.data:", withdrawInfo.data.toString("hex"));
    const withdrawTx = parseWithdrawTxInfo(withdrawInfo.data);
    console.log("withdrawTx:", withdrawTx);

    //get output root proof
    const response0 = await axios.post(svmContext.SVM_SOON_RPC_URL, {
        jsonrpc: '2.0',
        id: 1,
        method: "outputAtBlock",
        params: [Number(args.withdrawHeight)]
    });
    console.log("response.data:", response0.data);

    //get withdraw proof
    const response1 = await axios.post(svmContext.SVM_SOON_RPC_URL, {
        jsonrpc: '2.0',
        id: 1,
        method: "getSoonWithdrawalProof",
        params: [args.withdrawId, Number(args.withdrawHeight)]
    });
    console.log("response.data:", response1.data);

    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const receipt = await (await OptimismPortal.connect(EVMContext.EVM_USER).provePDAWithdrawalTransaction(withdrawTx, args.withdrawHeight, base58PublicKeyToHex(args.withdrawId), {
        version: response0.data.result.version,
        stateRoot: response0.data.result.stateRoot,
        messagePasserStorageRoot: response0.data.result.withdrawalRoot,
        latestBlockhash: response0.data.result.blockHash
    }, response1.data.result.withdrawalProof)).wait(1)

    console.log(`Withdraw tx prove success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
