/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransientContextTest,
  TransientContextTestInterface,
} from "../../TransientContext.t.sol/TransientContextTest";

const _abi = [
  {
    type: "function",
    name: "IS_TEST",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeArtifacts",
    inputs: [],
    outputs: [
      {
        name: "excludedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeContracts",
    inputs: [],
    outputs: [
      {
        name: "excludedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "excludeSenders",
    inputs: [],
    outputs: [
      {
        name: "excludedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "failed",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifactSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetArtifacts",
    inputs: [],
    outputs: [
      {
        name: "targetedArtifacts_",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetContracts",
    inputs: [],
    outputs: [
      {
        name: "targetedContracts_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetInterfaces",
    inputs: [],
    outputs: [
      {
        name: "targetedInterfaces_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzInterface[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "artifacts",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSelectors",
    inputs: [],
    outputs: [
      {
        name: "targetedSelectors_",
        type: "tuple[]",
        internalType: "struct StdInvariant.FuzzSelector[]",
        components: [
          {
            name: "addr",
            type: "address",
            internalType: "address",
          },
          {
            name: "selectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "targetSenders",
    inputs: [],
    outputs: [
      {
        name: "targetedSenders_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "testFuzz_callDepth_succeeds",
    inputs: [
      {
        name: "_callDepth",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_decrement_succeeds",
    inputs: [
      {
        name: "_startingCallDepth",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_get_succeeds",
    inputs: [
      {
        name: "_slot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_increment_succeeds",
    inputs: [
      {
        name: "_startingCallDepth",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_setGet_succeeds",
    inputs: [
      {
        name: "_slot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_setGet_twice_differentDepth_succeeds",
    inputs: [
      {
        name: "_slot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_value1",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_value2",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_setGet_twice_sameDepth_succeeds",
    inputs: [
      {
        name: "_slot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_value1",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_value2",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testFuzz_set_succeeds",
    inputs: [
      {
        name: "_slot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "log",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_address",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_array",
    inputs: [
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_bytes32",
    inputs: [
      {
        name: "",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_int",
    inputs: [
      {
        name: "",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_address",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256[]",
        indexed: false,
        internalType: "int256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_array",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_bytes32",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_decimal_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "decimals",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_int",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_string",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_named_uint",
    inputs: [
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "val",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_string",
    inputs: [
      {
        name: "",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "log_uint",
    inputs: [
      {
        name: "",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "logs",
    inputs: [
      {
        name: "",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052600c8054600160ff199182168117909255601e8054909116821790556048907f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5d605a565b601f553480156055575f80fd5b50607e565b81810381811115607857634e487b7160e01b5f52601160045260245ffd5b92915050565b6115568061008b5f395ff3fe608060405234801561000f575f80fd5b5060043610610149575f3560e01c806366d9a9a0116100c7578063ba414fa61161007d578063e20c9f7111610063578063e20c9f7114610269578063edfa0f0f14610271578063fa7626d414610284575f80fd5b8063ba414fa61461023e578063d336010914610256575f80fd5b806388c366a0116100ad57806388c366a01461021b578063916a17c61461022e578063b5508aa914610236575f80fd5b806366d9a9a0146101f157806385226c8114610206575f80fd5b80632712f66c1161011c5780633e5e3c23116101025780633e5e3c23146101ce5780633f7286f4146101d65780634320f5d1146101de575f80fd5b80632712f66c146101a65780632ade3880146101b9575f80fd5b806306ed74591461014d5780631ea4e17e146101625780631ed7831c1461017557806324ddf8b014610193575b5f80fd5b61016061015b3660046110f8565b610291565b005b6101606101703660046110f8565b610376565b61017d6104c5565b60405161018a9190611121565b60405180910390f35b6101606101a136600461117a565b610532565b6101606101b436600461117a565b610599565b6101c161065d565b60405161018a919061119a565b61017d6107a6565b61017d610811565b6101606101ec3660046112d8565b61087c565b6101f9610964565b60405161018a91906112ef565b61020e610a67565b60405161018a91906113d5565b61016061022936600461117a565b610b32565b6101f9610b79565b61020e610c7c565b610246610d47565b604051901515815260200161018a565b6101606102643660046112d8565b610e17565b61017d610e46565b61016061027f3660046112d8565b610eb1565b601e546102469060ff1681565b6102bd7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5b5f610fb1565b6102c78383610532565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f908152602084905260409020610302905c5b83610fb1565b61032c7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c6102b7565b6103368382610532565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f908152602084905260409020610371905c5b82610fb1565b505050565b6103a07f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c6102b7565b6103aa8383610532565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f9081526020849052604090206103e3905c6102fc565b6103eb611034565b6104177f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c6001610fb1565b6104218382610532565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f90815260208490526040902061045a905c61036b565b61046261107d565b61048c7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c6102b7565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f908152602084905260409020610371905c6102fc565b6060601680548060200260200160405190810160405280929190818152602001828054801561052857602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116104fd575b5050505050905090565b61053c82826110c6565b604080517f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c60208083019190915281830185905282518083038401815260609092019092528051910120805c6105938184610fb1565b50505050565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f9081526020839052604090206105d2905c6102b7565b5f7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c604080516020810192909252810184905260600160405160208183030381529060405280519060200120905081815d7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f908152602084905260409020610371905c6102fc565b6060601d805480602002602001604051908101604052809291908181526020015f905b8282101561079d575f848152602080822060408051808201825260028702909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939591948681019491929084015b82821015610786578382905f5260205f200180546106fb90611488565b80601f016020809104026020016040519081016040528092919081815260200182805461072790611488565b80156107725780601f1061074957610100808354040283529160200191610772565b820191905f5260205f20905b81548152906001019060200180831161075557829003601f168201915b5050505050815260200190600101906106de565b505050508152505081526020019060010190610680565b50505050905090565b6060601880548060200260200160405190810160405280929190818152602001828054801561052857602002820191905f5260205f2090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116104fd575050505050905090565b6060601780548060200260200160405190810160405280929190818152602001828054801561052857602002820191905f5260205f2090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116104fd575050505050905090565b6040517f4c63e5620000000000000000000000000000000000000000000000000000000081528115156004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d90634c63e562906024015f6040518083038186803b1580156108df575f80fd5b505afa1580156108f1573d5f803e3d5ffd5b5050505080601f545d6109247f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c61036b565b61092c61107d565b6109617f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c61095c600184611506565b610fb1565b50565b6060601b805480602002602001604051908101604052809291908181526020015f905b8282101561079d575f84815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939491938583019392830182828015610a4f57602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116109fc5790505b50505050508152505081526020019060010190610987565b6060601a805480602002602001604051908101604052809291908181526020015f905b8282101561079d578382905f5260205f20018054610aa790611488565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad390611488565b8015610b1e5780601f10610af557610100808354040283529160200191610b1e565b820191905f5260205f20905b815481529060010190602001808311610b0157829003601f168201915b505050505081526020019060010190610a8a565b610b3c8282610532565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f908152602083905260409020610b75905c61036b565b5050565b6060601c805480602002602001604051908101604052809291908181526020015f905b8282101561079d575f84815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939491938583019392830182828015610c6457602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411610c115790505b50505050508152505081526020019060010190610b9c565b60606019805480602002602001604051908101604052809291908181526020015f905b8282101561079d578382905f5260205f20018054610cbc90611488565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce890611488565b8015610d335780601f10610d0a57610100808354040283529160200191610d33565b820191905f5260205f20905b815481529060010190602001808311610d1657829003601f168201915b505050505081526020019060010190610c9f565b6008545f9060ff1615610d5e575060085460ff1690565b6040517f667f9d70000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190527f6661696c6564000000000000000000000000000000000000000000000000000060248301525f9163667f9d7090604401602060405180830381865afa158015610dec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e10919061151f565b1415905090565b80601f545d6109617f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c61036b565b6060601580548060200260200160405190810160405280929190818152602001828054801561052857602002820191905f5260205f2090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116104fd575050505050905090565b6040517f4c63e5620000000000000000000000000000000000000000000000000000000081527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82106004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d90634c63e562906024015f6040518083038186803b158015610f34575f80fd5b505afa158015610f46573d5f803e3d5ffd5b5050505080601f545d610f797f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c61036b565b610f81611034565b6109617f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c61095c836001611536565b6040517f98296c540000000000000000000000000000000000000000000000000000000081526004810183905260248101829052737109709ecfa91a80626ff3989d68f67f5b1dd12d906398296c54906044015f6040518083038186803b15801561101a575f80fd5b505afa15801561102c573d5f803e3d5ffd5b505050505050565b60017f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c017f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5d565b60017f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c037f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5d565b7f7a74fd168763fd280eaec3bcd2fd62d0e795027adc8183a693c497a7c2b10b5c5c5f52816020528060405f205d5050565b5f805f6060848603121561110a575f80fd5b505081359360208301359350604090920135919050565b602080825282518282018190525f9190848201906040850190845b8181101561116e57835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161113c565b50909695505050505050565b5f806040838503121561118b575f80fd5b50508035926020909101359150565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b838110156112ca577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790528051878501819052908801906060600582901b8601810191908601905f5b818110156112b4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa088850301835284518051808652808e83018f88015e5f8682018f0152958d0195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169094018c019350918b0191600101611233565b50505095880195935050908601906001016111c1565b509098975050505050505050565b5f602082840312156112e8575f80fd5b5035919050565b5f60208083018184528085518083526040925060408601915060408160051b8701018488015f5b838110156112ca578883037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790528051878501819052908801905f9060608601905b808310156113c05783517fffffffff00000000000000000000000000000000000000000000000000000000168252928a019260019290920191908a019061137e565b50968901969450505090860190600101611316565b5f602080830181845280855180835260408601915060408160051b87010192508387015f5b8281101561147b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845281518051808752808883018989015e5f878201890152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169095018601945092850192908501906001016113fa565b5092979650505050505050565b600181811c9082168061149c57607f821691505b6020821081036114d3577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115611519576115196114d9565b92915050565b5f6020828403121561152f575f80fd5b5051919050565b80820180821115611519576115196114d956fea164736f6c6343000819000a";

type TransientContextTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransientContextTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransientContextTest__factory extends ContractFactory {
  constructor(...args: TransientContextTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TransientContextTest> {
    return super.deploy(overrides || {}) as Promise<TransientContextTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TransientContextTest {
    return super.attach(address) as TransientContextTest;
  }
  override connect(signer: Signer): TransientContextTest__factory {
    return super.connect(signer) as TransientContextTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransientContextTestInterface {
    return new utils.Interface(_abi) as TransientContextTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransientContextTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransientContextTest;
  }
}
