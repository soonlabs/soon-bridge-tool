/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StdError0825,
  StdError0825Interface,
} from "../../StdError.sol/StdError0825";

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
  "0x610283610034600b8282823980515f1a607314602857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100aa575f3560e01c8063986c5f681161007d578063b67689da11610063578063b67689da146100f4578063d160e4de146100fc578063fa784a4414610104575f80fd5b8063986c5f68146100e4578063b22dc54d146100ec575f80fd5b806305ee8612146100ae57806310332977146100cc5780631de45560146100d45780638995290f146100dc575b5f80fd5b6100b661010c565b6040516100c39190610223565b60405180910390f35b6100b6610193565b6100b66101a5565b6100b66101b7565b6100b66101c9565b6100b66101db565b6100b66101ed565b6100b66101ff565b6100b6610211565b604051603260248201526044015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4e487b710000000000000000000000000000000000000000000000000000000017905281565b6040516001602482015260440161011a565b6040516021602482015260440161011a565b6040516011602482015260440161011a565b6040516041602482015260440161011a565b6040516031602482015260440161011a565b6040516051602482015260440161011a565b6040516022602482015260440161011a565b6040516012602482015260440161011a565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea164736f6c6343000819000a";

type StdError0825ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdError0825ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError0825__factory extends ContractFactory {
  constructor(...args: StdError0825ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdError0825> {
    return super.deploy(overrides || {}) as Promise<StdError0825>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError0825 {
    return super.attach(address) as StdError0825;
  }
  override connect(signer: Signer): StdError0825__factory {
    return super.connect(signer) as StdError0825__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdError0825Interface {
    return new utils.Interface(_abi) as StdError0825Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError0825 {
    return new Contract(address, _abi, signerOrProvider) as StdError0825;
  }
}
