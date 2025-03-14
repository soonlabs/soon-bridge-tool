/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StdError0815,
  StdError0815Interface,
} from "../../StdError.sol/StdError0815";

const _abi = [
  {
    type: "function",
    name: "arithmeticError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "assertionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "divisionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "encodeStorageError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enumConversionError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "indexOOBError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "memOverflowError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "popError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "zeroVarError",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x6102a761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c8063986c5f6811610080578063b67689da11610065578063b67689da146100f8578063d160e4de14610100578063fa784a441461010857600080fd5b8063986c5f68146100e8578063b22dc54d146100f057600080fd5b806305ee8612146100b257806310332977146100d05780631de45560146100d85780638995290f146100e0575b600080fd5b6100ba610110565b6040516100c79190610227565b60405180910390f35b6100ba610197565b6100ba6101a9565b6100ba6101bb565b6100ba6101cd565b6100ba6101df565b6100ba6101f1565b6100ba610203565b6100ba610215565b604051603260248201526044015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4e487b710000000000000000000000000000000000000000000000000000000017905281565b6040516001602482015260440161011e565b6040516021602482015260440161011e565b6040516011602482015260440161011e565b6040516041602482015260440161011e565b6040516031602482015260440161011e565b6040516051602482015260440161011e565b6040516022602482015260440161011e565b6040516012602482015260440161011e565b600060208083528351808285015260005b8181101561025457858101830151858201604001528201610238565b81811115610266576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea164736f6c634300080f000a";

type StdError0815ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdError0815ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError0815__factory extends ContractFactory {
  constructor(...args: StdError0815ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdError0815> {
    return super.deploy(overrides || {}) as Promise<StdError0815>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError0815 {
    return super.attach(address) as StdError0815;
  }
  override connect(signer: Signer): StdError0815__factory {
    return super.connect(signer) as StdError0815__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdError0815Interface {
    return new utils.Interface(_abi) as StdError0815Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError0815 {
    return new Contract(address, _abi, signerOrProvider) as StdError0815;
  }
}
