/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SemverLock,
  SemverLockInterface,
} from "../../SemverLock.s.sol/SemverLock";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
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
    name: "run",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "FfiFailed",
    inputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
  },
] as const;

const _bytecode =
  "0x6080604052600c805462ff00ff19166201000117905534801561002157600080fd5b506117fa806100316000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf4714610045575b600080fd5b61004361006c565b005b600c546100589062010000900460ff1681565b604051901515815260200160405180910390f35b60408051600380825260808201909252600091816020015b60608152602001906001900390816100845790505090506040518060400160405280600481526020017f6261736800000000000000000000000000000000000000000000000000000000815250816000815181106100e4576100e4610e05565b60200260200101819052506040518060400160405280600281526020017f2d630000000000000000000000000000000000000000000000000000000000008152508160018151811061013857610138610e05565b60200260200101819052506040518060800160405280604e81526020016117a0604e91398160028151811061016f5761016f610e05565b602002602001018190525060006101858261024e565b6040517f498fdcf4000000000000000000000000000000000000000000000000000000008152909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063498fdcf4906101db908590600401610eae565b600060405180830381865afa1580156101f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261023e9190810190610fda565b905061024981610261565b505050565b606061025b826000610a39565b92915050565b606060005b82518110156109915760408051600280825260608201909252600091816020015b60608152602001906001900390816102875790505090506040518060400160405280600381526020017f6361740000000000000000000000000000000000000000000000000000000000815250816000815181106102e7576102e7610e05565b602002602001018190525083828151811061030457610304610e05565b60200260200101518160018151811061031f5761031f610e05565b602002602001018190525060006103358261024e565b60408051600380825260808201909252919250816020015b606081526020019060019003908161034d5790505091506040518060400160405280600481526020017f6261736800000000000000000000000000000000000000000000000000000000815250826000815181106103ad576103ad610e05565b60200260200101819052506040518060400160405280600281526020017f2d630000000000000000000000000000000000000000000000000000000000008152508260018151811061040157610401610e05565b602002602001018190525084838151811061041e5761041e610e05565b6020026020010151604051602001610436919061109d565b6040516020818303038152906040528260028151811061045857610458610e05565b6020026020010181905250600061046e8361024e565b90506040518060400160405280602081526020017f666f72676520636f6e666967202d2d6a736f6e207c206a71202d72202e6f7574815250836002815181106104b9576104b9610e05565b602002602001018190525060006104cf8461024e565b9050600081836040516020016104e692919061112f565b60405160208183030381529060405290508060405160200161050891906111b1565b6040516020818303038152906040528560028151811061052a5761052a610e05565b602002602001018190525060006105408661024e565b9050600061055d8260405180602001604052806000815250610c60565b90506000815111856040516020016105759190611243565b604051602081830303815290604052906105c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bc9190611288565b60405180910390fd5b506000816000815181106105db576105db610e05565b6020026020010151905060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff16638d1cc92587898560405160200161063b9392919061129b565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016106669190611288565b600060405180830381865afa158015610683573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106c99190810190611332565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff16632d812b448d8c8151811061071c5761071c610e05565b602002602001015183805190602001206040518363ffffffff1660e01b8152600401610749929190611367565b6000604051808303816000875af1158015610768573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107ae9190810190611332565b5060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff16632d812b448e8d8151811061080257610802610e05565b60200260200101518b805190602001206040518363ffffffff1660e01b815260040161082f9291906113c0565b6000604051808303816000875af115801561084e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108949190810190611332565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff166388da6d358e8d815181106108e7576108e7610e05565b6020026020010151836040518363ffffffff1660e01b815260040161090d929190611419565b6000604051808303816000875af115801561092c573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109729190810190611332565b9b5050505050505050505050808061098990611455565b915050610266565b506040517fe23cd19f000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063e23cd19f906109e29084906004016114b4565b600060405180830381600087803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b50505050610a356040518060600160405280602d8152602001611773602d9139610d1f565b5050565b6040517ff45c1ce7000000000000000000000000000000000000000000000000000000008152606090600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f45c1ce790610a8f908790600401611506565b6000604051808303816000875af1158015610aae573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610af49190810190611586565b9050606060005b8551811015610b545781868281518110610b1757610b17610e05565b6020026020010151604051602001610b30929190611630565b60405160208183030381529060405291508080610b4c90611455565b915050610afb565b50815160030b15610bd457808260400151604051602001610b76929190611687565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f37eccf6f0000000000000000000000000000000000000000000000000000000082526105bc91600401611288565b83158015610c3e575060408051808201909152600281527f5b5d0000000000000000000000000000000000000000000000000000000000006020918201528281015180519101207f518674ab2b227e5f11e9084f615d57663cde47bce1ba168b4c19c7ee22a73d70145b15610c545780604051602001610b769190611708565b50602001519392505050565b6040517f498fdcf4000000000000000000000000000000000000000000000000000000008152606090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063498fdcf490610cb5908690869060040161174d565b600060405180830381865afa158015610cd2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d189190810190610fda565b9392505050565b610dae81604051602401610d339190611288565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052610db1565b50565b610dae8180516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015610e4f578181015183820152602001610e37565b83811115610e5e576000848401525b50505050565b60008151808452610e7c816020860160208601610e34565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b604081526000610ec16040830184610e64565b828103602093840152600081529190910192915050565b6040516060810167ffffffffffffffff81118282101715610efb57610efb610dd6565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f4857610f48610dd6565b604052919050565b600082601f830112610f6157600080fd5b815167ffffffffffffffff811115610f7b57610f7b610dd6565b610fac60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610f01565b818152846020838601011115610fc157600080fd5b610fd2826020830160208701610e34565b949350505050565b60006020808385031215610fed57600080fd5b825167ffffffffffffffff8082111561100557600080fd5b818501915085601f83011261101957600080fd5b81518181111561102b5761102b610dd6565b8060051b61103a858201610f01565b918252838101850191858101908984111561105457600080fd5b86860192505b83831015611090578251858111156110725760008081fd5b6110808b89838a0101610f50565b835250918601919086019061105a565b9998505050505050505050565b7f6563686f202200000000000000000000000000000000000000000000000000008152600082516110d5816006850160208701610e34565b7f227c20736564202d452027737c7372632f2e2a2f282e2b295c2e736f6c7c5c3160069390910192830152507f7c270000000000000000000000000000000000000000000000000000000000006026820152602801919050565b60008351611141818460208801610e34565b7f2f00000000000000000000000000000000000000000000000000000000000000908301908152835161117b816001840160208801610e34565b7f2e736f6c0000000000000000000000000000000000000000000000000000000060019290910191820152600501949350505050565b7f6c73202d31202d2d636f6c6f723d6e65766572200000000000000000000000008152600082516111e9816014850160208701610e34565b7f207c206a71202d52202d73202d63202773706c697428220a2229207c206d617060149390910192830152507f2873656c656374286c656e677468203e203029292700000000000000000000006034820152604901919050565b7f4e6f2061727469666163747320666f756e6420666f722000000000000000000081526000825161127b816017850160208701610e34565b9190910160170192915050565b602081526000610d186020830184610e64565b600084516112ad818460208901610e34565b7f2f0000000000000000000000000000000000000000000000000000000000000090830190815284516112e7816001840160208901610e34565b7f2e736f6c2f000000000000000000000000000000000000000000000000000000600192909101918201528351611325816006840160208801610e34565b0160060195945050505050565b60006020828403121561134457600080fd5b815167ffffffffffffffff81111561135b57600080fd5b610fd284828501610f50565b60608152600061137a6060830185610e64565b8281036020840152600c81527f696e6974436f64654861736800000000000000000000000000000000000000006020820152604081019150508260408301529392505050565b6060815260006113d36060830185610e64565b8281036020840152600e81527f736f75726365436f6465486173680000000000000000000000000000000000006020820152604081019150508260408301529392505050565b606081526000606082015260806020820152600061143a6080830185610e64565b828103604084015261144c8185610e64565b95945050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036114ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6040815260006114c76040830184610e64565b8281036020840152601081527f73656d7665722d6c6f636b2e6a736f6e0000000000000000000000000000000060208201526040810191505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611579577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611567858351610e64565b9450928501929085019060010161152d565b5092979650505050505050565b60006020828403121561159857600080fd5b815167ffffffffffffffff808211156115b057600080fd5b90830190606082860312156115c457600080fd5b6115cc610ed8565b82518060030b81146115dd57600080fd5b81526020830151828111156115f157600080fd5b6115fd87828601610f50565b60208301525060408301518281111561161557600080fd5b61162187828601610f50565b60408301525095945050505050565b60008351611642818460208801610e34565b835190830190611656818360208801610e34565b7f20000000000000000000000000000000000000000000000000000000000000009101908152600101949350505050565b7f436f6d6d616e643a2000000000000000000000000000000000000000000000008152600083516116bf816009850160208801610e34565b7f0a4572726f723a2000000000000000000000000000000000000000000000000060099184019182015283516116fc816011840160208801610e34565b01601101949350505050565b7f4e6f206f75747075742066726f6d20436f6d6d616e643a200000000000000000815260008251611740816018850160208701610e34565b9190910160180192915050565b6040815260006117606040830185610e64565b828103602084015261144c8185610e6456fe57726f74652073656d766572206c6f636b2066696c6520746f202273656d7665722d6c6f636b2e6a736f6e222e67726570202d726c202740637573746f6d3a73656d7665722720737263207c206a71202d5273202773706c697428225c6e2229207c206d61702873656c656374286c656e677468203e2030292927a164736f6c634300080f000a";

type SemverLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SemverLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SemverLock__factory extends ContractFactory {
  constructor(...args: SemverLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<SemverLock> {
    return super.deploy(overrides || {}) as Promise<SemverLock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SemverLock {
    return super.attach(address) as SemverLock;
  }
  override connect(signer: Signer): SemverLock__factory {
    return super.connect(signer) as SemverLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemverLockInterface {
    return new utils.Interface(_abi) as SemverLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemverLock {
    return new Contract(address, _abi, signerOrProvider) as SemverLock;
  }
}
