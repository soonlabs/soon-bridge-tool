/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
} from "./common";

export interface ProtocolVersionsInterface extends utils.Interface {
  functions: {
    "RECOMMENDED_SLOT()": FunctionFragment;
    "REQUIRED_SLOT()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "initialize(address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "recommended()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "required()": FunctionFragment;
    "setRecommended(uint256)": FunctionFragment;
    "setRequired(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "RECOMMENDED_SLOT"
      | "REQUIRED_SLOT"
      | "VERSION"
      | "initialize"
      | "owner"
      | "recommended"
      | "renounceOwnership"
      | "required"
      | "setRecommended"
      | "setRequired"
      | "transferOwnership"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "RECOMMENDED_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REQUIRED_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recommended",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "required", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setRecommended",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRequired",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "RECOMMENDED_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REQUIRED_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recommended",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "required", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRecommended",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ConfigUpdate(uint256,uint8,bytes)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfigUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ConfigUpdateEventObject {
  version: BigNumber;
  updateType: number;
  data: string;
}
export type ConfigUpdateEvent = TypedEvent<
  [BigNumber, number, string],
  ConfigUpdateEventObject
>;

export type ConfigUpdateEventFilter = TypedEventFilter<ConfigUpdateEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProtocolVersions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProtocolVersionsInterface;

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
    /**
     * Storage slot that the recommended protocol version is stored at.
     */
    RECOMMENDED_SLOT(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Storage slot that the required protocol version is stored at.
     */
    REQUIRED_SLOT(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Version identifier, used for upgrades.
     */
    VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Initializer.
     * @param _owner Initial owner of the contract.
     * @param _recommended Recommended protocol version to operate on thi chain.
     * @param _required Required protocol version to operate on this chain.
     */
    initialize(
      _owner: string,
      _required: BigNumberish,
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * High level getter for the recommended protocol version.
     */
    recommended(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { out_: BigNumber }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * High level getter for the required protocol version.
     */
    required(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { out_: BigNumber }>;

    /**
     * Updates the recommended protocol version. Can only be called by the owner.
     * @param _recommended New recommended protocol version.
     */
    setRecommended(
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Updates the required protocol version. Can only be called by the owner.
     * @param _required New required protocol version.
     */
    setRequired(
      _required: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<[string]>;
  };

  /**
   * Storage slot that the recommended protocol version is stored at.
   */
  RECOMMENDED_SLOT(overrides?: CallOverrides): Promise<string>;

  /**
   * Storage slot that the required protocol version is stored at.
   */
  REQUIRED_SLOT(overrides?: CallOverrides): Promise<string>;

  /**
   * Version identifier, used for upgrades.
   */
  VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Initializer.
   * @param _owner Initial owner of the contract.
   * @param _recommended Recommended protocol version to operate on thi chain.
   * @param _required Required protocol version to operate on this chain.
   */
  initialize(
    _owner: string,
    _required: BigNumberish,
    _recommended: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * High level getter for the recommended protocol version.
   */
  recommended(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * High level getter for the required protocol version.
   */
  required(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Updates the recommended protocol version. Can only be called by the owner.
   * @param _recommended New recommended protocol version.
   */
  setRecommended(
    _recommended: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Updates the required protocol version. Can only be called by the owner.
   * @param _required New required protocol version.
   */
  setRequired(
    _required: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Semantic version.
   */
  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Storage slot that the recommended protocol version is stored at.
     */
    RECOMMENDED_SLOT(overrides?: CallOverrides): Promise<string>;

    /**
     * Storage slot that the required protocol version is stored at.
     */
    REQUIRED_SLOT(overrides?: CallOverrides): Promise<string>;

    /**
     * Version identifier, used for upgrades.
     */
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Initializer.
     * @param _owner Initial owner of the contract.
     * @param _recommended Recommended protocol version to operate on thi chain.
     * @param _required Required protocol version to operate on this chain.
     */
    initialize(
      _owner: string,
      _required: BigNumberish,
      _recommended: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * High level getter for the recommended protocol version.
     */
    recommended(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * High level getter for the required protocol version.
     */
    required(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Updates the recommended protocol version. Can only be called by the owner.
     * @param _recommended New recommended protocol version.
     */
    setRecommended(
      _recommended: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Updates the required protocol version. Can only be called by the owner.
     * @param _required New required protocol version.
     */
    setRequired(
      _required: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ConfigUpdate(uint256,uint8,bytes)"(
      version?: BigNumberish | null,
      updateType?: BigNumberish | null,
      data?: null
    ): ConfigUpdateEventFilter;
    ConfigUpdate(
      version?: BigNumberish | null,
      updateType?: BigNumberish | null,
      data?: null
    ): ConfigUpdateEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    /**
     * Storage slot that the recommended protocol version is stored at.
     */
    RECOMMENDED_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Storage slot that the required protocol version is stored at.
     */
    REQUIRED_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Version identifier, used for upgrades.
     */
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Initializer.
     * @param _owner Initial owner of the contract.
     * @param _recommended Recommended protocol version to operate on thi chain.
     * @param _required Required protocol version to operate on this chain.
     */
    initialize(
      _owner: string,
      _required: BigNumberish,
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * High level getter for the recommended protocol version.
     */
    recommended(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * High level getter for the required protocol version.
     */
    required(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Updates the recommended protocol version. Can only be called by the owner.
     * @param _recommended New recommended protocol version.
     */
    setRecommended(
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Updates the required protocol version. Can only be called by the owner.
     * @param _required New required protocol version.
     */
    setRequired(
      _required: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Storage slot that the recommended protocol version is stored at.
     */
    RECOMMENDED_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Storage slot that the required protocol version is stored at.
     */
    REQUIRED_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Version identifier, used for upgrades.
     */
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Initializer.
     * @param _owner Initial owner of the contract.
     * @param _recommended Recommended protocol version to operate on thi chain.
     * @param _required Required protocol version to operate on this chain.
     */
    initialize(
      _owner: string,
      _required: BigNumberish,
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * High level getter for the recommended protocol version.
     */
    recommended(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * High level getter for the required protocol version.
     */
    required(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Updates the recommended protocol version. Can only be called by the owner.
     * @param _recommended New recommended protocol version.
     */
    setRecommended(
      _recommended: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Updates the required protocol version. Can only be called by the owner.
     * @param _required New required protocol version.
     */
    setRequired(
      _required: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
