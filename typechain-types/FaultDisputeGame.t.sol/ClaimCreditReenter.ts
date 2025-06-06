/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ClaimCreditReenterInterface extends utils.Interface {
  functions: {
    "claimCredit(address)": FunctionFragment;
    "numCalls()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "claimCredit" | "numCalls"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "claimCredit", values: [string]): string;
  encodeFunctionData(functionFragment: "numCalls", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numCalls", data: BytesLike): Result;

  events: {};
}

export interface ClaimCreditReenter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClaimCreditReenterInterface;

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
    claimCredit(
      _recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    numCalls(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  claimCredit(
    _recipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  numCalls(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    claimCredit(_recipient: string, overrides?: CallOverrides): Promise<void>;

    numCalls(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    claimCredit(
      _recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    numCalls(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimCredit(
      _recipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    numCalls(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
