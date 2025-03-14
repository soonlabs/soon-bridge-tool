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

export interface Hash_CrossDomainHasherInterface extends utils.Interface {
  functions: {
    "failedCrossDomainHashV1()": FunctionFragment;
    "failedCrossDomainHashWrongVersion()": FunctionFragment;
    "hashCrossDomainMessageV1(uint240,bytes32,address,uint256,uint256,bytes)": FunctionFragment;
    "hashCrossDomainMessageWrongVersion(uint16,uint240,bytes32,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "failedCrossDomainHashV1"
      | "failedCrossDomainHashWrongVersion"
      | "hashCrossDomainMessageV1"
      | "hashCrossDomainMessageWrongVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "failedCrossDomainHashV1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedCrossDomainHashWrongVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashCrossDomainMessageV1",
    values: [
      BigNumberish,
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashCrossDomainMessageWrongVersion",
    values: [
      BigNumberish,
      BigNumberish,
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "failedCrossDomainHashV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedCrossDomainHashWrongVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashCrossDomainMessageV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashCrossDomainMessageWrongVersion",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Hash_CrossDomainHasher extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Hash_CrossDomainHasherInterface;

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
    failedCrossDomainHashV1(overrides?: CallOverrides): Promise<[boolean]>;

    failedCrossDomainHashWrongVersion(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Takes the necessary parameters to perform a cross domain hash using the v1 schema         and compares the output of a call to the unversioned function to the v1 function         directly.
     */
    hashCrossDomainMessageV1(
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Takes the necessary parameters to perform a cross domain hash with a randomly         generated version. Only schema versions 0 and 1 are supported and all others         should revert.
     */
    hashCrossDomainMessageWrongVersion(
      _version: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  failedCrossDomainHashV1(overrides?: CallOverrides): Promise<boolean>;

  failedCrossDomainHashWrongVersion(
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Takes the necessary parameters to perform a cross domain hash using the v1 schema         and compares the output of a call to the unversioned function to the v1 function         directly.
   */
  hashCrossDomainMessageV1(
    _nonce: BigNumberish,
    _sender: BytesLike,
    _target: string,
    _value: BigNumberish,
    _gasLimit: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Takes the necessary parameters to perform a cross domain hash with a randomly         generated version. Only schema versions 0 and 1 are supported and all others         should revert.
   */
  hashCrossDomainMessageWrongVersion(
    _version: BigNumberish,
    _nonce: BigNumberish,
    _sender: BytesLike,
    _target: string,
    _value: BigNumberish,
    _gasLimit: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    failedCrossDomainHashV1(overrides?: CallOverrides): Promise<boolean>;

    failedCrossDomainHashWrongVersion(
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Takes the necessary parameters to perform a cross domain hash using the v1 schema         and compares the output of a call to the unversioned function to the v1 function         directly.
     */
    hashCrossDomainMessageV1(
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Takes the necessary parameters to perform a cross domain hash with a randomly         generated version. Only schema versions 0 and 1 are supported and all others         should revert.
     */
    hashCrossDomainMessageWrongVersion(
      _version: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    failedCrossDomainHashV1(overrides?: CallOverrides): Promise<BigNumber>;

    failedCrossDomainHashWrongVersion(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Takes the necessary parameters to perform a cross domain hash using the v1 schema         and compares the output of a call to the unversioned function to the v1 function         directly.
     */
    hashCrossDomainMessageV1(
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Takes the necessary parameters to perform a cross domain hash with a randomly         generated version. Only schema versions 0 and 1 are supported and all others         should revert.
     */
    hashCrossDomainMessageWrongVersion(
      _version: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    failedCrossDomainHashV1(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failedCrossDomainHashWrongVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Takes the necessary parameters to perform a cross domain hash using the v1 schema         and compares the output of a call to the unversioned function to the v1 function         directly.
     */
    hashCrossDomainMessageV1(
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Takes the necessary parameters to perform a cross domain hash with a randomly         generated version. Only schema versions 0 and 1 are supported and all others         should revert.
     */
    hashCrossDomainMessageWrongVersion(
      _version: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _target: string,
      _value: BigNumberish,
      _gasLimit: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
