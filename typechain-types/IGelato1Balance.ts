/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface IGelato1BalanceInterface extends utils.Interface {
  functions: {};

  events: {
    "LogUseGelato1Balance(address,address,address,uint256,uint256,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogUseGelato1Balance"): EventFragment;
}

export interface LogUseGelato1BalanceEventObject {
  sponsor: string;
  target: string;
  feeToken: string;
  oneBalanceChainId: BigNumber;
  nativeToFeeTokenXRateNumerator: BigNumber;
  nativeToFeeTokenXRateDenominator: BigNumber;
  correlationId: string;
}
export type LogUseGelato1BalanceEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, string],
  LogUseGelato1BalanceEventObject
>;

export type LogUseGelato1BalanceEventFilter =
  TypedEventFilter<LogUseGelato1BalanceEvent>;

export interface IGelato1Balance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGelato1BalanceInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "LogUseGelato1Balance(address,address,address,uint256,uint256,uint256,bytes32)"(
      sponsor?: string | null,
      target?: string | null,
      feeToken?: string | null,
      oneBalanceChainId?: null,
      nativeToFeeTokenXRateNumerator?: null,
      nativeToFeeTokenXRateDenominator?: null,
      correlationId?: null
    ): LogUseGelato1BalanceEventFilter;
    LogUseGelato1Balance(
      sponsor?: string | null,
      target?: string | null,
      feeToken?: string | null,
      oneBalanceChainId?: null,
      nativeToFeeTokenXRateNumerator?: null,
      nativeToFeeTokenXRateDenominator?: null,
      correlationId?: null
    ): LogUseGelato1BalanceEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
