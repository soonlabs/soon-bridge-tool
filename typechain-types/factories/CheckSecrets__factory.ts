/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CheckSecrets, CheckSecretsInterface } from "../CheckSecrets";

const _abi = [
  {
    type: "function",
    name: "check",
    inputs: [
      {
        name: "_params",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "execute_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "reveal",
    inputs: [
      {
        name: "_secret",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revealedSecrets",
    inputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "SecretRevealed",
    inputs: [
      {
        name: "secretHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "secret",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "_EventToExposeStructInABI__Params",
    inputs: [
      {
        name: "params",
        type: "tuple",
        indexed: false,
        internalType: "struct CheckSecrets.Params",
        components: [
          {
            name: "delay",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "secretHashMustExist",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "secretHashMustNotExist",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60c0604052600c60809081526b436865636b5365637265747360a01b60a05260009061002b90826100dd565b5034801561003857600080fd5b5061019c565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061006857607f821691505b60208210810361008857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156100d857600081815260208120601f850160051c810160208610156100b55750805b601f850160051c820191505b818110156100d4578281556001016100c1565b5050505b505050565b81516001600160401b038111156100f6576100f661003e565b61010a816101048454610054565b8461008e565b602080601f83116001811461013f57600084156101275750858301515b600019600386901b1c1916600185901b1785556100d4565b600085815260208120601f198616915b8281101561016e5788860151825594840194600190910190840161014f565b508582101561018c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610570806101ab6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306fdde0314610051578063246167bc1461006f57806372f12a5d1461009d578063c64b3bb5146100b2575b600080fd5b6100596100d5565b604051610066919061034b565b60405180910390f35b61008f61007d36600461035e565b60016020526000908152604090205481565b604051908152602001610066565b6100b06100ab3660046103a6565b610163565b005b6100c56100c03660046103a6565b61025e565b6040519015158152602001610066565b600080546100e290610475565b80601f016020809104026020016040519081016040528092919081815260200182805461010e90610475565b801561015b5780601f106101305761010080835404028352916020019161015b565b820191906000526020600020905b81548152906001019060200180831161013e57829003601f168201915b505050505081565b8051602080830191909120600081815260019092526040909120541561020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f436865636b536563726574733a2073656372657420616c72656164792072657660448201527f65616c6564000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600081815260016020526040908190204290555181907fbab2b812958b05e36be1f0553f496fa5d27441155d6be0469e1c3fe1e51ad8589061025290859061034b565b60405180910390a25050565b6000808280602001905181019061027591906104c8565b905060006001600083602001518152602001908152602001600020541180156102be575080516020808301516000908152600190915260409020546102ba9190610524565b4210155b80156102d95750604080820151600090815260016020522054155b9392505050565b6000815180845260005b81811015610306576020818501810151868301820152016102ea565b81811115610318576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006102d960208301846102e0565b60006020828403121561037057600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156103b857600080fd5b813567ffffffffffffffff808211156103d057600080fd5b818401915084601f8301126103e457600080fd5b8135818111156103f6576103f6610377565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561043c5761043c610377565b8160405282815287602084870101111561045557600080fd5b826020860160208301376000928101602001929092525095945050505050565b600181811c9082168061048957607f821691505b6020821081036104c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000606082840312156104da57600080fd5b6040516060810181811067ffffffffffffffff821117156104fd576104fd610377565b80604052508251815260208301516020820152604083015160408201528091505092915050565b6000821982111561055e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea164736f6c634300080f000a";

type CheckSecretsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheckSecretsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CheckSecrets__factory extends ContractFactory {
  constructor(...args: CheckSecretsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CheckSecrets> {
    return super.deploy(overrides || {}) as Promise<CheckSecrets>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CheckSecrets {
    return super.attach(address) as CheckSecrets;
  }
  override connect(signer: Signer): CheckSecrets__factory {
    return super.connect(signer) as CheckSecrets__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheckSecretsInterface {
    return new utils.Interface(_abi) as CheckSecretsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheckSecrets {
    return new Contract(address, _abi, signerOrProvider) as CheckSecrets;
  }
}
