/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OPStackManager_Init,
  OPStackManager_InitInterface,
} from "../../OPStackManager.t.sol/OPStackManager_Init";

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
  "0x6080604052600c8054600160ff199182168117909255601e805490911690911790556104d2602555602680546001600160401b03191664010000000117905534801561004a57600080fd5b50610ffd8061005a6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806385226c8111610081578063ba414fa61161005b578063ba414fa614610160578063e20c9f7114610178578063fa7626d41461018057600080fd5b806385226c811461013b578063916a17c614610150578063b5508aa91461015857600080fd5b80633e5e3c23116100b25780633e5e3c23146101165780633f7286f41461011e57806366d9a9a01461012657600080fd5b80630a9254e4146100d95780631ed7831c146100e35780632ade388014610101575b600080fd5b6100e161018d565b005b6100eb6101f8565b6040516100f8919061098e565b60405180910390f35b610109610267565b6040516100f891906109e8565b6100eb6103b6565b6100eb610423565b61012e610490565b6040516100f89190610b4c565b610143610598565b6040516100f89190610c42565b61012e610668565b610143610770565b610168610840565b60405190151581526020016100f8565b6100eb610914565b601e546101689060ff1681565b60405161019990610981565b604051809103906000f0801580156101b5573d6000803e3d6000fd5b50601e60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6060601680548060200260200160405190810160405280929190818152602001828054801561025d57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610232575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020016000905b828210156103ad576000848152602080822060408051808201825260028702909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939591948681019491929084015b8282101561039657838290600052602060002001805461030990610d19565b80601f016020809104026020016040519081016040528092919081815260200182805461033590610d19565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b5050505050815260200190600101906102ea565b50505050815250508152602001906001019061028b565b50505050905090565b6060601880548060200260200160405190810160405280929190818152602001828054801561025d5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610232575050505050905090565b6060601780548060200260200160405190810160405280929190818152602001828054801561025d5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610232575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b828210156103ad57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561058057602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001906004019060208260030104928301926001038202915080841161052d5790505b505050505081525050815260200190600101906104b4565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156103ad5783829060005260206000200180546105db90610d19565b80601f016020809104026020016040519081016040528092919081815260200182805461060790610d19565b80156106545780601f1061062957610100808354040283529160200191610654565b820191906000526020600020905b81548152906001019060200180831161063757829003601f168201915b5050505050815260200190600101906105bc565b6060601c805480602002602001604051908101604052809291908181526020016000905b828210156103ad57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561075857602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116107055790505b5050505050815250508152602001906001019061068c565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156103ad5783829060005260206000200180546107b390610d19565b80601f01602080910402602001604051908101604052809291908181526020018280546107df90610d19565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b505050505081526020019060010190610794565b60085460009060ff1615610858575060085460ff1690565b6040517f667f9d70000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190527f6661696c65640000000000000000000000000000000000000000000000000000602483015260009163667f9d7090604401602060405180830381865afa1580156108e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090d9190610d6c565b1415905090565b6060601580548060200260200160405190810160405280929190818152602001828054801561025d5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610232575050505050905090565b61026b80610d8683390190565b6020808252825182820181905260009190848201906040850190845b818110156109dc57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016109aa565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015610b3e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790528051878501819052908801906060600582901b86018101919086019060005b81811015610b28577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08885030183528451805180865260005b81811015610ad9578e81840101518f82890101528e81019050610abb565b81811115610aea5760008f83890101525b50958d0195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016949094018c019350918b0191600101610a82565b5050509588019593505090860190600101610a0f565b509098975050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610c33578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff168552880151888501889052805188860181905290890190839060608701905b80831015610c1e5783517fffffffff00000000000000000000000000000000000000000000000000000000168252928b019260019290920191908b0190610bdc565b50978a01979550505091870191600101610b74565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b83811015610d0b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089870301855282518051808852835b81811015610cbd578281018a01518982018b01528901610ca2565b81811115610ccd57848a838b0101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01696909601870195509386019391860191600101610c6a565b509398975050505050505050565b600181811c90821680610d2d57607f821691505b602082108103610d66577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215610d7e57600080fd5b505191905056fe608060405234801561001057600080fd5b5061024b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806354fd4d501461003b57806388e1b16b1461008d575b600080fd5b6100776040518060400160405280600c81526020017f312e302e302d626574612e31000000000000000000000000000000000000000081525081565b604051610084919061013c565b60405180910390f35b6100a061009b3660046101c8565b6100c5565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610084565b60008415806100d357504685145b1561010a576040517f7a47c9a200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd623472500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208083528351808285015260005b818110156101695785810183015185820160400152820161014d565b8181111561017b576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803563ffffffff811681146101c357600080fd5b919050565b6000806000808486036101208112156101e057600080fd5b853594506101f0602087016101af565b93506101fe604087016101af565b925060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08201121561023057600080fd5b50929591945092606001915056fea164736f6c634300080f000aa164736f6c634300080f000a";

type OPStackManager_InitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OPStackManager_InitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OPStackManager_Init__factory extends ContractFactory {
  constructor(...args: OPStackManager_InitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<OPStackManager_Init> {
    return super.deploy(overrides || {}) as Promise<OPStackManager_Init>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OPStackManager_Init {
    return super.attach(address) as OPStackManager_Init;
  }
  override connect(signer: Signer): OPStackManager_Init__factory {
    return super.connect(signer) as OPStackManager_Init__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OPStackManager_InitInterface {
    return new utils.Interface(_abi) as OPStackManager_InitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OPStackManager_Init {
    return new Contract(address, _abi, signerOrProvider) as OPStackManager_Init;
  }
}
