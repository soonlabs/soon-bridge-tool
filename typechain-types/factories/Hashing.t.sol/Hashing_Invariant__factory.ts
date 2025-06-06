/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Hashing_Invariant,
  Hashing_InvariantInterface,
} from "../../Hashing.t.sol/Hashing_Invariant";

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
    name: "invariant_hash_xdomain_msg_1",
    inputs: [],
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "invariant_hash_xdomain_msg_wrong_version",
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
  "0x6080604052600c8054600160ff199182168117909255601e8054909116909117905534801561002d57600080fd5b506119b48061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063916a17c61161008c578063ba414fa611610066578063ba414fa61461017e578063e20c9f7114610196578063e56f86361461019e578063fa7626d4146101a657600080fd5b8063916a17c614610166578063a63e1c441461016e578063b5508aa91461017657600080fd5b80633e5e3c23116100c85780633e5e3c231461012c5780633f7286f41461013457806366d9a9a01461013c57806385226c811461015157600080fd5b80630a9254e4146100ef5780631ed7831c146100f95780632ade388014610117575b600080fd5b6100f76101b3565b005b61010161039f565b60405161010e9190610f2e565b60405180910390f35b61011f61040e565b60405161010e9190610f88565b61010161055d565b6101016105ca565b610144610637565b60405161010e91906110ec565b61015961073f565b60405161010e91906111e2565b61014461080f565b6100f7610917565b6101596109b2565b610186610a82565b604051901515815260200161010e565b610101610b56565b6100f7610bc3565b601e546101869060ff1681565b6101bb610c33565b6040516101c790610e60565b604051809103906000f0801580156101e3573d6000803e3d6000fd5b50601e80547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff938416810291909117918290556017805460018101825560009182527fc624b66cc0138b8fabc209247f72d758e1cf3343756d543badbf24212bed8c150180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169290930490931617905560408051600280825260608201835290916020830190803683370190505090506364fbe55b60e01b816000815181106102c9576102c96112b9565b7fffffffff000000000000000000000000000000000000000000000000000000009092166020928302919091019091015280517f97681685000000000000000000000000000000000000000000000000000000009082906001908110610331576103316112b9565b7fffffffff0000000000000000000000000000000000000000000000000000000090921660209283029190910182015260408051808201909152601e5473ffffffffffffffffffffffffffffffffffffffff61010090910416815290810182905261039b81610d23565b5050565b6060601680548060200260200160405190810160405280929190818152602001828054801561040457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103d9575b5050505050905090565b6060601d805480602002602001604051908101604052809291908181526020016000905b82821015610554576000848152602080822060408051808201825260028702909201805473ffffffffffffffffffffffffffffffffffffffff168352600181018054835181870281018701909452808452939591948681019491929084015b8282101561053d5783829060005260206000200180546104b0906112e8565b80601f01602080910402602001604051908101604052809291908181526020018280546104dc906112e8565b80156105295780601f106104fe57610100808354040283529160200191610529565b820191906000526020600020905b81548152906001019060200180831161050c57829003601f168201915b505050505081526020019060010190610491565b505050508152505081526020019060010190610432565b50505050905090565b606060188054806020026020016040519081016040528092919081815260200182805480156104045760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103d9575050505050905090565b606060178054806020026020016040519081016040528092919081815260200182805480156104045760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103d9575050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b8282101561055457600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561072757602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116106d45790505b5050505050815250508152602001906001019061065b565b6060601a805480602002602001604051908101604052809291908181526020016000905b82821015610554578382906000526020600020018054610782906112e8565b80601f01602080910402602001604051908101604052809291908181526020018280546107ae906112e8565b80156107fb5780601f106107d0576101008083540402835291602001916107fb565b820191906000526020600020905b8154815290600101906020018083116107de57829003601f168201915b505050505081526020019060010190610763565b6060601c805480602002602001604051908101604052809291908181526020016000905b8282101561055457600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff1683526001810180548351818702810187019094528084529394919385830193928301828280156108ff57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116108ac5790505b50505050508152505081526020019060010190610833565b6109b0601e60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b32fcf9a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610987573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ab919061133b565b610de0565b565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156105545783829060005260206000200180546109f5906112e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a21906112e8565b8015610a6e5780601f10610a4357610100808354040283529160200191610a6e565b820191906000526020600020905b815481529060010190602001808311610a5157829003601f168201915b5050505050815260200190600101906109d6565b60085460009060ff1615610a9a575060085460ff1690565b6040517f667f9d70000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d600482018190527f6661696c65640000000000000000000000000000000000000000000000000000602483015260009163667f9d7090604401602060405180830381865afa158015610b2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4f9190611364565b1415905090565b606060158054806020026020016040519081016040528092919081815260200182805480156104045760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103d9575050505050905090565b6109b0601e60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2146b696040518163ffffffff1660e01b8152600401602060405180830381865afa158015610987573d6000803e3d6000fd5b6109b0604051602001610c77906020808252600f908201527f6f7074696d69736d2e6465706c6f790000000000000000000000000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120601580546001810182556000919091527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055565b601c805460018101825560009190915281517f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a211600290920291820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90921691909117815560208084015180518594610dda937f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a212909101920190610e6d565b50505050565b6040517fa59828850000000000000000000000000000000000000000000000000000000081528115156004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063a59828859060240160006040518083038186803b158015610e4557600080fd5b505afa158015610e59573d6000803e3d6000fd5b5050505050565b61062a8061137e83390190565b82805482825590600052602060002090600701600890048101928215610f095791602002820160005b83821115610ed757835183826101000a81548163ffffffff021916908360e01c02179055509260200192600401602081600301049283019260010302610e96565b8015610f075782816101000a81549063ffffffff0219169055600401602081600301049283019260010302610ed7565b505b50610f15929150610f19565b5090565b5b80821115610f155760008155600101610f1a565b6020808252825182820181905260009190848201906040850190845b81811015610f7c57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610f4a565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156110de577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08984030185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790528051878501819052908801906060600582901b86018101919086019060005b818110156110c8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08885030183528451805180865260005b81811015611079578e81840101518f82890101528e8101905061105b565b8181111561108a5760008f83890101525b50958d0195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016949094018c019350918b0191600101611022565b5050509588019593505090860190600101610faf565b509098975050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156111d3578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff168552880151888501889052805188860181905290890190839060608701905b808310156111be5783517fffffffff00000000000000000000000000000000000000000000000000000000168252928b019260019290920191908b019061117c565b50978a01979550505091870191600101611114565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b838110156112ab577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089870301855282518051808852835b8181101561125d578281018a01518982018b01528901611242565b8181111561126d57848a838b0101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169690960187019550938601939186019160010161120a565b509398975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806112fc57607f821691505b602082108103611335577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60006020828403121561134d57600080fd5b8151801515811461135d57600080fd5b9392505050565b60006020828403121561137657600080fd5b505191905056fe608060405234801561001057600080fd5b5061060a806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806364fbe55b146100515780639768168514610066578063b32fcf9a14610079578063e2146b691461009f575b600080fd5b61006461005f366004610441565b6100ac565b005b6100646100743660046104d6565b61010d565b60005461008b90610100900460ff1681565b604051901515815260200160405180910390f35b60005461008b9060ff1681565b60006100ba878960f01b1790565b90506100ca818787878787610192565b508761ffff1660011461010357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b5050505050505050565b7e010000000000000000000000000000000000000000000000000000000000008617600061013f828888888888610192565b9050600061015183898989898961024e565b905080821461018757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b505050505050505050565b600060f087901c60018190036101b8576101b088888888888861024e565b915050610244565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f48617368696e673a20756e6b6e6f776e2063726f737320646f6d61696e206d6560448201527f73736167652076657273696f6e00000000000000000000000000000000000000606482015260840160405180910390fd5b9695505050505050565b600061025e878787878787610271565b8051906020012090509695505050505050565b606086868686868660405160240161028e96959493929190610550565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f54aa43a30000000000000000000000000000000000000000000000000000000017905290509695505050505050565b80357dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8116811461033e57600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461033e57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126103a757600080fd5b813567ffffffffffffffff808211156103c2576103c2610367565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561040857610408610367565b8160405283815286602085880101111561042157600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600060e0888a03121561045c57600080fd5b873561ffff8116811461046e57600080fd5b965061047c60208901610310565b95506040880135945061049160608901610343565b93506080880135925060a0880135915060c088013567ffffffffffffffff8111156104bb57600080fd5b6104c78a828b01610396565b91505092959891949750929550565b60008060008060008060c087890312156104ef57600080fd5b6104f887610310565b95506020870135945061050d60408801610343565b9350606087013592506080870135915060a087013567ffffffffffffffff81111561053757600080fd5b61054389828a01610396565b9150509295509295509295565b86815260006020878184015273ffffffffffffffffffffffffffffffffffffffff8716604084015285606084015284608084015260c060a084015283518060c085015260005b818110156105b25785810183015185820160e001528201610596565b818111156105c457600060e083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160e0019897505050505050505056fea164736f6c634300080f000aa164736f6c634300080f000a";

type Hashing_InvariantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Hashing_InvariantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hashing_Invariant__factory extends ContractFactory {
  constructor(...args: Hashing_InvariantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Hashing_Invariant> {
    return super.deploy(overrides || {}) as Promise<Hashing_Invariant>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Hashing_Invariant {
    return super.attach(address) as Hashing_Invariant;
  }
  override connect(signer: Signer): Hashing_Invariant__factory {
    return super.connect(signer) as Hashing_Invariant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Hashing_InvariantInterface {
    return new utils.Interface(_abi) as Hashing_InvariantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Hashing_Invariant {
    return new Contract(address, _abi, signerOrProvider) as Hashing_Invariant;
  }
}
