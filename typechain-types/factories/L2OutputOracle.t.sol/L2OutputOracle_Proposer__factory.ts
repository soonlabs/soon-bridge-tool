/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  L2OutputOracle_Proposer,
  L2OutputOracle_ProposerInterface,
} from "../../L2OutputOracle.t.sol/L2OutputOracle_Proposer";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_oracle",
        type: "address",
        internalType: "contract L2OutputOracle",
      },
      {
        name: "_vm",
        type: "address",
        internalType: "contract Vm",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "proposeL2Output",
    inputs: [
      {
        name: "_outputRoot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_l2BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_l1BlockHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_l1BlockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161033d38038061033d83398101604081905261002f91610078565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b2565b6001600160a01b038116811461007557600080fd5b50565b6000806040838503121561008b57600080fd5b825161009681610060565b60208401519092506100a781610060565b809150509250929050565b61027c806100c16000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639aaab64814610030575b600080fd5b61004361003e366004610200565b610045565b005b600154600054604080517fbffa7f0f000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9384169363ca669fa793169163bffa7f0f9160048083019260209291908290030181865afa1580156100bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e39190610232565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561014957600080fd5b505af115801561015d573d6000803e3d6000fd5b50506000546040517f9aaab6480000000000000000000000000000000000000000000000000000000081526004810188905260248101879052604481018690526064810185905273ffffffffffffffffffffffffffffffffffffffff9091169250639aaab6489150608401600060405180830381600087803b1580156101e257600080fd5b505af11580156101f6573d6000803e3d6000fd5b5050505050505050565b6000806000806080858703121561021657600080fd5b5050823594602084013594506040840135936060013592509050565b60006020828403121561024457600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461026857600080fd5b939250505056fea164736f6c634300080f000a";

type L2OutputOracle_ProposerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L2OutputOracle_ProposerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L2OutputOracle_Proposer__factory extends ContractFactory {
  constructor(...args: L2OutputOracle_ProposerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _oracle: string,
    _vm: string,
    overrides?: Overrides & { from?: string }
  ): Promise<L2OutputOracle_Proposer> {
    return super.deploy(
      _oracle,
      _vm,
      overrides || {}
    ) as Promise<L2OutputOracle_Proposer>;
  }
  override getDeployTransaction(
    _oracle: string,
    _vm: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, _vm, overrides || {});
  }
  override attach(address: string): L2OutputOracle_Proposer {
    return super.attach(address) as L2OutputOracle_Proposer;
  }
  override connect(signer: Signer): L2OutputOracle_Proposer__factory {
    return super.connect(signer) as L2OutputOracle_Proposer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L2OutputOracle_ProposerInterface {
    return new utils.Interface(_abi) as L2OutputOracle_ProposerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2OutputOracle_Proposer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L2OutputOracle_Proposer;
  }
}
