/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CallRecorder0815,
  CallRecorder0815Interface,
} from "../../Callers.sol/CallRecorder0815";

const _abi = [
  {
    type: "function",
    name: "lastCall",
    inputs: [],
    outputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "gas",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "record",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103fe806100206000396000f3fe6080604052600436106100295760003560e01c8063266cf1091461002e578063da516aa914610038575b600080fd5b610036610066565b005b34801561004457600080fd5b5061004d6100aa565b60405161005d9493929190610164565b60405180910390f35b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317815560019061009f903690836102d6565b505a60025534600355565b600080546001805473ffffffffffffffffffffffffffffffffffffffff90921692916100d590610234565b80601f016020809104026020016040519081016040528092919081815260200182805461010190610234565b801561014e5780601f106101235761010080835404028352916020019161014e565b820191906000526020600020905b81548152906001019060200180831161013157829003601f168201915b5050505050908060020154908060030154905084565b73ffffffffffffffffffffffffffffffffffffffff8516815260006020608081840152855180608085015260005b818110156101ae5787810183015185820160a001528201610192565b818111156101c057600060a083870101525b5060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505083604083015282606083015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061024857607f821691505b602082108103610281577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f8211156102d157600081815260208120601f850160051c810160208610156102ae5750805b601f850160051c820191505b818110156102cd578281556001016102ba565b5050505b505050565b67ffffffffffffffff8311156102ee576102ee610205565b610302836102fc8354610234565b83610287565b6000601f841160018114610354576000851561031e5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556103ea565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156103a35786850135825560209485019460019092019101610383565b50868210156103de577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea164736f6c634300080f000a";

type CallRecorder0815ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallRecorder0815ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallRecorder0815__factory extends ContractFactory {
  constructor(...args: CallRecorder0815ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CallRecorder0815> {
    return super.deploy(overrides || {}) as Promise<CallRecorder0815>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CallRecorder0815 {
    return super.attach(address) as CallRecorder0815;
  }
  override connect(signer: Signer): CallRecorder0815__factory {
    return super.connect(signer) as CallRecorder0815__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallRecorder0815Interface {
    return new utils.Interface(_abi) as CallRecorder0815Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallRecorder0815 {
    return new Contract(address, _abi, signerOrProvider) as CallRecorder0815;
  }
}
