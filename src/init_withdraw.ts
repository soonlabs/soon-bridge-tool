import {createSVMContext, genWithdrawCounterAccountKey, sendTransaction, SYSTEM_PROGRAM} from "./helper/svm_context";
import {Numberu64} from "./helper/tool";
import {PublicKey, TransactionInstruction} from "@solana/web3.js";
import {ethers} from "ethers";
import {Numberu128} from "./helper/number.utils";

async function main() {
    let svmContext = await createSVMContext();

    const l1Target = "0xC65E3B6dFE6c9D6fd6B12c802671eda3cD0A398f";
    const value = 1000;
    const gasLimit = 100000;
    //onchain program not support data yet
    const data = "0x";

    //get counter key
    const counterKey = genWithdrawCounterAccountKey(svmContext.SVM_WITHDRAW_PROGRAM_ID);
    console.log(`Counter key: ${counterKey.toString()}`);

    //get counter
    const accountInfo = await svmContext.SVM_Connection.getAccountInfo(counterKey);
    const withdrawTxSeed = accountInfo!.data.slice(0, 8);
    const counter = Numberu64.fromBuffer(withdrawTxSeed);
    console.log(`counter: ${counter}`);

    //get withdraw tx key
    const [withdrawTxKey, ] = PublicKey.findProgramAddressSync([withdrawTxSeed], svmContext.SVM_WITHDRAW_PROGRAM_ID)
    console.log(`WithdrawTx key: ${withdrawTxKey.toString()}`);

    const instructionIndex = Buffer.alloc(4);
    instructionIndex.writeUInt32LE(1);
    const instruction = new TransactionInstruction({
        data: Buffer.concat([
            instructionIndex,
            svmContext.SVM_USER.publicKey.toBuffer(),
            Buffer.concat([ethers.utils.arrayify(l1Target)]),
            new Numberu128(value.toString()).toBuffer(),
            new Numberu128(gasLimit.toString()).toBuffer(),
        ]),
        keys: [
            { pubkey: counterKey, isSigner: false, isWritable: true },
            { pubkey: withdrawTxKey, isSigner: false, isWritable: true },
            { pubkey: svmContext.SVM_USER.publicKey, isSigner: true, isWritable: false },
            { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
        ],
        programId: svmContext.SVM_WITHDRAW_PROGRAM_ID,
    });

    await sendTransaction(svmContext, [instruction])


}

main().catch((error) => {
    console.error(error);
});
