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
  PayableOverrides,
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

export interface DelayedWETHInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "config()": FunctionFragment;
    "decimals()": FunctionFragment;
    "delay()": FunctionFragment;
    "deposit()": FunctionFragment;
    "hold(address,uint256)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "recover(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlock(address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawals(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "approve"
      | "balanceOf"
      | "config"
      | "decimals"
      | "delay"
      | "deposit"
      | "hold"
      | "initialize"
      | "name"
      | "owner"
      | "recover"
      | "renounceOwnership"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferOwnership"
      | "unlock"
      | "version"
      | "withdraw(uint256)"
      | "withdraw(address,uint256)"
      | "withdrawals"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hold",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawals",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hold", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawals",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Unwrap(address,uint256)": EventFragment;
    "Withdrawal(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unwrap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export interface ApprovalEventObject {
  src: string;
  guy: string;
  wad: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface DepositEventObject {
  dst: string;
  wad: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

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

export interface TransferEventObject {
  src: string;
  dst: string;
  wad: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UnwrapEventObject {
  src: string;
  wad: BigNumber;
}
export type UnwrapEvent = TypedEvent<[string, BigNumber], UnwrapEventObject>;

export type UnwrapEventFilter = TypedEventFilter<UnwrapEvent>;

export interface WithdrawalEventObject {
  src: string;
  wad: BigNumber;
}
export type WithdrawalEvent = TypedEvent<
  [string, BigNumber],
  WithdrawalEventObject
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface DelayedWETH extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DelayedWETHInterface;

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
     * Returns the amount of WETH that the spender can transfer on behalf of the owner.
     */
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Approves the given address to transfer the WETH on behalf of the caller.
     * @param guy The address that is approved to transfer the WETH.
     * @param wad The amount that is approved to transfer.
     */
    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the balance of the given address.
     */
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Address of the SuperchainConfig contract.
     */
    config(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the number of decimals the token uses.
     */
    decimals(overrides?: CallOverrides): Promise<[number]>;

    /**
     * Returns the withdrawal delay in seconds.
     */
    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Allows WETH to be deposited by sending ether to the contract.
     */
    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows the owner to recover from error cases by pulling ETH from a specific owner.
     * @param _guy The address to recover the WETH from.
     * @param _wad The amount of WETH to recover.
     */
    hold(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Initializes the contract.
     * @param _config Address of the SuperchainConfig contract.
     * @param _owner The address of the owner.
     */
    initialize(
      _owner: string,
      _config: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Allows the owner to recover from error cases by pulling ETH out of the contract.
     * @param _wad The amount of WETH to recover.
     */
    recover(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the symbol of the token.
     */
    symbol(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the total supply of WETH.
     */
    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Transfers the given amount of WETH to the given address.
     * @param dst The address to transfer the WETH to.
     * @param wad The amount of WETH to transfer.
     */
    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Transfers the given amount of WETH from the given address to the given address.
     * @param dst The address to transfer the WETH to.
     * @param src The address to transfer the WETH from.
     * @param wad The amount of WETH to transfer.
     */
    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
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
     * Unlocks withdrawals for the sender's account, after a time delay.
     * @param _guy Sub-account to unlock.
     * @param _wad The amount of WETH to unlock.
     */
    unlock(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Withdraws an amount of ETH.
     * @param wad The amount of ETH to withdraw.
     */
    "withdraw(uint256)"(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Extension to withdrawal, must provide a sub-account to withdraw from.
     * @param _guy Sub-account to withdraw from.
     * @param _wad The amount of WETH to withdraw.
     */
    "withdraw(address,uint256)"(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns a withdrawal request for the given address.
     */
    withdrawals(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
    >;
  };

  /**
   * Returns the amount of WETH that the spender can transfer on behalf of the owner.
   */
  allowance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Approves the given address to transfer the WETH on behalf of the caller.
   * @param guy The address that is approved to transfer the WETH.
   * @param wad The amount that is approved to transfer.
   */
  approve(
    guy: string,
    wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the balance of the given address.
   */
  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Address of the SuperchainConfig contract.
   */
  config(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the number of decimals the token uses.
   */
  decimals(overrides?: CallOverrides): Promise<number>;

  /**
   * Returns the withdrawal delay in seconds.
   */
  delay(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Allows WETH to be deposited by sending ether to the contract.
   */
  deposit(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows the owner to recover from error cases by pulling ETH from a specific owner.
   * @param _guy The address to recover the WETH from.
   * @param _wad The amount of WETH to recover.
   */
  hold(
    _guy: string,
    _wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Initializes the contract.
   * @param _config Address of the SuperchainConfig contract.
   * @param _owner The address of the owner.
   */
  initialize(
    _owner: string,
    _config: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the name of the token.
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Allows the owner to recover from error cases by pulling ETH out of the contract.
   * @param _wad The amount of WETH to recover.
   */
  recover(
    _wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the symbol of the token.
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the total supply of WETH.
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Transfers the given amount of WETH to the given address.
   * @param dst The address to transfer the WETH to.
   * @param wad The amount of WETH to transfer.
   */
  transfer(
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Transfers the given amount of WETH from the given address to the given address.
   * @param dst The address to transfer the WETH to.
   * @param src The address to transfer the WETH from.
   * @param wad The amount of WETH to transfer.
   */
  transferFrom(
    src: string,
    dst: string,
    wad: BigNumberish,
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
   * Unlocks withdrawals for the sender's account, after a time delay.
   * @param _guy Sub-account to unlock.
   * @param _wad The amount of WETH to unlock.
   */
  unlock(
    _guy: string,
    _wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Semantic version.
   */
  version(overrides?: CallOverrides): Promise<string>;

  /**
   * Withdraws an amount of ETH.
   * @param wad The amount of ETH to withdraw.
   */
  "withdraw(uint256)"(
    _wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Extension to withdrawal, must provide a sub-account to withdraw from.
   * @param _guy Sub-account to withdraw from.
   * @param _wad The amount of WETH to withdraw.
   */
  "withdraw(address,uint256)"(
    _guy: string,
    _wad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns a withdrawal request for the given address.
   */
  withdrawals(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
  >;

  callStatic: {
    /**
     * Returns the amount of WETH that the spender can transfer on behalf of the owner.
     */
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Approves the given address to transfer the WETH on behalf of the caller.
     * @param guy The address that is approved to transfer the WETH.
     * @param wad The amount that is approved to transfer.
     */
    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the balance of the given address.
     */
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Address of the SuperchainConfig contract.
     */
    config(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the number of decimals the token uses.
     */
    decimals(overrides?: CallOverrides): Promise<number>;

    /**
     * Returns the withdrawal delay in seconds.
     */
    delay(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows WETH to be deposited by sending ether to the contract.
     */
    deposit(overrides?: CallOverrides): Promise<void>;

    /**
     * Allows the owner to recover from error cases by pulling ETH from a specific owner.
     * @param _guy The address to recover the WETH from.
     * @param _wad The amount of WETH to recover.
     */
    hold(
      _guy: string,
      _wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Initializes the contract.
     * @param _config Address of the SuperchainConfig contract.
     * @param _owner The address of the owner.
     */
    initialize(
      _owner: string,
      _config: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Allows the owner to recover from error cases by pulling ETH out of the contract.
     * @param _wad The amount of WETH to recover.
     */
    recover(_wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Returns the symbol of the token.
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the total supply of WETH.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers the given amount of WETH to the given address.
     * @param dst The address to transfer the WETH to.
     * @param wad The amount of WETH to transfer.
     */
    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Transfers the given amount of WETH from the given address to the given address.
     * @param dst The address to transfer the WETH to.
     * @param src The address to transfer the WETH from.
     * @param wad The amount of WETH to transfer.
     */
    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Unlocks withdrawals for the sender's account, after a time delay.
     * @param _guy Sub-account to unlock.
     * @param _wad The amount of WETH to unlock.
     */
    unlock(
      _guy: string,
      _wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<string>;

    /**
     * Withdraws an amount of ETH.
     * @param wad The amount of ETH to withdraw.
     */
    "withdraw(uint256)"(
      _wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Extension to withdrawal, must provide a sub-account to withdraw from.
     * @param _guy Sub-account to withdraw from.
     * @param _wad The amount of WETH to withdraw.
     */
    "withdraw(address,uint256)"(
      _guy: string,
      _wad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns a withdrawal request for the given address.
     */
    withdrawals(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; timestamp: BigNumber }
    >;
  };

  filters: {
    "Approval(address,address,uint256)"(
      src?: string | null,
      guy?: string | null,
      wad?: null
    ): ApprovalEventFilter;
    Approval(
      src?: string | null,
      guy?: string | null,
      wad?: null
    ): ApprovalEventFilter;

    "Deposit(address,uint256)"(
      dst?: string | null,
      wad?: null
    ): DepositEventFilter;
    Deposit(dst?: string | null, wad?: null): DepositEventFilter;

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

    "Transfer(address,address,uint256)"(
      src?: string | null,
      dst?: string | null,
      wad?: null
    ): TransferEventFilter;
    Transfer(
      src?: string | null,
      dst?: string | null,
      wad?: null
    ): TransferEventFilter;

    "Unwrap(address,uint256)"(
      src?: string | null,
      wad?: null
    ): UnwrapEventFilter;
    Unwrap(src?: string | null, wad?: null): UnwrapEventFilter;

    "Withdrawal(address,uint256)"(
      src?: string | null,
      wad?: null
    ): WithdrawalEventFilter;
    Withdrawal(src?: string | null, wad?: null): WithdrawalEventFilter;
  };

  estimateGas: {
    /**
     * Returns the amount of WETH that the spender can transfer on behalf of the owner.
     */
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Approves the given address to transfer the WETH on behalf of the caller.
     * @param guy The address that is approved to transfer the WETH.
     * @param wad The amount that is approved to transfer.
     */
    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the balance of the given address.
     */
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Address of the SuperchainConfig contract.
     */
    config(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the number of decimals the token uses.
     */
    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the withdrawal delay in seconds.
     */
    delay(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows WETH to be deposited by sending ether to the contract.
     */
    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows the owner to recover from error cases by pulling ETH from a specific owner.
     * @param _guy The address to recover the WETH from.
     * @param _wad The amount of WETH to recover.
     */
    hold(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Initializes the contract.
     * @param _config Address of the SuperchainConfig contract.
     * @param _owner The address of the owner.
     */
    initialize(
      _owner: string,
      _config: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows the owner to recover from error cases by pulling ETH out of the contract.
     * @param _wad The amount of WETH to recover.
     */
    recover(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the symbol of the token.
     */
    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the total supply of WETH.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers the given amount of WETH to the given address.
     * @param dst The address to transfer the WETH to.
     * @param wad The amount of WETH to transfer.
     */
    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Transfers the given amount of WETH from the given address to the given address.
     * @param dst The address to transfer the WETH to.
     * @param src The address to transfer the WETH from.
     * @param wad The amount of WETH to transfer.
     */
    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
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
     * Unlocks withdrawals for the sender's account, after a time delay.
     * @param _guy Sub-account to unlock.
     * @param _wad The amount of WETH to unlock.
     */
    unlock(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Withdraws an amount of ETH.
     * @param wad The amount of ETH to withdraw.
     */
    "withdraw(uint256)"(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Extension to withdrawal, must provide a sub-account to withdraw from.
     * @param _guy Sub-account to withdraw from.
     * @param _wad The amount of WETH to withdraw.
     */
    "withdraw(address,uint256)"(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns a withdrawal request for the given address.
     */
    withdrawals(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the amount of WETH that the spender can transfer on behalf of the owner.
     */
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Approves the given address to transfer the WETH on behalf of the caller.
     * @param guy The address that is approved to transfer the WETH.
     * @param wad The amount that is approved to transfer.
     */
    approve(
      guy: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the balance of the given address.
     */
    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Address of the SuperchainConfig contract.
     */
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the number of decimals the token uses.
     */
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the withdrawal delay in seconds.
     */
    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Allows WETH to be deposited by sending ether to the contract.
     */
    deposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows the owner to recover from error cases by pulling ETH from a specific owner.
     * @param _guy The address to recover the WETH from.
     * @param _wad The amount of WETH to recover.
     */
    hold(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Initializes the contract.
     * @param _config Address of the SuperchainConfig contract.
     * @param _owner The address of the owner.
     */
    initialize(
      _owner: string,
      _config: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Allows the owner to recover from error cases by pulling ETH out of the contract.
     * @param _wad The amount of WETH to recover.
     */
    recover(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the symbol of the token.
     */
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the total supply of WETH.
     */
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers the given amount of WETH to the given address.
     * @param dst The address to transfer the WETH to.
     * @param wad The amount of WETH to transfer.
     */
    transfer(
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers the given amount of WETH from the given address to the given address.
     * @param dst The address to transfer the WETH to.
     * @param src The address to transfer the WETH from.
     * @param wad The amount of WETH to transfer.
     */
    transferFrom(
      src: string,
      dst: string,
      wad: BigNumberish,
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
     * Unlocks withdrawals for the sender's account, after a time delay.
     * @param _guy Sub-account to unlock.
     * @param _wad The amount of WETH to unlock.
     */
    unlock(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Withdraws an amount of ETH.
     * @param wad The amount of ETH to withdraw.
     */
    "withdraw(uint256)"(
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Extension to withdrawal, must provide a sub-account to withdraw from.
     * @param _guy Sub-account to withdraw from.
     * @param _wad The amount of WETH to withdraw.
     */
    "withdraw(address,uint256)"(
      _guy: string,
      _wad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns a withdrawal request for the given address.
     */
    withdrawals(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
