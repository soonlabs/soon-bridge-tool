/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AssetReceiver0825,
  AssetReceiver0825Interface,
} from "../../AssetReceiver.sol/AssetReceiver0825";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "CALL",
    inputs: [
      {
        name: "_target",
        type: "address",
        internalType: "address",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "success_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "data_",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "DELEGATECALL",
    inputs: [
      {
        name: "_target",
        type: "address",
        internalType: "address",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "success_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "data_",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawERC20",
    inputs: [
      {
        name: "_asset",
        type: "address",
        internalType: "contract ERC20",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawERC20",
    inputs: [
      {
        name: "_asset",
        type: "address",
        internalType: "contract ERC20",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawERC721",
    inputs: [
      {
        name: "_asset",
        type: "address",
        internalType: "contract ERC721",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawETH",
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawETH",
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnerUpdated",
    inputs: [
      {
        name: "user",
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
    name: "ReceivedETH",
    inputs: [
      {
        name: "from",
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
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrewERC20",
    inputs: [
      {
        name: "withdrawer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "asset",
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
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrewERC721",
    inputs: [
      {
        name: "withdrawer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrewETH",
    inputs: [
      {
        name: "withdrawer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "recipient",
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
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b50604051610ec4380380610ec4833981016040819052602b91607b565b5f80546001600160a01b0319166001600160a01b038316908117825560405183928392917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350505060a6565b5f60208284031215608a575f80fd5b81516001600160a01b0381168114609f575f80fd5b9392505050565b610e11806100b35f395ff3fe608060405260043610610096575f3560e01c8063690d8320116100665780638da5cb5b1161004c5780638da5cb5b1461019d5780639456fbcc146101ed578063edee62391461020c575f80fd5b8063690d8320146101545780636e2d44ae14610173575f80fd5b806313af4035146100d65780634025feb2146100f757806344004cc1146101165780634782f77914610135575f80fd5b366100d25760405134815233907f4103257eaac983ca79a70d28f90dfc4fa16b619bb0c17ee7cab0d4034c2796249060200160405180910390a2005b5f80fd5b3480156100e1575f80fd5b506100f56100f0366004610b25565b61021f565b005b348015610102575f80fd5b506100f5610111366004610b47565b610313565b348015610121575f80fd5b506100f5610130366004610b47565b61049f565b348015610140575f80fd5b506100f561014f366004610b85565b61062c565b34801561015f575f80fd5b506100f561016e366004610b25565b610777565b610186610181366004610c83565b610804565b604051610194929190610cd8565b60405180910390f35b3480156101a8575f80fd5b505f546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610194565b3480156101f8575f80fd5b506100f5610207366004610d34565b6108fa565b61018661021a366004610d6b565b610a12565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a4544000000000000000000000000000000000000000060448201526064015b60405180910390fd5b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152604482018390528416906323b872dd906064015f604051808303815f87803b158015610406575f80fd5b505af1158015610418573d5f803e3d5ffd5b505050508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f30b478a5e196e55886228aa87ba74a7dfeba655e0a4d7ba275eabfc22aabb7a88460405161049291815260200190565b60405180910390a4505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461051f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610591573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105b59190610db8565b508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6b00f1c7883f053ba83e907fd1965b22fffe3c4111383e725f04638a566cdbfa8460405161049291815260200190565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146106ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610702576040519150601f19603f3d011682016040523d82523d5f602084013e610707565b606091505b505090508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f1f12aa8b6d492dd9b98e2b00b0b20830c2a7ded65afac13b60d169a034ae90bc8460405161076a91815260200190565b60405180910390a3505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146107f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b610801814761062c565b50565b5f805460609073ffffffffffffffffffffffffffffffffffffffff163314610888576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b8473ffffffffffffffffffffffffffffffffffffffff1683856040516108ae9190610dd7565b5f6040518083038185875af1925050503d805f81146108e8576040519150601f19603f3d011682016040523d82523d5f602084013e6108ed565b606091505b5090969095509350505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461097a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152610a0e908390839073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109ea573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101309190610ded565b5050565b5f805460609073ffffffffffffffffffffffffffffffffffffffff163314610a96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015260640161029b565b8373ffffffffffffffffffffffffffffffffffffffff1683604051610abb9190610dd7565b5f60405180830381855af49150503d805f8114610af3576040519150601f19603f3d011682016040523d82523d5f602084013e610af8565b606091505b50909590945092505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610801575f80fd5b5f60208284031215610b35575f80fd5b8135610b4081610b04565b9392505050565b5f805f60608486031215610b59575f80fd5b8335610b6481610b04565b92506020840135610b7481610b04565b929592945050506040919091013590565b5f8060408385031215610b96575f80fd5b8235610ba181610b04565b946020939093013593505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f82601f830112610beb575f80fd5b813567ffffffffffffffff80821115610c0657610c06610baf565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610c4c57610c4c610baf565b81604052838152866020858801011115610c64575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f805f60608486031215610c95575f80fd5b8335610ca081610b04565b9250602084013567ffffffffffffffff811115610cbb575f80fd5b610cc786828701610bdc565b925050604084013590509250925092565b8215158152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f8060408385031215610d45575f80fd5b8235610d5081610b04565b91506020830135610d6081610b04565b809150509250929050565b5f8060408385031215610d7c575f80fd5b8235610d8781610b04565b9150602083013567ffffffffffffffff811115610da2575f80fd5b610dae85828601610bdc565b9150509250929050565b5f60208284031215610dc8575f80fd5b81518015158114610b40575f80fd5b5f82518060208501845e5f920191825250919050565b5f60208284031215610dfd575f80fd5b505191905056fea164736f6c6343000819000a";

type AssetReceiver0825ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetReceiver0825ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetReceiver0825__factory extends ContractFactory {
  constructor(...args: AssetReceiver0825ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<AssetReceiver0825> {
    return super.deploy(_owner, overrides || {}) as Promise<AssetReceiver0825>;
  }
  override getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): AssetReceiver0825 {
    return super.attach(address) as AssetReceiver0825;
  }
  override connect(signer: Signer): AssetReceiver0825__factory {
    return super.connect(signer) as AssetReceiver0825__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetReceiver0825Interface {
    return new utils.Interface(_abi) as AssetReceiver0825Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetReceiver0825 {
    return new Contract(address, _abi, signerOrProvider) as AssetReceiver0825;
  }
}
