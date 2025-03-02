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

export interface GnosisSafeProxyFactoryInterface extends utils.Interface {
  functions: {
    "calculateCreateProxyWithNonceAddress(address,bytes,uint256)": FunctionFragment;
    "createProxy(address,bytes)": FunctionFragment;
    "createProxyWithCallback(address,bytes,uint256,address)": FunctionFragment;
    "createProxyWithNonce(address,bytes,uint256)": FunctionFragment;
    "proxyCreationCode()": FunctionFragment;
    "proxyRuntimeCode()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculateCreateProxyWithNonceAddress"
      | "createProxy"
      | "createProxyWithCallback"
      | "createProxyWithNonce"
      | "proxyCreationCode"
      | "proxyRuntimeCode"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxy",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithCallback",
    values: [string, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyWithNonce",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyCreationCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyRuntimeCode",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateCreateProxyWithNonceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyWithNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyCreationCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyRuntimeCode",
    data: BytesLike
  ): Result;

  events: {
    "ProxyCreation(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProxyCreation"): EventFragment;
}

export interface ProxyCreationEventObject {
  proxy: string;
  singleton: string;
}
export type ProxyCreationEvent = TypedEvent<
  [string, string],
  ProxyCreationEventObject
>;

export type ProxyCreationEventFilter = TypedEventFilter<ProxyCreationEvent>;

export interface GnosisSafeProxyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GnosisSafeProxyFactoryInterface;

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
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`      This method is only meant for address calculation purpose when you use an initializer that would revert,      therefore the response is returned with a revert. When calling this method set `from` to the address of the proxy factory.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param data Payload for message call sent to new proxy contract.
     * @param singleton Address of singleton contract.
     */
    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to create new proxy contact, execute a message call to the new proxy and call a specified callback within one transaction
     * @param _singleton Address of singleton contract.
     * @param callback Callback that will be invoced after the new proxy contract has been successfully deployed and initialized.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     */
    proxyCreationCode(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     */
    proxyRuntimeCode(overrides?: CallOverrides): Promise<[string]>;
  };

  /**
   * Allows to get the address for a new proxy contact created via `createProxyWithNonce`      This method is only meant for address calculation purpose when you use an initializer that would revert,      therefore the response is returned with a revert. When calling this method set `from` to the address of the proxy factory.
   * @param _singleton Address of singleton contract.
   * @param initializer Payload for message call sent to new proxy contract.
   * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
   */
  calculateCreateProxyWithNonceAddress(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
   * @param data Payload for message call sent to new proxy contract.
   * @param singleton Address of singleton contract.
   */
  createProxy(
    singleton: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to create new proxy contact, execute a message call to the new proxy and call a specified callback within one transaction
   * @param _singleton Address of singleton contract.
   * @param callback Callback that will be invoced after the new proxy contract has been successfully deployed and initialized.
   * @param initializer Payload for message call sent to new proxy contract.
   * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
   */
  createProxyWithCallback(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    callback: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
   * @param _singleton Address of singleton contract.
   * @param initializer Payload for message call sent to new proxy contract.
   * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
   */
  createProxyWithNonce(
    _singleton: string,
    initializer: BytesLike,
    saltNonce: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
   */
  proxyCreationCode(overrides?: CallOverrides): Promise<string>;

  /**
   * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
   */
  proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`      This method is only meant for address calculation purpose when you use an initializer that would revert,      therefore the response is returned with a revert. When calling this method set `from` to the address of the proxy factory.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param data Payload for message call sent to new proxy contract.
     * @param singleton Address of singleton contract.
     */
    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Allows to create new proxy contact, execute a message call to the new proxy and call a specified callback within one transaction
     * @param _singleton Address of singleton contract.
     * @param callback Callback that will be invoced after the new proxy contract has been successfully deployed and initialized.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     */
    proxyCreationCode(overrides?: CallOverrides): Promise<string>;

    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     */
    proxyRuntimeCode(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ProxyCreation(address,address)"(
      proxy?: null,
      singleton?: null
    ): ProxyCreationEventFilter;
    ProxyCreation(proxy?: null, singleton?: null): ProxyCreationEventFilter;
  };

  estimateGas: {
    /**
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`      This method is only meant for address calculation purpose when you use an initializer that would revert,      therefore the response is returned with a revert. When calling this method set `from` to the address of the proxy factory.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param data Payload for message call sent to new proxy contract.
     * @param singleton Address of singleton contract.
     */
    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to create new proxy contact, execute a message call to the new proxy and call a specified callback within one transaction
     * @param _singleton Address of singleton contract.
     * @param callback Callback that will be invoced after the new proxy contract has been successfully deployed and initialized.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     */
    proxyCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     */
    proxyRuntimeCode(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Allows to get the address for a new proxy contact created via `createProxyWithNonce`      This method is only meant for address calculation purpose when you use an initializer that would revert,      therefore the response is returned with a revert. When calling this method set `from` to the address of the proxy factory.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    calculateCreateProxyWithNonceAddress(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param data Payload for message call sent to new proxy contract.
     * @param singleton Address of singleton contract.
     */
    createProxy(
      singleton: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to create new proxy contact, execute a message call to the new proxy and call a specified callback within one transaction
     * @param _singleton Address of singleton contract.
     * @param callback Callback that will be invoced after the new proxy contract has been successfully deployed and initialized.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithCallback(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      callback: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to create new proxy contact and execute a message call to the new proxy within one transaction.
     * @param _singleton Address of singleton contract.
     * @param initializer Payload for message call sent to new proxy contract.
     * @param saltNonce Nonce that will be used to generate the salt to calculate the address of the new proxy contract.
     */
    createProxyWithNonce(
      _singleton: string,
      initializer: BytesLike,
      saltNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Allows to retrieve the creation code used for the Proxy deployment. With this it is easily possible to calculate predicted address.
     */
    proxyCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Allows to retrieve the runtime code of a deployed Proxy. This can be used to check that the expected Proxy was deployed.
     */
    proxyRuntimeCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
