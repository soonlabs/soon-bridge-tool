import { createEVMContext } from './helper/evm_context';
import {L2OutputOracle__factory, OptimismPortal__factory} from '../typechain-types';


async function main() {
    let EVMContext = await createEVMContext(false);
    const OpPortal = OptimismPortal__factory.connect(
        EVMContext.EVM_OP_PORTAL,
        EVMContext.EVM_USER,
    );
    const l2OracleAddress = await OpPortal.l2Oracle();
    const L2Oracle = L2OutputOracle__factory.connect(
        l2OracleAddress,
        EVMContext.EVM_USER,
    );
    const receipt = await (
        await L2Oracle.deleteL2Outputs(
            "0",
            {
                gasLimit: 1000000,
            },
        )
    ).wait(1);

    console.log(`Reset output oracle success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
