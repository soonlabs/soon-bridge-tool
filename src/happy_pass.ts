import {BigNumber, ethers} from 'ethers';
import {createEVMContext} from "./helper/evm_context";
import {L2OutputOracle__factory, OptimismPortal__factory} from "../typechain-types";
import {formatEther} from "ethers/lib/utils";
import {sleep} from "./helper/tool";

async function main() {
    //0. run fork sepolia and deploy l1 contract
    //https://www.notion.so/mantanetwork/Withdrawal-575354b56a774e508ce1cd2783c49bce

    const gasLimit = "1000000";
    let EVMContext = await createEVMContext(true);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const l2OutputOracleAddress = await OptimismPortal.l2Oracle();
    const L2OutputOracle = L2OutputOracle__factory.connect(l2OutputOracleAddress, EVMContext.EVM_PROPOSER)

    //1. transfer eth to OptimismPortal
    console.log('step1: sending fund to OptimismPortal...')
    const senderKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
    const senderWallet = new ethers.Wallet(senderKey, EVMContext.EVM_PROVIDER)
    await (await OptimismPortal.connect(senderWallet).donateETH({
        value: ethers.utils.parseEther('1'),
        gasLimit
    })).wait(1)
    let OpPortalBalance = formatEther(await EVMContext.EVM_PROVIDER.getBalance(EVMContext.EVM_OP_PORTAL));
    console.log('step1 done, OptimismPortal balance is:', OpPortalBalance)

    //2. proposer submit output proof
    console.log('step2: proposer submitting output proof...')
    const outputRoot = '0x02d2104a301d55c982cc2c525b8d308e4b4028ad56cc8577c8f57de44cea7935'
    const l2Height = BigNumber.from(120)
    const l1BlockHash = '0x0000000000000000000000000000000000000000000000000000000000000000'
    const l1BlockNumber = BigNumber.from(5612519)
    await (await L2OutputOracle.proposeL2Output(outputRoot, l2Height, l1BlockHash, l1BlockNumber, {
        gasLimit
    })).wait(1)
    console.log('step2 done')

    //3. user prove withdraw
    console.log('step3: user prove withdraw...')
    const l2OutputIndex = await L2OutputOracle.getL2OutputIndexAfter(l2Height)
    const withdrawTx = {
        nonce: BigNumber.from(1),
        sender: '0x0d94983e552ae3a6d67791ba6107450ae1c71c73d1112227dcb6f48e27c80c56',
        target: '0xC65E3B6dFE6c9D6fd6B12c802671eda3cD0A398f',
        value: BigNumber.from(1000),
        gasLimit: BigNumber.from(1000),
        data: '0xd764ad0b00010000000000000000000000000000000000000000000000000000000000010d94983e552ae3a6d67791ba6107450ae1c71c73d1112227dcb6f48e27c80c56000000000000000000000000c65e3b6dfe6c9d6fd6b12c802671eda3cd0a398f00000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000a41635f5fd000000000000000000000000c65e3b6dfe6c9d6fd6b12c802671eda3cd0a398f000000000000000000000000c65e3b6dfe6c9d6fd6b12c802671eda3cd0a398f00000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    }

    const outputRootProof = {
        version: '0x0000000000000000000000000000000000000000000000000000000000000000',
        stateRoot: '0xbe9b57534662c3bb636ece4d11a128753398201a54349c4c96d10dffd3daa3bd',
        messagePasserStorageRoot: '0x539ff03d14670e0e17793068d3750978a935142fc236ce49a6a7cd32da74ccb2',
        latestBlockhash: '0x7cce3b742d075030c59be95d6b525d4a914de9f735a503d67ffbbb210acfeb2e',
    };
    const withdrawalProof = [
        '0xf843a1209eba1222e4646bf92cee3582270b4b38128365258a22528fa43b670d230d6dfca0146b3930f9bac5eeb262de65c2f68ff2023f0a1e99fb92adf5f73c9fa79d46b4',
    ]
    const pdaPubkey = "0xF4CDF255635FC9ECC6EE79CF4DEA310B6488969D563BE0207C879D25AC979E31"
    await (await OptimismPortal.connect(EVMContext.EVM_USER).provePDAWithdrawalTransaction(withdrawTx, l2OutputIndex, pdaPubkey, outputRootProof, withdrawalProof, {
        gasLimit
    })).wait(1)
    console.log('step3 done')

    //4. waiting withdrawal finalized
    console.log('waiting withdrawal finalized')
    await sleep(20000)
    console.log('withdrawal finalized')

    //4. user finalize withdraw
    console.log('step4: user finalized withdraw...')
    //should wait a moment after deploy l1 contract if tx failed with "OptimismPortal: output proposal finalization period has not elapsed"
    await (await OptimismPortal.connect(EVMContext.EVM_USER).finalizePDAWithdrawalTransaction(withdrawTx, {
        gasLimit
    })).wait(1)
    console.log('step4 done')

    OpPortalBalance = formatEther(await EVMContext.EVM_PROVIDER.getBalance(EVMContext.EVM_OP_PORTAL));
    console.log('OptimismPortal balance is:', OpPortalBalance)
}

main().catch((err) => {
    console.error(err);
});
