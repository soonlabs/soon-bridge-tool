import {createEVMContext} from "./helper/evm_context";
import {L2OutputOracle__factory, OptimismPortal__factory} from "../typechain-types";
import axios from "axios";
import {createSVMContext} from "./helper/svm_context";
import minimist from "minimist";

const options = {
    string: ['withdrawHeight']
};

async function main() {
    const args = minimist(process.argv.slice(2), options);
    console.log("args:", args);

    let svmContext = await createSVMContext();

    //get output root proof
    const response = await axios.post(svmContext.SVM_SOON_RPC_URL, {
        jsonrpc: '2.0',
        id: 1,
        method: "outputAtBlock",
        params: [Number(args.withdrawHeight)]
    });
    console.log("response data:", response.data);

    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const l2OutputOracleAddress = await OptimismPortal.l2Oracle();
    const L2OutputOracle = L2OutputOracle__factory.connect(l2OutputOracleAddress, EVMContext.EVM_PROPOSER)
    const receipt =await (await L2OutputOracle.proposeL2Output(response.data.outputRoot, args.withdrawHeight, "0x0000000000000000000000000000000000000000000000000000000000000000", 0)).wait(1)

    console.log(`Propose withdraw success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
