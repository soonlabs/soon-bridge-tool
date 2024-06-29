import {createEVMContext} from "./helper/evm_context";
import {L2OutputOracle__factory, OptimismPortal__factory} from "../typechain-types";

async function main() {
    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const l2OutputOracleAddress = await OptimismPortal.l2Oracle();
    const L2OutputOracle = L2OutputOracle__factory.connect(l2OutputOracleAddress, EVMContext.EVM_PROPOSER)

}

main().catch((error) => {
    console.error(error);
});
