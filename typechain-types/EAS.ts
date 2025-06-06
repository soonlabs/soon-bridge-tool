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

export type AttestationRequestDataStruct = {
  recipient: string;
  expirationTime: BigNumberish;
  revocable: boolean;
  refUID: BytesLike;
  data: BytesLike;
  value: BigNumberish;
};

export type AttestationRequestDataStructOutput = [
  string,
  BigNumber,
  boolean,
  string,
  string,
  BigNumber
] & {
  recipient: string;
  expirationTime: BigNumber;
  revocable: boolean;
  refUID: string;
  data: string;
  value: BigNumber;
};

export type AttestationRequestStruct = {
  schema: BytesLike;
  data: AttestationRequestDataStruct;
};

export type AttestationRequestStructOutput = [
  string,
  AttestationRequestDataStructOutput
] & { schema: string; data: AttestationRequestDataStructOutput };

export type SignatureStruct = { v: BigNumberish; r: BytesLike; s: BytesLike };

export type SignatureStructOutput = [number, string, string] & {
  v: number;
  r: string;
  s: string;
};

export type DelegatedAttestationRequestStruct = {
  schema: BytesLike;
  data: AttestationRequestDataStruct;
  signature: SignatureStruct;
  attester: string;
  deadline: BigNumberish;
};

export type DelegatedAttestationRequestStructOutput = [
  string,
  AttestationRequestDataStructOutput,
  SignatureStructOutput,
  string,
  BigNumber
] & {
  schema: string;
  data: AttestationRequestDataStructOutput;
  signature: SignatureStructOutput;
  attester: string;
  deadline: BigNumber;
};

export type AttestationStruct = {
  uid: BytesLike;
  schema: BytesLike;
  time: BigNumberish;
  expirationTime: BigNumberish;
  revocationTime: BigNumberish;
  refUID: BytesLike;
  recipient: string;
  attester: string;
  revocable: boolean;
  data: BytesLike;
};

export type AttestationStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  string,
  boolean,
  string
] & {
  uid: string;
  schema: string;
  time: BigNumber;
  expirationTime: BigNumber;
  revocationTime: BigNumber;
  refUID: string;
  recipient: string;
  attester: string;
  revocable: boolean;
  data: string;
};

export type MultiAttestationRequestStruct = {
  schema: BytesLike;
  data: AttestationRequestDataStruct[];
};

export type MultiAttestationRequestStructOutput = [
  string,
  AttestationRequestDataStructOutput[]
] & { schema: string; data: AttestationRequestDataStructOutput[] };

export type MultiDelegatedAttestationRequestStruct = {
  schema: BytesLike;
  data: AttestationRequestDataStruct[];
  signatures: SignatureStruct[];
  attester: string;
  deadline: BigNumberish;
};

export type MultiDelegatedAttestationRequestStructOutput = [
  string,
  AttestationRequestDataStructOutput[],
  SignatureStructOutput[],
  string,
  BigNumber
] & {
  schema: string;
  data: AttestationRequestDataStructOutput[];
  signatures: SignatureStructOutput[];
  attester: string;
  deadline: BigNumber;
};

export type RevocationRequestDataStruct = {
  uid: BytesLike;
  value: BigNumberish;
};

export type RevocationRequestDataStructOutput = [string, BigNumber] & {
  uid: string;
  value: BigNumber;
};

export type MultiRevocationRequestStruct = {
  schema: BytesLike;
  data: RevocationRequestDataStruct[];
};

export type MultiRevocationRequestStructOutput = [
  string,
  RevocationRequestDataStructOutput[]
] & { schema: string; data: RevocationRequestDataStructOutput[] };

export type MultiDelegatedRevocationRequestStruct = {
  schema: BytesLike;
  data: RevocationRequestDataStruct[];
  signatures: SignatureStruct[];
  revoker: string;
  deadline: BigNumberish;
};

export type MultiDelegatedRevocationRequestStructOutput = [
  string,
  RevocationRequestDataStructOutput[],
  SignatureStructOutput[],
  string,
  BigNumber
] & {
  schema: string;
  data: RevocationRequestDataStructOutput[];
  signatures: SignatureStructOutput[];
  revoker: string;
  deadline: BigNumber;
};

export type RevocationRequestStruct = {
  schema: BytesLike;
  data: RevocationRequestDataStruct;
};

export type RevocationRequestStructOutput = [
  string,
  RevocationRequestDataStructOutput
] & { schema: string; data: RevocationRequestDataStructOutput };

export type DelegatedRevocationRequestStruct = {
  schema: BytesLike;
  data: RevocationRequestDataStruct;
  signature: SignatureStruct;
  revoker: string;
  deadline: BigNumberish;
};

export type DelegatedRevocationRequestStructOutput = [
  string,
  RevocationRequestDataStructOutput,
  SignatureStructOutput,
  string,
  BigNumber
] & {
  schema: string;
  data: RevocationRequestDataStructOutput;
  signature: SignatureStructOutput;
  revoker: string;
  deadline: BigNumber;
};

export interface EASInterface extends utils.Interface {
  functions: {
    "attest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)))": FunctionFragment;
    "attestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256),(uint8,bytes32,bytes32),address,uint64))": FunctionFragment;
    "getAttestTypeHash()": FunctionFragment;
    "getAttestation(bytes32)": FunctionFragment;
    "getDomainSeparator()": FunctionFragment;
    "getName()": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getRevokeOffchain(address,bytes32)": FunctionFragment;
    "getRevokeTypeHash()": FunctionFragment;
    "getSchemaRegistry()": FunctionFragment;
    "getTimestamp(bytes32)": FunctionFragment;
    "increaseNonce(uint256)": FunctionFragment;
    "isAttestationValid(bytes32)": FunctionFragment;
    "multiAttest((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[])[])": FunctionFragment;
    "multiAttestByDelegation((bytes32,(address,uint64,bool,bytes32,bytes,uint256)[],(uint8,bytes32,bytes32)[],address,uint64)[])": FunctionFragment;
    "multiRevoke((bytes32,(bytes32,uint256)[])[])": FunctionFragment;
    "multiRevokeByDelegation((bytes32,(bytes32,uint256)[],(uint8,bytes32,bytes32)[],address,uint64)[])": FunctionFragment;
    "multiRevokeOffchain(bytes32[])": FunctionFragment;
    "multiTimestamp(bytes32[])": FunctionFragment;
    "revoke((bytes32,(bytes32,uint256)))": FunctionFragment;
    "revokeByDelegation((bytes32,(bytes32,uint256),(uint8,bytes32,bytes32),address,uint64))": FunctionFragment;
    "revokeOffchain(bytes32)": FunctionFragment;
    "timestamp(bytes32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "attest"
      | "attestByDelegation"
      | "getAttestTypeHash"
      | "getAttestation"
      | "getDomainSeparator"
      | "getName"
      | "getNonce"
      | "getRevokeOffchain"
      | "getRevokeTypeHash"
      | "getSchemaRegistry"
      | "getTimestamp"
      | "increaseNonce"
      | "isAttestationValid"
      | "multiAttest"
      | "multiAttestByDelegation"
      | "multiRevoke"
      | "multiRevokeByDelegation"
      | "multiRevokeOffchain"
      | "multiTimestamp"
      | "revoke"
      | "revokeByDelegation"
      | "revokeOffchain"
      | "timestamp"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "attest",
    values: [AttestationRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "attestByDelegation",
    values: [DelegatedAttestationRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAttestTypeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAttestation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRevokeOffchain",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRevokeTypeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAttestationValid",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "multiAttest",
    values: [MultiAttestationRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiAttestByDelegation",
    values: [MultiDelegatedAttestationRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevoke",
    values: [MultiRevocationRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevokeByDelegation",
    values: [MultiDelegatedRevocationRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiRevokeOffchain",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multiTimestamp",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [RevocationRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeByDelegation",
    values: [DelegatedRevocationRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOffchain",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "timestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "attestByDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAttestTypeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAttestation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRevokeOffchain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRevokeTypeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAttestationValid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiAttest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiAttestByDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiRevoke",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiRevokeByDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiRevokeOffchain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeByDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOffchain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Attested(address,address,bytes32,bytes32)": EventFragment;
    "NonceIncreased(uint256,uint256)": EventFragment;
    "Revoked(address,address,bytes32,bytes32)": EventFragment;
    "RevokedOffchain(address,bytes32,uint64)": EventFragment;
    "Timestamped(bytes32,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Attested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceIncreased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Revoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokedOffchain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Timestamped"): EventFragment;
}

export interface AttestedEventObject {
  recipient: string;
  attester: string;
  uid: string;
  schemaUID: string;
}
export type AttestedEvent = TypedEvent<
  [string, string, string, string],
  AttestedEventObject
>;

export type AttestedEventFilter = TypedEventFilter<AttestedEvent>;

export interface NonceIncreasedEventObject {
  oldNonce: BigNumber;
  newNonce: BigNumber;
}
export type NonceIncreasedEvent = TypedEvent<
  [BigNumber, BigNumber],
  NonceIncreasedEventObject
>;

export type NonceIncreasedEventFilter = TypedEventFilter<NonceIncreasedEvent>;

export interface RevokedEventObject {
  recipient: string;
  attester: string;
  uid: string;
  schemaUID: string;
}
export type RevokedEvent = TypedEvent<
  [string, string, string, string],
  RevokedEventObject
>;

export type RevokedEventFilter = TypedEventFilter<RevokedEvent>;

export interface RevokedOffchainEventObject {
  revoker: string;
  data: string;
  timestamp: BigNumber;
}
export type RevokedOffchainEvent = TypedEvent<
  [string, string, BigNumber],
  RevokedOffchainEventObject
>;

export type RevokedOffchainEventFilter = TypedEventFilter<RevokedOffchainEvent>;

export interface TimestampedEventObject {
  data: string;
  timestamp: BigNumber;
}
export type TimestampedEvent = TypedEvent<
  [string, BigNumber],
  TimestampedEventObject
>;

export type TimestampedEventFilter = TypedEventFilter<TimestampedEvent>;

export interface EAS extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EASInterface;

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
    attest(
      request: AttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    attestByDelegation(
      delegatedRequest: DelegatedAttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Returns the EIP712 type hash for the attest function.
     */
    getAttestTypeHash(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns an existing attestation by UID.
     * @param uid The UID of the attestation to retrieve.
     */
    getAttestation(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[AttestationStructOutput]>;

    /**
     * Returns the domain separator used in the encoding of the signatures for attest, and revoke.
     */
    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the EIP712 name.
     */
    getName(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the current nonce per-account.
     * @param account The requested account.
     */
    getNonce(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getRevokeOffchain(
      revoker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Returns the EIP712 type hash for the revoke function.
     */
    getRevokeTypeHash(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the global schema registry.
     */
    getSchemaRegistry(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getTimestamp(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Provides users an option to invalidate nonces by increasing their nonces to (higher) new values.
     * @param newNonce The (higher) new value.
     */
    increaseNonce(
      newNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Checks whether an attestation exists.
     * @param uid The UID of the attestation to retrieve.
     */
    isAttestationValid(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    multiAttest(
      multiRequests: MultiAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    multiAttestByDelegation(
      multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    multiRevoke(
      multiRequests: MultiRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    multiRevokeByDelegation(
      multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Revokes the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiRevokeOffchain(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Timestamps the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiTimestamp(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revoke(
      request: RevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeByDelegation(
      delegatedRequest: DelegatedRevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Revokes the specified bytes32 data.
     * @param data The data to timestamp.
     */
    revokeOffchain(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Timestamps the specified bytes32 data.
     * @param data The data to timestamp.
     */
    timestamp(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<[string]>;
  };

  attest(
    request: AttestationRequestStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  attestByDelegation(
    delegatedRequest: DelegatedAttestationRequestStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Returns the EIP712 type hash for the attest function.
   */
  getAttestTypeHash(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns an existing attestation by UID.
   * @param uid The UID of the attestation to retrieve.
   */
  getAttestation(
    uid: BytesLike,
    overrides?: CallOverrides
  ): Promise<AttestationStructOutput>;

  /**
   * Returns the domain separator used in the encoding of the signatures for attest, and revoke.
   */
  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the EIP712 name.
   */
  getName(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the current nonce per-account.
   * @param account The requested account.
   */
  getNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Returns the timestamp that the specified data was timestamped with.
   * @param data The data to query.
   */
  getRevokeOffchain(
    revoker: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Returns the EIP712 type hash for the revoke function.
   */
  getRevokeTypeHash(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the global schema registry.
   */
  getSchemaRegistry(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the timestamp that the specified data was timestamped with.
   * @param data The data to query.
   */
  getTimestamp(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Provides users an option to invalidate nonces by increasing their nonces to (higher) new values.
   * @param newNonce The (higher) new value.
   */
  increaseNonce(
    newNonce: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Checks whether an attestation exists.
   * @param uid The UID of the attestation to retrieve.
   */
  isAttestationValid(
    uid: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  multiAttest(
    multiRequests: MultiAttestationRequestStruct[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  multiAttestByDelegation(
    multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  multiRevoke(
    multiRequests: MultiRevocationRequestStruct[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  multiRevokeByDelegation(
    multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Revokes the specified multiple bytes32 data.
   * @param data The data to timestamp.
   */
  multiRevokeOffchain(
    data: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Timestamps the specified multiple bytes32 data.
   * @param data The data to timestamp.
   */
  multiTimestamp(
    data: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revoke(
    request: RevocationRequestStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeByDelegation(
    delegatedRequest: DelegatedRevocationRequestStruct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Revokes the specified bytes32 data.
   * @param data The data to timestamp.
   */
  revokeOffchain(
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Timestamps the specified bytes32 data.
   * @param data The data to timestamp.
   */
  timestamp(
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  /**
   * Semantic version.
   */
  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    attest(
      request: AttestationRequestStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    attestByDelegation(
      delegatedRequest: DelegatedAttestationRequestStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Returns the EIP712 type hash for the attest function.
     */
    getAttestTypeHash(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns an existing attestation by UID.
     * @param uid The UID of the attestation to retrieve.
     */
    getAttestation(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<AttestationStructOutput>;

    /**
     * Returns the domain separator used in the encoding of the signatures for attest, and revoke.
     */
    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the EIP712 name.
     */
    getName(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the current nonce per-account.
     * @param account The requested account.
     */
    getNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getRevokeOffchain(
      revoker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the EIP712 type hash for the revoke function.
     */
    getRevokeTypeHash(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the global schema registry.
     */
    getSchemaRegistry(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getTimestamp(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Provides users an option to invalidate nonces by increasing their nonces to (higher) new values.
     * @param newNonce The (higher) new value.
     */
    increaseNonce(
      newNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Checks whether an attestation exists.
     * @param uid The UID of the attestation to retrieve.
     */
    isAttestationValid(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    multiAttest(
      multiRequests: MultiAttestationRequestStruct[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    multiAttestByDelegation(
      multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    multiRevoke(
      multiRequests: MultiRevocationRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    multiRevokeByDelegation(
      multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Revokes the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiRevokeOffchain(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Timestamps the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiTimestamp(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revoke(
      request: RevocationRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeByDelegation(
      delegatedRequest: DelegatedRevocationRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Revokes the specified bytes32 data.
     * @param data The data to timestamp.
     */
    revokeOffchain(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Timestamps the specified bytes32 data.
     * @param data The data to timestamp.
     */
    timestamp(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Attested(address,address,bytes32,bytes32)"(
      recipient?: string | null,
      attester?: string | null,
      uid?: null,
      schemaUID?: BytesLike | null
    ): AttestedEventFilter;
    Attested(
      recipient?: string | null,
      attester?: string | null,
      uid?: null,
      schemaUID?: BytesLike | null
    ): AttestedEventFilter;

    "NonceIncreased(uint256,uint256)"(
      oldNonce?: null,
      newNonce?: null
    ): NonceIncreasedEventFilter;
    NonceIncreased(oldNonce?: null, newNonce?: null): NonceIncreasedEventFilter;

    "Revoked(address,address,bytes32,bytes32)"(
      recipient?: string | null,
      attester?: string | null,
      uid?: null,
      schemaUID?: BytesLike | null
    ): RevokedEventFilter;
    Revoked(
      recipient?: string | null,
      attester?: string | null,
      uid?: null,
      schemaUID?: BytesLike | null
    ): RevokedEventFilter;

    "RevokedOffchain(address,bytes32,uint64)"(
      revoker?: string | null,
      data?: BytesLike | null,
      timestamp?: BigNumberish | null
    ): RevokedOffchainEventFilter;
    RevokedOffchain(
      revoker?: string | null,
      data?: BytesLike | null,
      timestamp?: BigNumberish | null
    ): RevokedOffchainEventFilter;

    "Timestamped(bytes32,uint64)"(
      data?: BytesLike | null,
      timestamp?: BigNumberish | null
    ): TimestampedEventFilter;
    Timestamped(
      data?: BytesLike | null,
      timestamp?: BigNumberish | null
    ): TimestampedEventFilter;
  };

  estimateGas: {
    attest(
      request: AttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    attestByDelegation(
      delegatedRequest: DelegatedAttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Returns the EIP712 type hash for the attest function.
     */
    getAttestTypeHash(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns an existing attestation by UID.
     * @param uid The UID of the attestation to retrieve.
     */
    getAttestation(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the domain separator used in the encoding of the signatures for attest, and revoke.
     */
    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the EIP712 name.
     */
    getName(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the current nonce per-account.
     * @param account The requested account.
     */
    getNonce(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getRevokeOffchain(
      revoker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the EIP712 type hash for the revoke function.
     */
    getRevokeTypeHash(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the global schema registry.
     */
    getSchemaRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getTimestamp(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Provides users an option to invalidate nonces by increasing their nonces to (higher) new values.
     * @param newNonce The (higher) new value.
     */
    increaseNonce(
      newNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Checks whether an attestation exists.
     * @param uid The UID of the attestation to retrieve.
     */
    isAttestationValid(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiAttest(
      multiRequests: MultiAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    multiAttestByDelegation(
      multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    multiRevoke(
      multiRequests: MultiRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    multiRevokeByDelegation(
      multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Revokes the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiRevokeOffchain(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Timestamps the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiTimestamp(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revoke(
      request: RevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    revokeByDelegation(
      delegatedRequest: DelegatedRevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Revokes the specified bytes32 data.
     * @param data The data to timestamp.
     */
    revokeOffchain(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Timestamps the specified bytes32 data.
     * @param data The data to timestamp.
     */
    timestamp(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    attest(
      request: AttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    attestByDelegation(
      delegatedRequest: DelegatedAttestationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the EIP712 type hash for the attest function.
     */
    getAttestTypeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns an existing attestation by UID.
     * @param uid The UID of the attestation to retrieve.
     */
    getAttestation(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the domain separator used in the encoding of the signatures for attest, and revoke.
     */
    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the EIP712 name.
     */
    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the current nonce per-account.
     * @param account The requested account.
     */
    getNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getRevokeOffchain(
      revoker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the EIP712 type hash for the revoke function.
     */
    getRevokeTypeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the global schema registry.
     */
    getSchemaRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the timestamp that the specified data was timestamped with.
     * @param data The data to query.
     */
    getTimestamp(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Provides users an option to invalidate nonces by increasing their nonces to (higher) new values.
     * @param newNonce The (higher) new value.
     */
    increaseNonce(
      newNonce: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Checks whether an attestation exists.
     * @param uid The UID of the attestation to retrieve.
     */
    isAttestationValid(
      uid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiAttest(
      multiRequests: MultiAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    multiAttestByDelegation(
      multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    multiRevoke(
      multiRequests: MultiRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    multiRevokeByDelegation(
      multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Revokes the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiRevokeOffchain(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Timestamps the specified multiple bytes32 data.
     * @param data The data to timestamp.
     */
    multiTimestamp(
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revoke(
      request: RevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeByDelegation(
      delegatedRequest: DelegatedRevocationRequestStruct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Revokes the specified bytes32 data.
     * @param data The data to timestamp.
     */
    revokeOffchain(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Timestamps the specified bytes32 data.
     * @param data The data to timestamp.
     */
    timestamp(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
