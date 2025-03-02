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

export interface OwnerManagerInterface extends utils.Interface {
  functions: {
    "addOwnerWithThreshold(address,uint256)": FunctionFragment;
    "changeThreshold(uint256)": FunctionFragment;
    "getOwners()": FunctionFragment;
    "getThreshold()": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "removeOwner(address,address,uint256)": FunctionFragment;
    "swapOwner(address,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addOwnerWithThreshold"
      | "changeThreshold"
      | "getOwners"
      | "getThreshold"
      | "isOwner"
      | "removeOwner"
      | "swapOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addOwnerWithThreshold",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeOwner",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapOwner",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addOwnerWithThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapOwner", data: BytesLike): Result;

  events: {
    "AddedOwner(address)": EventFragment;
    "ChangedThreshold(uint256)": EventFragment;
    "RemovedOwner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedThreshold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedOwner"): EventFragment;
}

export interface AddedOwnerEventObject {
  owner: string;
}
export type AddedOwnerEvent = TypedEvent<[string], AddedOwnerEventObject>;

export type AddedOwnerEventFilter = TypedEventFilter<AddedOwnerEvent>;

export interface ChangedThresholdEventObject {
  threshold: BigNumber;
}
export type ChangedThresholdEvent = TypedEvent<
  [BigNumber],
  ChangedThresholdEventObject
>;

export type ChangedThresholdEventFilter =
  TypedEventFilter<ChangedThresholdEvent>;

export interface RemovedOwnerEventObject {
  owner: string;
}
export type RemovedOwnerEvent = TypedEvent<[string], RemovedOwnerEventObject>;

export type RemovedOwnerEventFilter = TypedEventFilter<RemovedOwnerEvent>;

export interface OwnerManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnerManagerInterface;

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
     * Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Adds the owner `owner` to the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner New owner address.
     */
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.
     * Changes the threshold of the Safe to `_threshold`.
     * @param _threshold New threshold.
     */
    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns array of owners.
     */
    getOwners(overrides?: CallOverrides): Promise<[string[]]>;

    getThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Removes the owner `owner` from the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner Owner address to be removed.
     * @param prevOwner Owner that pointed to the owner to be removed in the linked list
     */
    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.
     * Replaces the owner `oldOwner` in the Safe with `newOwner`.
     * @param newOwner New owner address.
     * @param oldOwner Owner address to be replaced.
     * @param prevOwner Owner that pointed to the owner to be replaced in the linked list
     */
    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  /**
   * Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
   * Adds the owner `owner` to the Safe and updates the threshold to `_threshold`.
   * @param _threshold New threshold.
   * @param owner New owner address.
   */
  addOwnerWithThreshold(
    owner: string,
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.
   * Changes the threshold of the Safe to `_threshold`.
   * @param _threshold New threshold.
   */
  changeThreshold(
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns array of owners.
   */
  getOwners(overrides?: CallOverrides): Promise<string[]>;

  getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  isOwner(owner: string, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
   * Removes the owner `owner` from the Safe and updates the threshold to `_threshold`.
   * @param _threshold New threshold.
   * @param owner Owner address to be removed.
   * @param prevOwner Owner that pointed to the owner to be removed in the linked list
   */
  removeOwner(
    prevOwner: string,
    owner: string,
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.
   * Replaces the owner `oldOwner` in the Safe with `newOwner`.
   * @param newOwner New owner address.
   * @param oldOwner Owner address to be replaced.
   * @param prevOwner Owner that pointed to the owner to be replaced in the linked list
   */
  swapOwner(
    prevOwner: string,
    oldOwner: string,
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Adds the owner `owner` to the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner New owner address.
     */
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.
     * Changes the threshold of the Safe to `_threshold`.
     * @param _threshold New threshold.
     */
    changeThreshold(
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns array of owners.
     */
    getOwners(overrides?: CallOverrides): Promise<string[]>;

    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<boolean>;

    /**
     * Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Removes the owner `owner` from the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner Owner address to be removed.
     * @param prevOwner Owner that pointed to the owner to be removed in the linked list
     */
    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.
     * Replaces the owner `oldOwner` in the Safe with `newOwner`.
     * @param newOwner New owner address.
     * @param oldOwner Owner address to be replaced.
     * @param prevOwner Owner that pointed to the owner to be replaced in the linked list
     */
    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedOwner(address)"(owner?: null): AddedOwnerEventFilter;
    AddedOwner(owner?: null): AddedOwnerEventFilter;

    "ChangedThreshold(uint256)"(threshold?: null): ChangedThresholdEventFilter;
    ChangedThreshold(threshold?: null): ChangedThresholdEventFilter;

    "RemovedOwner(address)"(owner?: null): RemovedOwnerEventFilter;
    RemovedOwner(owner?: null): RemovedOwnerEventFilter;
  };

  estimateGas: {
    /**
     * Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Adds the owner `owner` to the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner New owner address.
     */
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.
     * Changes the threshold of the Safe to `_threshold`.
     * @param _threshold New threshold.
     */
    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns array of owners.
     */
    getOwners(overrides?: CallOverrides): Promise<BigNumber>;

    getThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Removes the owner `owner` from the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner Owner address to be removed.
     * @param prevOwner Owner that pointed to the owner to be removed in the linked list
     */
    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.
     * Replaces the owner `oldOwner` in the Safe with `newOwner`.
     * @param newOwner New owner address.
     * @param oldOwner Owner address to be replaced.
     * @param prevOwner Owner that pointed to the owner to be replaced in the linked list
     */
    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Adds the owner `owner` to the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner New owner address.
     */
    addOwnerWithThreshold(
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.
     * Changes the threshold of the Safe to `_threshold`.
     * @param _threshold New threshold.
     */
    changeThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns array of owners.
     */
    getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.
     * Removes the owner `owner` from the Safe and updates the threshold to `_threshold`.
     * @param _threshold New threshold.
     * @param owner Owner address to be removed.
     * @param prevOwner Owner that pointed to the owner to be removed in the linked list
     */
    removeOwner(
      prevOwner: string,
      owner: string,
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.
     * Replaces the owner `oldOwner` in the Safe with `newOwner`.
     * @param newOwner New owner address.
     * @param oldOwner Owner address to be replaced.
     * @param prevOwner Owner that pointed to the owner to be replaced in the linked list
     */
    swapOwner(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
