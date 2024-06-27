import {createSVMContext} from "./helper/svm_context";

async function main() {
    let SVMContext = await createSVMContext();


}

main().catch((error) => {
    console.error(error);
});
