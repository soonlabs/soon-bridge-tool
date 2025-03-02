/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1822ProxiableUpgradeable,
  IERC1822ProxiableUpgradeableInterface,
} from "../../draft-IERC1822Upgradeable.sol/IERC1822ProxiableUpgradeable";

const _abi = [
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IERC1822ProxiableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1822ProxiableUpgradeableInterface {
    return new utils.Interface(_abi) as IERC1822ProxiableUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1822ProxiableUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1822ProxiableUpgradeable;
  }
}
