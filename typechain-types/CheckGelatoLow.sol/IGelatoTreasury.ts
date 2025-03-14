/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface IGelatoTreasuryInterface extends utils.Interface {
  functions: {
    "totalDepositedAmount(address,address)": FunctionFragment;
    "totalWithdrawnAmount(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "totalDepositedAmount" | "totalWithdrawnAmount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "totalDepositedAmount",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalWithdrawnAmount",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "totalDepositedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalWithdrawnAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGelatoTreasury extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGelatoTreasuryInterface;

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
    totalDepositedAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalWithdrawnAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  totalDepositedAmount(
    _user: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalWithdrawnAmount(
    _user: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    totalDepositedAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalWithdrawnAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    totalDepositedAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalWithdrawnAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    totalDepositedAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalWithdrawnAmount(
      _user: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
