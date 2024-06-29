import {
    createSVMContext,
    genWithdrawCounterAccountKey,
    sendTransaction,
    SYSTEM_PROGRAM,
} from "./helper/svm_context";
import {PublicKey, SYSVAR_RENT_PUBKEY, TransactionInstruction} from "@solana/web3.js";
import {ethers} from "ethers";
import {Numberu128, Numberu64} from "./helper/number.utils";
import minimist from 'minimist';
import {isValidEthereumAddress} from "./helper/tool";

interface Args {
    l1Target: string;
    value: string;
    gasLimit: string;
}

async function main() {
    const args = minimist<Args>(process.argv.slice(2));
    if (!isValidEthereumAddress(args.l1Target)) {
        throw new Error("invalid ethereum address format.");
    }

    let svmContext = await createSVMContext();
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

    const instructionIndex = Buffer.alloc(4);
    instructionIndex.writeUInt32LE(1);
    const instruction = new TransactionInstruction({
        data: Buffer.concat([
            instructionIndex,
            svmContext.SVM_USER.publicKey.toBuffer(),
            Buffer.concat([ethers.utils.arrayify(args.l1Target)]),
            new Numberu128(args.value).toBuffer(),
            new Numberu128(args.gasLimit).toBuffer(),
        ]),
        keys: [
            { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
            { pubkey: SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
            { pubkey: counterKey, isSigner: false, isWritable: true },
            { pubkey: withdrawTxKey, isSigner: false, isWritable: true },
            { pubkey: svmContext.SVM_USER.publicKey, isSigner: true, isWritable: false },
        ],
        programId: svmContext.SVM_WITHDRAW_PROGRAM_ID,
    });

    await sendTransaction(svmContext, [instruction])
    console.log(`Withdraw ID: ${withdrawTxKey.toString()}`);
}

main().catch((error) => {
    console.error(error);
});
