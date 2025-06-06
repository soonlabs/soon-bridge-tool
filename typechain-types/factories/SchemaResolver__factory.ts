/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SchemaResolver,
  SchemaResolverInterface,
} from "../SchemaResolver";

const _abi = [
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "attest",
    inputs: [
      {
        name: "attestation",
        type: "tuple",
        internalType: "struct Attestation",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "isPayable",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "multiAttest",
    inputs: [
      {
        name: "attestations",
        type: "tuple[]",
        internalType: "struct Attestation[]",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "multiRevoke",
    inputs: [
      {
        name: "attestations",
        type: "tuple[]",
        internalType: "struct Attestation[]",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "values",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "revoke",
    inputs: [
      {
        name: "attestation",
        type: "tuple",
        internalType: "struct Attestation",
        components: [
          {
            name: "uid",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "schema",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "time",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "expirationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "revocationTime",
            type: "uint64",
            internalType: "uint64",
          },
          {
            name: "refUID",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "attester",
            type: "address",
            internalType: "address",
          },
          {
            name: "revocable",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "error",
    name: "AccessDenied",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientValue",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidEAS",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidLength",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPayable",
    inputs: [],
  },
] as const;

export class SchemaResolver__factory {
  static readonly abi = _abi;
  static createInterface(): SchemaResolverInterface {
    return new utils.Interface(_abi) as SchemaResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SchemaResolver {
    return new Contract(address, _abi, signerOrProvider) as SchemaResolver;
  }
}
