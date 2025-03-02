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

export interface ClasherInterface extends utils.Interface {
  functions: {
    "upgradeTo(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "upgradeTo"): FunctionFragment;

  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;

  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;

  events: {};
}

export interface Clasher extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClasherInterface;

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
    upgradeTo(arg0: string, overrides?: CallOverrides): Promise<[void]>;
  };

  upgradeTo(arg0: string, overrides?: CallOverrides): Promise<void>;

  callStatic: {
    upgradeTo(arg0: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    upgradeTo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    upgradeTo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
