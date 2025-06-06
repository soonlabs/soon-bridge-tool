/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AttestationStation,
  AttestationStationInterface,
} from "../AttestationStation";

const _abi = [
  {
    type: "function",
    name: "attest",
    inputs: [
      {
        name: "_attestations",
        type: "tuple[]",
        internalType: "struct AttestationStation.AttestationData[]",
        components: [
          {
            name: "about",
            type: "address",
            internalType: "address",
          },
          {
            name: "key",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "val",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "attest",
    inputs: [
      {
        name: "_about",
        type: "address",
        internalType: "address",
      },
      {
        name: "_key",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_val",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "attestations",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "version",
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
    type: "event",
    name: "AttestationCreated",
    inputs: [
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "about",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "key",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107d9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806329b42cb51461005157806354fd4d501461007a5780635eb5ea10146100b6578063702b9dee146100cb575b600080fd5b61006461005f3660046102c0565b6100de565b6040516100719190610367565b60405180910390f35b6100646040518060400160405280600581526020017f312e322e3000000000000000000000000000000000000000000000000000000081525081565b6100c96100c4366004610381565b610188565b005b6100c96100d93660046104d0565b6101eb565b600060208181529381526040808220855292815282812090935282529020805461010790610527565b80601f016020809104026020016040519081016040528092919081815260200182805461013390610527565b80156101805780601f1061015557610100808354040283529160200191610180565b820191906000526020600020905b81548152906001019060200180831161016357829003601f168201915b505050505081565b8060005b818110156101e55760008484838181106101a8576101a861057a565b90506020028101906101ba91906105a9565b6101c3906105e7565b90506101dc8160000151826020015183604001516101eb565b5060010161018c565b50505050565b3360009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff871684528252808320858452909152902061022b82826106b2565b50818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f28710dfecab43d1e29e02aa56b2e1e610c0bae19135c9cf7a83a1adb6df96d858460405161028a9190610367565b60405180910390a4505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102bb57600080fd5b919050565b6000806000606084860312156102d557600080fd5b6102de84610297565b92506102ec60208501610297565b9150604084013590509250925092565b6000815180845260005b8181101561032257602081850181015186830182015201610306565b81811115610334576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061037a60208301846102fc565b9392505050565b6000806020838503121561039457600080fd5b823567ffffffffffffffff808211156103ac57600080fd5b818501915085601f8301126103c057600080fd5b8135818111156103cf57600080fd5b8660208260051b85010111156103e457600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261043657600080fd5b813567ffffffffffffffff80821115610451576104516103f6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610497576104976103f6565b816040528381528660208588010111156104b057600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156104e557600080fd5b6104ee84610297565b925060208401359150604084013567ffffffffffffffff81111561051157600080fd5b61051d86828701610425565b9150509250925092565b600181811c9082168061053b57607f821691505b602082108103610574577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18336030181126105dd57600080fd5b9190910192915050565b6000606082360312156105f957600080fd5b6040516060810167ffffffffffffffff828210818311171561061d5761061d6103f6565b8160405261062a85610297565b835260208501356020840152604085013591508082111561064a57600080fd5b5061065736828601610425565b60408301525092915050565b601f8211156106ad57600081815260208120601f850160051c8101602086101561068a5750805b601f850160051c820191505b818110156106a957828155600101610696565b5050505b505050565b815167ffffffffffffffff8111156106cc576106cc6103f6565b6106e0816106da8454610527565b84610663565b602080601f83116001811461073357600084156106fd5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556106a9565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561078057888601518255948401946001909101908401610761565b50858210156107bc57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea164736f6c634300080f000a";

type AttestationStationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttestationStationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttestationStation__factory extends ContractFactory {
  constructor(...args: AttestationStationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<AttestationStation> {
    return super.deploy(overrides || {}) as Promise<AttestationStation>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AttestationStation {
    return super.attach(address) as AttestationStation;
  }
  override connect(signer: Signer): AttestationStation__factory {
    return super.connect(signer) as AttestationStation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttestationStationInterface {
    return new utils.Interface(_abi) as AttestationStationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttestationStation {
    return new Contract(address, _abi, signerOrProvider) as AttestationStation;
  }
}
