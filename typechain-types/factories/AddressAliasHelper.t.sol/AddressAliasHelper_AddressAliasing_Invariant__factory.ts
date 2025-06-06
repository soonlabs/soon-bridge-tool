/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AddressAliasHelper_AddressAliasing_Invariant,
  AddressAliasHelper_AddressAliasing_InvariantInterface,
} from "../../AddressAliasHelper.t.sol/AddressAliasHelper_AddressAliasing_Invariant";

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
    name: "invariant_round_trip_aliasing",
    inputs: [],
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setUp",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002d57600080fd5b5061137f8061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806366d9a9a01161008c578063b5508aa911610066578063b5508aa91461016b578063ba414fa614610173578063e20c9f711461018b578063fa7626d41461019357600080fd5b806366d9a9a01461013957806385226c811461014e578063916a17c61461016357600080fd5b80632ade3880116100bd5780632ade3880146101145780633e5e3c23146101295780633f7286f41461013157600080fd5b80630a9254e4146100e45780630e80eba6146100ee5780631ed7831c146100f6575b600080fd5b6100ec6101a0565b005b6100ec61032c565b6100fe6103c9565b60405161010b9190610e55565b60405180910390f35b61011c610438565b60405161010b9190610eaf565b6100fe610587565b6100fe6105f4565b610141610661565b60405161010b9190611013565b610156610769565b60405161010b9190611109565b610141610839565b610156610941565b61017b610a11565b604051901515815260200161010b565b6100fe610ae5565b601e5461017b9060ff1681565b6101a8610b52565b6040516101b490610d88565b604051809103906000f0801580156101d0573d6000803e3d6000fd5b50601e80547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff93841681029190911791829055601780546001810182556000919091527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c150180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169190920490921691909117905560408051600180825281830190925260009181602001602082028036833701905050905063c009306d60e01b816000815181106102be576102be6111e0565b7fffffffff0000000000000000000000000000000000000000000000000000000090921660209283029190910182015260408051808201909152601e5473ffffffffffffffffffffffffffffffffffffffff61010090910416815290810182905261032881610c42565b5050565b6103c7601e60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351188e586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561039c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c0919061120f565b6000610cff565b565b6060601680548060200260200160405190810160405280929190818152602001828054801561042e57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610403575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020016000905b8282101561057e576000848152602080822060408051808201825260028702909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939591948681019491929084015b828210156105675783829060005260206000200180546104da90611238565b80601f016020809104026020016040519081016040528092919081815260200182805461050690611238565b80156105535780601f1061052857610100808354040283529160200191610553565b820191906000526020600020905b81548152906001019060200180831161053657829003601f168201915b5050505050815260200190600101906104bb565b50505050815250508152602001906001019061045c565b50505050905090565b6060601880548060200260200160405190810160405280929190818152602001828054801561042e5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610403575050505050905090565b6060601780548060200260200160405190810160405280929190818152602001828054801561042e5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610403575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b8282101561057e57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561075157602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116106fe5790505b50505050508152505081526020019060010190610685565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101561057e5783829060005260206000200180546107ac90611238565b80601f01602080910402602001604051908101604052809291908181526020018280546107d890611238565b80156108255780601f106107fa57610100808354040283529160200191610825565b820191906000526020600020905b81548152906001019060200180831161080857829003601f168201915b50505050508152602001906001019061078d565b6060601c805480602002602001604051908101604052809291908181526020016000905b8282101561057e57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561092957602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116108d65790505b5050505050815250508152602001906001019061085d565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101561057e57838290600052602060002001805461098490611238565b80601f01602080910402602001604051908101604052809291908181526020018280546109b090611238565b80156109fd5780601f106109d2576101008083540402835291602001916109fd565b820191906000526020600020905b8154815290600101906020018083116109e057829003601f168201915b505050505081526020019060010190610965565b60085460009060ff1615610a29575060085460ff1690565b6040517f667f9d70000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190527f6661696c65640000000000000000000000000000000000000000000000000000602483015260009163667f9d7090604401602060405180830381865afa158015610aba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ade919061128b565b1415905090565b6060601580548060200260200160405190810160405280929190818152602001828054801561042e5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610403575050505050905090565b6103c7604051602001610b96906020808252600f908201527f6f7074696d69736d2e6465706c6f790000000000000000000000000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120601580546001810182556000919091527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b601c805460018101825560009190915281517f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a211600290920291820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117815560208084015180518594610cf9937f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a212909101920190610d94565b50505050565b6040517ff7fe347700000000000000000000000000000000000000000000000000000000815282151560048201528115156024820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f7fe34779060440160006040518083038186803b158015610d6c57600080fd5b505afa158015610d80573d6000803e3d6000fd5b505050505050565b60ce806112a583390190565b82805482825590600052602060002090600701600890048101928215610e305791602002820160005b83821115610dfe57835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610dbd565b8015610e2e5782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610dfe565b505b50610e3c929150610e40565b5090565b5b80821115610e3c5760008155600101610e41565b6020808252825182820181905260009190848201906040850190845b81811015610ea357835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e71565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015611005577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790528051878501819052908801906060600582901b86018101919086019060005b81811015610fef577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08885030183528451805180865260005b81811015610fa0578e81840101518f82890101528e81019050610f82565b81811115610fb15760008f83890101525b50958d0195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016949094018c019350918b0191600101610f49565b5050509588019593505090860190600101610ed6565b509098975050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156110fa578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff168552880151888501889052805188860181905290890190839060608701905b808310156110e55783517fffffffff00000000000000000000000000000000000000000000000000000000168252928b019260019290920191908b01906110a3565b50978a0197955050509187019160010161103b565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b838110156111d2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089870301855282518051808852835b81811015611184578281018a01518982018b01528901611169565b8181111561119457848a838b0101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01696909601870195509386019391860191600101611131565b509398975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561122157600080fd5b8151801515811461123157600080fd5b9392505050565b600181811c9082168061124c57607f821691505b602082108103611285577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561129d57600080fd5b505191905056fe608060405234801561001057600080fd5b5060af8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806351188e58146037578063c009306d146057575b600080fd5b60005460439060ff1681565b604051901515815260200160405180910390f35b606560623660046067565b50565b005b600060208284031215607857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114609b57600080fd5b939250505056fea164736f6c634300080f000aa164736f6c634300080f000a";

type AddressAliasHelper_AddressAliasing_InvariantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressAliasHelper_AddressAliasing_InvariantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressAliasHelper_AddressAliasing_Invariant__factory extends ContractFactory {
  constructor(
    ...args: AddressAliasHelper_AddressAliasing_InvariantConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<AddressAliasHelper_AddressAliasing_Invariant> {
    return super.deploy(
      overrides || {}
    ) as Promise<AddressAliasHelper_AddressAliasing_Invariant>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(
    address: string
  ): AddressAliasHelper_AddressAliasing_Invariant {
    return super.attach(
      address
    ) as AddressAliasHelper_AddressAliasing_Invariant;
  }
  override connect(
    signer: Signer
  ): AddressAliasHelper_AddressAliasing_Invariant__factory {
    return super.connect(
      signer
    ) as AddressAliasHelper_AddressAliasing_Invariant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressAliasHelper_AddressAliasing_InvariantInterface {
    return new utils.Interface(
      _abi
    ) as AddressAliasHelper_AddressAliasing_InvariantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressAliasHelper_AddressAliasing_Invariant {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AddressAliasHelper_AddressAliasing_Invariant;
  }
}
