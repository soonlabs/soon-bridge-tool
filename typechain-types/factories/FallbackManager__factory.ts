/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FallbackManager,
  FallbackManagerInterface,
} from "../FallbackManager";

const _abi = [
  {
    type: "fallback",
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setFallbackHandler",
    inputs: [
      {
        name: "handler",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ChangedFallbackHandler",
    inputs: [
      {
        name: "handler",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ce806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f08a032314610084575b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d580548061005557005b36600080373360601b365260008060143601600080855af190503d6000803e8061007e573d6000fd5b503d6000f35b610097610092366004610184565b610099565b005b6100a1610115565b6100c9817f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b09060200160405180910390a150565b333014610182576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753303331000000000000000000000000000000000000000000000000000000604482015260640160405180910390fd5b565b60006020828403121561019657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101ba57600080fd5b939250505056fea164736f6c634300080f000a";

type FallbackManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FallbackManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FallbackManager__factory extends ContractFactory {
  constructor(...args: FallbackManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<FallbackManager> {
    return super.deploy(overrides || {}) as Promise<FallbackManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FallbackManager {
    return super.attach(address) as FallbackManager;
  }
  override connect(signer: Signer): FallbackManager__factory {
    return super.connect(signer) as FallbackManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FallbackManagerInterface {
    return new utils.Interface(_abi) as FallbackManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FallbackManager {
    return new Contract(address, _abi, signerOrProvider) as FallbackManager;
  }
}
