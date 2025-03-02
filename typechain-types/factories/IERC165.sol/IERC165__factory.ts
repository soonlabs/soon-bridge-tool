/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC165, IERC165Interface } from "../../IERC165.sol/IERC165";

const _abi = [
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceID",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IERC165__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165Interface {
    return new utils.Interface(_abi) as IERC165Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC165 {
    return new Contract(address, _abi, signerOrProvider) as IERC165;
  }
}
