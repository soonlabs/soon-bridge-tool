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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface RandomClaimActorInterface extends utils.Interface {
  functions: {
    "move(bool,uint256,bytes32,uint64)": FunctionFragment;
    "totalBonded()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "move" | "totalBonded"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "move",
    values: [boolean, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBonded",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBonded",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RandomClaimActor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomClaimActorInterface;

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
    move(
      _isAttack: boolean,
      _parentIndex: BigNumberish,
      _claim: BytesLike,
      _bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    totalBonded(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  move(
    _isAttack: boolean,
    _parentIndex: BigNumberish,
    _claim: BytesLike,
    _bondAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  totalBonded(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    move(
      _isAttack: boolean,
      _parentIndex: BigNumberish,
      _claim: BytesLike,
      _bondAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalBonded(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    move(
      _isAttack: boolean,
      _parentIndex: BigNumberish,
      _claim: BytesLike,
      _bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    totalBonded(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    move(
      _isAttack: boolean,
      _parentIndex: BigNumberish,
      _claim: BytesLike,
      _bondAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    totalBonded(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
