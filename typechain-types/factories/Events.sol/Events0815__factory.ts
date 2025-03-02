/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Events0815,
  Events0815Interface,
} from "../../Events.sol/Events0815";

const _abi = [
  {
    type: "event",
    name: "DepositFailed",
    inputs: [
      {
        name: "l1Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "l2Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DepositFinalized",
    inputs: [
      {
        name: "l1Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "l2Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DisputeGameBlacklisted",
    inputs: [
      {
        name: "disputeGame",
        type: "address",
        indexed: true,
        internalType: "contract IDisputeGame",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC20BridgeFinalized",
    inputs: [
      {
        name: "localToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "remoteToken",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC20BridgeInitiated",
    inputs: [
      {
        name: "localToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "remoteToken",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC20DepositInitiated",
    inputs: [
      {
        name: "l1Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "l2Token",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ERC20WithdrawalFinalized",
    inputs: [
      {
        name: "l1Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "l2Token",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ETHBridgeFinalized",
    inputs: [
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ETHBridgeInitiated",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ETHDepositInitiated",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ETHWithdrawalFinalized",
    inputs: [
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FailedRelayedMessage",
    inputs: [
      {
        name: "msgHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MessagePassed",
    inputs: [
      {
        name: "nonce",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "gasLimit",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "withdrawalHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OutputProposed",
    inputs: [
      {
        name: "outputRoot",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "l2OutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "l2BlockNumber",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "l1Timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OutputsDeleted",
    inputs: [
      {
        name: "prevNextOutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "newNextOutputIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "identifier",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RelayedMessage",
    inputs: [
      {
        name: "msgHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RespectedGameTypeSet",
    inputs: [
      {
        name: "newGameType",
        type: "uint32",
        indexed: true,
        internalType: "GameType",
      },
      {
        name: "updatedAt",
        type: "uint64",
        indexed: true,
        internalType: "Timestamp",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SentMessage",
    inputs: [
      {
        name: "target",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "message",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "messageNonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "gasLimit",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SentMessageExtension1",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransactionDeposited",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "version",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "opaqueData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransactionDeposited",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "mint",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "gasLimit",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
      {
        name: "isCreation",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "WhatHappened",
    inputs: [
      {
        name: "success",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "returndata",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawal",
    inputs: [
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawalFinalized",
    inputs: [
      {
        name: "withdrawalHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "success",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawalInitiated",
    inputs: [
      {
        name: "l1Token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "l2Token",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawalProven",
    inputs: [
      {
        name: "withdrawalHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "from",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawalProvenExtension1",
    inputs: [
      {
        name: "withdrawalHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "proofSubmitter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawerBalanceBurnt",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50601680601d6000396000f3fe6080604052600080fdfea164736f6c634300080f000a";

type Events0815ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Events0815ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Events0815__factory extends ContractFactory {
  constructor(...args: Events0815ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Events0815> {
    return super.deploy(overrides || {}) as Promise<Events0815>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Events0815 {
    return super.attach(address) as Events0815;
  }
  override connect(signer: Signer): Events0815__factory {
    return super.connect(signer) as Events0815__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Events0815Interface {
    return new utils.Interface(_abi) as Events0815Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Events0815 {
    return new Contract(address, _abi, signerOrProvider) as Events0815;
  }
}
