/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export declare namespace OPStackManager {
  export type RolesStruct = {
    proxyAdminOwner: string;
    systemConfigOwner: string;
    batcher: string;
    unsafeBlockSigner: string;
    proposer: string;
    challenger: string;
  };

  export type RolesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    proxyAdminOwner: string;
    systemConfigOwner: string;
    batcher: string;
    unsafeBlockSigner: string;
    proposer: string;
    challenger: string;
  };
}

export interface OPStackManager_HarnessInterface extends utils.Interface {
  functions: {
    "chainIdToBatchInboxAddress_exposed(uint256)": FunctionFragment;
    "deploy(uint256,uint32,uint32,(address,address,address,address,address,address))": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "chainIdToBatchInboxAddress_exposed"
      | "deploy"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "chainIdToBatchInboxAddress_exposed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      OPStackManager.RolesStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "chainIdToBatchInboxAddress_exposed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Deployed(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export interface DeployedEventObject {
  l2ChainId: BigNumber;
  systemConfig: string;
}
export type DeployedEvent = TypedEvent<
  [BigNumber, string],
  DeployedEventObject
>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface OPStackManager_Harness extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OPStackManager_HarnessInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    chainIdToBatchInboxAddress_exposed(
      l2ChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deploy(
      _l2ChainId: BigNumberish,
      _basefeeScalar: BigNumberish,
      _blobBasefeeScalar: BigNumberish,
      _roles: OPStackManager.RolesStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { systemConfig_: string }>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  chainIdToBatchInboxAddress_exposed(
    l2ChainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  deploy(
    _l2ChainId: BigNumberish,
    _basefeeScalar: BigNumberish,
    _blobBasefeeScalar: BigNumberish,
    _roles: OPStackManager.RolesStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    chainIdToBatchInboxAddress_exposed(
      l2ChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    deploy(
      _l2ChainId: BigNumberish,
      _basefeeScalar: BigNumberish,
      _blobBasefeeScalar: BigNumberish,
      _roles: OPStackManager.RolesStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Deployed(uint256,address)"(
      l2ChainId?: BigNumberish | null,
      systemConfig?: string | null
    ): DeployedEventFilter;
    Deployed(
      l2ChainId?: BigNumberish | null,
      systemConfig?: string | null
    ): DeployedEventFilter;
  };

  estimateGas: {
    chainIdToBatchInboxAddress_exposed(
      l2ChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      _l2ChainId: BigNumberish,
      _basefeeScalar: BigNumberish,
      _blobBasefeeScalar: BigNumberish,
      _roles: OPStackManager.RolesStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chainIdToBatchInboxAddress_exposed(
      l2ChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deploy(
      _l2ChainId: BigNumberish,
      _basefeeScalar: BigNumberish,
      _blobBasefeeScalar: BigNumberish,
      _roles: OPStackManager.RolesStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
