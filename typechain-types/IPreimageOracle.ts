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
} from "./common";

export interface IPreimageOracleInterface extends utils.Interface {
  functions: {
    "challengePeriod()": FunctionFragment;
    "loadBlobPreimagePart(uint256,uint256,bytes,bytes,uint256)": FunctionFragment;
    "loadKeccak256PreimagePart(uint256,bytes)": FunctionFragment;
    "loadLocalData(uint256,bytes32,bytes32,uint256,uint256)": FunctionFragment;
    "loadPrecompilePreimagePart(uint256,address,uint64,bytes)": FunctionFragment;
    "loadSha256PreimagePart(uint256,bytes)": FunctionFragment;
    "readPreimage(bytes32,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "challengePeriod"
      | "loadBlobPreimagePart"
      | "loadKeccak256PreimagePart"
      | "loadLocalData"
      | "loadPrecompilePreimagePart"
      | "loadSha256PreimagePart"
      | "readPreimage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "challengePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "loadBlobPreimagePart",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "loadKeccak256PreimagePart",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "loadLocalData",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "loadPrecompilePreimagePart",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "loadSha256PreimagePart",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "readPreimage",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "challengePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loadBlobPreimagePart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loadKeccak256PreimagePart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loadLocalData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loadPrecompilePreimagePart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "loadSha256PreimagePart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readPreimage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPreimageOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPreimageOracleInterface;

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
     * Returns the length of the large preimage proposal challenge period.
     */
    challengePeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { challengePeriod_: BigNumber }>;

    /**
     * @param _commitment The commitment to the polynomial. 48 bytes, part of the preimage key.
     * @param _partOffset The offset of the preimage to store.
     * @param _proof The KZG proof, part of the preimage key.
     * @param _y Big endian point value. The preimage for the key.
     * @param _z Big endian point value. Part of the preimage key.
     */
    loadBlobPreimagePart(
      _z: BigNumberish,
      _y: BigNumberish,
      _commitment: BytesLike,
      _proof: BytesLike,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Prepares a preimage to be read by keccak256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadKeccak256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * The local data parts are loaded into the preimage oracle under the context      of the caller - no other account can write to the caller's context      specific data.      There are 5 local data identifiers:      ┌────────────┬────────────────────────┐      │ Identifier │      Data              │      ├────────────┼────────────────────────┤      │          1 │ L1 Head Hash (bytes32) │      │          2 │ Output Root (bytes32)  │      │          3 │ Root Claim (bytes32)   │      │          4 │ L2 Block Number (u64)  │      │          5 │ Chain ID (u64)         │      └────────────┴────────────────────────┘
     * Loads of local data part into the preimage oracle.
     * @param _ident The identifier of the local data.
     * @param _localContext The local key context for the preimage oracle. Optionally, can be set as a constant                      if the caller only requires one set of local keys.
     * @param _partOffset The offset of the local data part to write to the oracle.
     * @param _size The number of bytes in `_word` to load.
     * @param _word The local data word.
     */
    loadLocalData(
      _ident: BigNumberish,
      _localContext: BytesLike,
      _word: BytesLike,
      _size: BigNumberish,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Prepares a precompile result to be read by a precompile key for the specified offset.         The precompile result data is a concatenation of the precompile call status byte and its return data.         The preimage key is `6 ++ keccak256(precompile ++ input)[1:]`.
     * @param _input The input to the precompile call.
     * @param _partOffset The offset of the precompile result being loaded.
     * @param _precompile The precompile address
     * @param _requiredGas The gas required to fully execute an L1 precompile.
     */
    loadPrecompilePreimagePart(
      _partOffset: BigNumberish,
      _precompile: string,
      _requiredGas: BigNumberish,
      _input: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Prepares a preimage to be read by sha256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadSha256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Reads a preimage from the oracle.
     * @param _key The key of the preimage to read.
     * @param _offset The offset of the preimage to read.
     */
    readPreimage(
      _key: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { dat_: string; datLen_: BigNumber }>;
  };

  /**
   * Returns the length of the large preimage proposal challenge period.
   */
  challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * @param _commitment The commitment to the polynomial. 48 bytes, part of the preimage key.
   * @param _partOffset The offset of the preimage to store.
   * @param _proof The KZG proof, part of the preimage key.
   * @param _y Big endian point value. The preimage for the key.
   * @param _z Big endian point value. Part of the preimage key.
   */
  loadBlobPreimagePart(
    _z: BigNumberish,
    _y: BigNumberish,
    _commitment: BytesLike,
    _proof: BytesLike,
    _partOffset: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Prepares a preimage to be read by keccak256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
   * @param _partOffset The offset of the preimage to read.
   * @param _preimage The preimage data.
   */
  loadKeccak256PreimagePart(
    _partOffset: BigNumberish,
    _preimage: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * The local data parts are loaded into the preimage oracle under the context      of the caller - no other account can write to the caller's context      specific data.      There are 5 local data identifiers:      ┌────────────┬────────────────────────┐      │ Identifier │      Data              │      ├────────────┼────────────────────────┤      │          1 │ L1 Head Hash (bytes32) │      │          2 │ Output Root (bytes32)  │      │          3 │ Root Claim (bytes32)   │      │          4 │ L2 Block Number (u64)  │      │          5 │ Chain ID (u64)         │      └────────────┴────────────────────────┘
   * Loads of local data part into the preimage oracle.
   * @param _ident The identifier of the local data.
   * @param _localContext The local key context for the preimage oracle. Optionally, can be set as a constant                      if the caller only requires one set of local keys.
   * @param _partOffset The offset of the local data part to write to the oracle.
   * @param _size The number of bytes in `_word` to load.
   * @param _word The local data word.
   */
  loadLocalData(
    _ident: BigNumberish,
    _localContext: BytesLike,
    _word: BytesLike,
    _size: BigNumberish,
    _partOffset: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Prepares a precompile result to be read by a precompile key for the specified offset.         The precompile result data is a concatenation of the precompile call status byte and its return data.         The preimage key is `6 ++ keccak256(precompile ++ input)[1:]`.
   * @param _input The input to the precompile call.
   * @param _partOffset The offset of the precompile result being loaded.
   * @param _precompile The precompile address
   * @param _requiredGas The gas required to fully execute an L1 precompile.
   */
  loadPrecompilePreimagePart(
    _partOffset: BigNumberish,
    _precompile: string,
    _requiredGas: BigNumberish,
    _input: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Prepares a preimage to be read by sha256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
   * @param _partOffset The offset of the preimage to read.
   * @param _preimage The preimage data.
   */
  loadSha256PreimagePart(
    _partOffset: BigNumberish,
    _preimage: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Reads a preimage from the oracle.
   * @param _key The key of the preimage to read.
   * @param _offset The offset of the preimage to read.
   */
  readPreimage(
    _key: BytesLike,
    _offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { dat_: string; datLen_: BigNumber }>;

  callStatic: {
    /**
     * Returns the length of the large preimage proposal challenge period.
     */
    challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * @param _commitment The commitment to the polynomial. 48 bytes, part of the preimage key.
     * @param _partOffset The offset of the preimage to store.
     * @param _proof The KZG proof, part of the preimage key.
     * @param _y Big endian point value. The preimage for the key.
     * @param _z Big endian point value. Part of the preimage key.
     */
    loadBlobPreimagePart(
      _z: BigNumberish,
      _y: BigNumberish,
      _commitment: BytesLike,
      _proof: BytesLike,
      _partOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Prepares a preimage to be read by keccak256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadKeccak256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * The local data parts are loaded into the preimage oracle under the context      of the caller - no other account can write to the caller's context      specific data.      There are 5 local data identifiers:      ┌────────────┬────────────────────────┐      │ Identifier │      Data              │      ├────────────┼────────────────────────┤      │          1 │ L1 Head Hash (bytes32) │      │          2 │ Output Root (bytes32)  │      │          3 │ Root Claim (bytes32)   │      │          4 │ L2 Block Number (u64)  │      │          5 │ Chain ID (u64)         │      └────────────┴────────────────────────┘
     * Loads of local data part into the preimage oracle.
     * @param _ident The identifier of the local data.
     * @param _localContext The local key context for the preimage oracle. Optionally, can be set as a constant                      if the caller only requires one set of local keys.
     * @param _partOffset The offset of the local data part to write to the oracle.
     * @param _size The number of bytes in `_word` to load.
     * @param _word The local data word.
     */
    loadLocalData(
      _ident: BigNumberish,
      _localContext: BytesLike,
      _word: BytesLike,
      _size: BigNumberish,
      _partOffset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Prepares a precompile result to be read by a precompile key for the specified offset.         The precompile result data is a concatenation of the precompile call status byte and its return data.         The preimage key is `6 ++ keccak256(precompile ++ input)[1:]`.
     * @param _input The input to the precompile call.
     * @param _partOffset The offset of the precompile result being loaded.
     * @param _precompile The precompile address
     * @param _requiredGas The gas required to fully execute an L1 precompile.
     */
    loadPrecompilePreimagePart(
      _partOffset: BigNumberish,
      _precompile: string,
      _requiredGas: BigNumberish,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Prepares a preimage to be read by sha256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadSha256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Reads a preimage from the oracle.
     * @param _key The key of the preimage to read.
     * @param _offset The offset of the preimage to read.
     */
    readPreimage(
      _key: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { dat_: string; datLen_: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    /**
     * Returns the length of the large preimage proposal challenge period.
     */
    challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * @param _commitment The commitment to the polynomial. 48 bytes, part of the preimage key.
     * @param _partOffset The offset of the preimage to store.
     * @param _proof The KZG proof, part of the preimage key.
     * @param _y Big endian point value. The preimage for the key.
     * @param _z Big endian point value. Part of the preimage key.
     */
    loadBlobPreimagePart(
      _z: BigNumberish,
      _y: BigNumberish,
      _commitment: BytesLike,
      _proof: BytesLike,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Prepares a preimage to be read by keccak256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadKeccak256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * The local data parts are loaded into the preimage oracle under the context      of the caller - no other account can write to the caller's context      specific data.      There are 5 local data identifiers:      ┌────────────┬────────────────────────┐      │ Identifier │      Data              │      ├────────────┼────────────────────────┤      │          1 │ L1 Head Hash (bytes32) │      │          2 │ Output Root (bytes32)  │      │          3 │ Root Claim (bytes32)   │      │          4 │ L2 Block Number (u64)  │      │          5 │ Chain ID (u64)         │      └────────────┴────────────────────────┘
     * Loads of local data part into the preimage oracle.
     * @param _ident The identifier of the local data.
     * @param _localContext The local key context for the preimage oracle. Optionally, can be set as a constant                      if the caller only requires one set of local keys.
     * @param _partOffset The offset of the local data part to write to the oracle.
     * @param _size The number of bytes in `_word` to load.
     * @param _word The local data word.
     */
    loadLocalData(
      _ident: BigNumberish,
      _localContext: BytesLike,
      _word: BytesLike,
      _size: BigNumberish,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Prepares a precompile result to be read by a precompile key for the specified offset.         The precompile result data is a concatenation of the precompile call status byte and its return data.         The preimage key is `6 ++ keccak256(precompile ++ input)[1:]`.
     * @param _input The input to the precompile call.
     * @param _partOffset The offset of the precompile result being loaded.
     * @param _precompile The precompile address
     * @param _requiredGas The gas required to fully execute an L1 precompile.
     */
    loadPrecompilePreimagePart(
      _partOffset: BigNumberish,
      _precompile: string,
      _requiredGas: BigNumberish,
      _input: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Prepares a preimage to be read by sha256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadSha256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Reads a preimage from the oracle.
     * @param _key The key of the preimage to read.
     * @param _offset The offset of the preimage to read.
     */
    readPreimage(
      _key: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Returns the length of the large preimage proposal challenge period.
     */
    challengePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * @param _commitment The commitment to the polynomial. 48 bytes, part of the preimage key.
     * @param _partOffset The offset of the preimage to store.
     * @param _proof The KZG proof, part of the preimage key.
     * @param _y Big endian point value. The preimage for the key.
     * @param _z Big endian point value. Part of the preimage key.
     */
    loadBlobPreimagePart(
      _z: BigNumberish,
      _y: BigNumberish,
      _commitment: BytesLike,
      _proof: BytesLike,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Prepares a preimage to be read by keccak256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadKeccak256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * The local data parts are loaded into the preimage oracle under the context      of the caller - no other account can write to the caller's context      specific data.      There are 5 local data identifiers:      ┌────────────┬────────────────────────┐      │ Identifier │      Data              │      ├────────────┼────────────────────────┤      │          1 │ L1 Head Hash (bytes32) │      │          2 │ Output Root (bytes32)  │      │          3 │ Root Claim (bytes32)   │      │          4 │ L2 Block Number (u64)  │      │          5 │ Chain ID (u64)         │      └────────────┴────────────────────────┘
     * Loads of local data part into the preimage oracle.
     * @param _ident The identifier of the local data.
     * @param _localContext The local key context for the preimage oracle. Optionally, can be set as a constant                      if the caller only requires one set of local keys.
     * @param _partOffset The offset of the local data part to write to the oracle.
     * @param _size The number of bytes in `_word` to load.
     * @param _word The local data word.
     */
    loadLocalData(
      _ident: BigNumberish,
      _localContext: BytesLike,
      _word: BytesLike,
      _size: BigNumberish,
      _partOffset: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Prepares a precompile result to be read by a precompile key for the specified offset.         The precompile result data is a concatenation of the precompile call status byte and its return data.         The preimage key is `6 ++ keccak256(precompile ++ input)[1:]`.
     * @param _input The input to the precompile call.
     * @param _partOffset The offset of the precompile result being loaded.
     * @param _precompile The precompile address
     * @param _requiredGas The gas required to fully execute an L1 precompile.
     */
    loadPrecompilePreimagePart(
      _partOffset: BigNumberish,
      _precompile: string,
      _requiredGas: BigNumberish,
      _input: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Prepares a preimage to be read by sha256 key, starting at the given offset and up to 32 bytes         (clipped at preimage length, if out of data).
     * @param _partOffset The offset of the preimage to read.
     * @param _preimage The preimage data.
     */
    loadSha256PreimagePart(
      _partOffset: BigNumberish,
      _preimage: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Reads a preimage from the oracle.
     * @param _key The key of the preimage to read.
     * @param _offset The offset of the preimage to read.
     */
    readPreimage(
      _key: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
