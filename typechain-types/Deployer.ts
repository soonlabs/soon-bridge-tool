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
} from "./common";

export type DeploymentStruct = { name: string; addr: string };

export type DeploymentStructOutput = [string, string] & {
  name: string;
  addr: string;
};

export interface DeployerInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "cfg()": FunctionFragment;
    "get(string)": FunctionFragment;
    "getAddress(string)": FunctionFragment;
    "has(string)": FunctionFragment;
    "loadInitializedSlot(string)": FunctionFragment;
    "mustGetAddress(string)": FunctionFragment;
    "newDeployments()": FunctionFragment;
    "prankDeployment(string,address)": FunctionFragment;
    "save(string,address)": FunctionFragment;
    "setUp()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_SCRIPT"
      | "cfg"
      | "get"
      | "getAddress"
      | "has"
      | "loadInitializedSlot"
      | "mustGetAddress"
      | "newDeployments"
      | "prankDeployment"
      | "save"
      | "setUp"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "cfg", values?: undefined): string;
  encodeFunctionData(functionFragment: "get", values: [string]): string;
  encodeFunctionData(functionFragment: "getAddress", values: [string]): string;
  encodeFunctionData(functionFragment: "has", values: [string]): string;
  encodeFunctionData(
    functionFragment: "loadInitializedSlot",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mustGetAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "newDeployments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prankDeployment",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "save",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cfg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "loadInitializedSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mustGetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newDeployments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "prankDeployment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "save", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;

  events: {};
}

export interface Deployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeployerInterface;

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
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    cfg(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns a deployment that is suitable to be used to interact with contracts.
     * @param _name The name of the deployment.
     */
    get(
      _name: string,
      overrides?: CallOverrides
    ): Promise<[DeploymentStructOutput]>;

    /**
     * Returns the address of a deployment. Also handles the predeploys.
     * @param _name The name of the deployment.
     */
    getAddress(_name: string, overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns whether or not a particular deployment exists.
     * @param _name The name of the deployment.
     */
    has(_name: string, overrides?: CallOverrides): Promise<[boolean]>;

    /**
     * Returns the value of the internal `_initialized` storage slot for a given contract.
     */
    loadInitializedSlot(
      _contractName: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the address of a deployment and reverts if the deployment         does not exist.
     */
    mustGetAddress(_name: string, overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns all of the deployments done in the current context.
     */
    newDeployments(
      overrides?: CallOverrides
    ): Promise<[DeploymentStructOutput[]]>;

    /**
     * Stubs a deployment retrieved through `get`.
     * @param _addr The mock address of the deployment.
     * @param _name The name of the deployment.
     */
    prankDeployment(
      _name: string,
      _addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Appends a deployment to disk as a JSON deploy artifact.
     * @param _deployed The address of the deployment.
     * @param _name The name of the deployment.
     */
    save(
      _name: string,
      _deployed: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Sets up the artifacts contract.
     */
    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  cfg(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns a deployment that is suitable to be used to interact with contracts.
   * @param _name The name of the deployment.
   */
  get(
    _name: string,
    overrides?: CallOverrides
  ): Promise<DeploymentStructOutput>;

  /**
   * Returns the address of a deployment. Also handles the predeploys.
   * @param _name The name of the deployment.
   */
  getAddress(_name: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns whether or not a particular deployment exists.
   * @param _name The name of the deployment.
   */
  has(_name: string, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns the value of the internal `_initialized` storage slot for a given contract.
   */
  loadInitializedSlot(
    _contractName: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the address of a deployment and reverts if the deployment         does not exist.
   */
  mustGetAddress(_name: string, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns all of the deployments done in the current context.
   */
  newDeployments(overrides?: CallOverrides): Promise<DeploymentStructOutput[]>;

  /**
   * Stubs a deployment retrieved through `get`.
   * @param _addr The mock address of the deployment.
   * @param _name The name of the deployment.
   */
  prankDeployment(
    _name: string,
    _addr: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Appends a deployment to disk as a JSON deploy artifact.
   * @param _deployed The address of the deployment.
   * @param _name The name of the deployment.
   */
  save(
    _name: string,
    _deployed: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Sets up the artifacts contract.
   */
  setUp(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    cfg(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns a deployment that is suitable to be used to interact with contracts.
     * @param _name The name of the deployment.
     */
    get(
      _name: string,
      overrides?: CallOverrides
    ): Promise<DeploymentStructOutput>;

    /**
     * Returns the address of a deployment. Also handles the predeploys.
     * @param _name The name of the deployment.
     */
    getAddress(_name: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns whether or not a particular deployment exists.
     * @param _name The name of the deployment.
     */
    has(_name: string, overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns the value of the internal `_initialized` storage slot for a given contract.
     */
    loadInitializedSlot(
      _contractName: string,
      overrides?: CallOverrides
    ): Promise<number>;

    /**
     * Returns the address of a deployment and reverts if the deployment         does not exist.
     */
    mustGetAddress(_name: string, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns all of the deployments done in the current context.
     */
    newDeployments(
      overrides?: CallOverrides
    ): Promise<DeploymentStructOutput[]>;

    /**
     * Stubs a deployment retrieved through `get`.
     * @param _addr The mock address of the deployment.
     * @param _name The name of the deployment.
     */
    prankDeployment(
      _name: string,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Appends a deployment to disk as a JSON deploy artifact.
     * @param _deployed The address of the deployment.
     * @param _name The name of the deployment.
     */
    save(
      _name: string,
      _deployed: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Sets up the artifacts contract.
     */
    setUp(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    cfg(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns a deployment that is suitable to be used to interact with contracts.
     * @param _name The name of the deployment.
     */
    get(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of a deployment. Also handles the predeploys.
     * @param _name The name of the deployment.
     */
    getAddress(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns whether or not a particular deployment exists.
     * @param _name The name of the deployment.
     */
    has(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the value of the internal `_initialized` storage slot for a given contract.
     */
    loadInitializedSlot(
      _contractName: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the address of a deployment and reverts if the deployment         does not exist.
     */
    mustGetAddress(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns all of the deployments done in the current context.
     */
    newDeployments(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Stubs a deployment retrieved through `get`.
     * @param _addr The mock address of the deployment.
     * @param _name The name of the deployment.
     */
    prankDeployment(
      _name: string,
      _addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Appends a deployment to disk as a JSON deploy artifact.
     * @param _deployed The address of the deployment.
     * @param _name The name of the deployment.
     */
    save(
      _name: string,
      _deployed: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Sets up the artifacts contract.
     */
    setUp(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cfg(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns a deployment that is suitable to be used to interact with contracts.
     * @param _name The name of the deployment.
     */
    get(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of a deployment. Also handles the predeploys.
     * @param _name The name of the deployment.
     */
    getAddress(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns whether or not a particular deployment exists.
     * @param _name The name of the deployment.
     */
    has(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the value of the internal `_initialized` storage slot for a given contract.
     */
    loadInitializedSlot(
      _contractName: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of a deployment and reverts if the deployment         does not exist.
     */
    mustGetAddress(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns all of the deployments done in the current context.
     */
    newDeployments(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Stubs a deployment retrieved through `get`.
     * @param _addr The mock address of the deployment.
     * @param _name The name of the deployment.
     */
    prankDeployment(
      _name: string,
      _addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Appends a deployment to disk as a JSON deploy artifact.
     * @param _deployed The address of the deployment.
     * @param _name The name of the deployment.
     */
    save(
      _name: string,
      _deployed: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Sets up the artifacts contract.
     */
    setUp(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
