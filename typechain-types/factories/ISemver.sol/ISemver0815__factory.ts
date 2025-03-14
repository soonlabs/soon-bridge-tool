/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISemver0815,
  ISemver0815Interface,
} from "../../ISemver.sol/ISemver0815";

const _abi = [
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
] as const;

export class ISemver0815__factory {
  static readonly abi = _abi;
  static createInterface(): ISemver0815Interface {
    return new utils.Interface(_abi) as ISemver0815Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISemver0815 {
    return new Contract(address, _abi, signerOrProvider) as ISemver0815;
  }
}
