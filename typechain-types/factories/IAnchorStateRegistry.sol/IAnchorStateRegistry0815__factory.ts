/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAnchorStateRegistry0815,
  IAnchorStateRegistry0815Interface,
} from "../../IAnchorStateRegistry.sol/IAnchorStateRegistry0815";

const _abi = [
  {
    type: "function",
    name: "anchors",
    inputs: [
      {
        name: "_gameType",
        type: "uint32",
        internalType: "GameType",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "Hash",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "disputeGameFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDisputeGameFactory",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAnchorState",
    inputs: [
      {
        name: "_game",
        type: "address",
        internalType: "contract IFaultDisputeGame",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tryUpdateAnchorState",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IAnchorStateRegistry0815__factory {
  static readonly abi = _abi;
  static createInterface(): IAnchorStateRegistry0815Interface {
    return new utils.Interface(_abi) as IAnchorStateRegistry0815Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAnchorStateRegistry0815 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAnchorStateRegistry0815;
  }
}
