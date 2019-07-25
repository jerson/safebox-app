import * as jspb from "google-protobuf"

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    name: string,
  }
}

export class RefreshTokenRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
    accesstoken: string,
  }
}

export class KeyPairResponse extends jspb.Message {
  getPublickey(): string;
  setPublickey(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyPairResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyPairResponse): KeyPairResponse.AsObject;
  static serializeBinaryToWriter(message: KeyPairResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyPairResponse;
  static deserializeBinaryFromReader(message: KeyPairResponse, reader: jspb.BinaryReader): KeyPairResponse;
}

export namespace KeyPairResponse {
  export type AsObject = {
    publickey: string,
    privatekey: string,
  }
}

export class LogoutRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    accesstoken: string,
  }
}

export class LogoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
  }
}

export class LoginBiometricRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getBiometrickey(): string;
  setBiometrickey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginBiometricRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginBiometricRequest): LoginBiometricRequest.AsObject;
  static serializeBinaryToWriter(message: LoginBiometricRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginBiometricRequest;
  static deserializeBinaryFromReader(message: LoginBiometricRequest, reader: jspb.BinaryReader): LoginBiometricRequest;
}

export namespace LoginBiometricRequest {
  export type AsObject = {
    username: string,
    biometrickey: string,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPrivatekey(): string;
  setPrivatekey(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string,
    privatekey: string,
    publickey: string,
  }
}

export class AuthResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getDateexpire(): string;
  setDateexpire(value: string): void;

  getKeypair(): KeyPairResponse | undefined;
  setKeypair(value?: KeyPairResponse): void;
  hasKeypair(): boolean;
  clearKeypair(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    accesstoken: string,
    dateexpire: string,
    keypair?: KeyPairResponse.AsObject,
  }
}

export class Account extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getHint(): string;
  setHint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    label: string,
    username: string,
    password: string,
    hint: string,
  }
}

export class AccountSingle extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLabel(): string;
  setLabel(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getHint(): string;
  setHint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountSingle.AsObject;
  static toObject(includeInstance: boolean, msg: AccountSingle): AccountSingle.AsObject;
  static serializeBinaryToWriter(message: AccountSingle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountSingle;
  static deserializeBinaryFromReader(message: AccountSingle, reader: jspb.BinaryReader): AccountSingle;
}

export namespace AccountSingle {
  export type AsObject = {
    id: number,
    label: string,
    username: string,
    hint: string,
  }
}

export class AddAccountRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getAccount(): Account | undefined;
  setAccount(value?: Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddAccountRequest): AddAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AddAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAccountRequest;
  static deserializeBinaryFromReader(message: AddAccountRequest, reader: jspb.BinaryReader): AddAccountRequest;
}

export namespace AddAccountRequest {
  export type AsObject = {
    accesstoken: string,
    account?: Account.AsObject,
  }
}

export class AddAccountResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddAccountResponse): AddAccountResponse.AsObject;
  static serializeBinaryToWriter(message: AddAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAccountResponse;
  static deserializeBinaryFromReader(message: AddAccountResponse, reader: jspb.BinaryReader): AddAccountResponse;
}

export namespace AddAccountResponse {
  export type AsObject = {
    id: number,
  }
}

export class AccountsRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsRequest): AccountsRequest.AsObject;
  static serializeBinaryToWriter(message: AccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsRequest;
  static deserializeBinaryFromReader(message: AccountsRequest, reader: jspb.BinaryReader): AccountsRequest;
}

export namespace AccountsRequest {
  export type AsObject = {
    accesstoken: string,
  }
}

export class AccountsResponse extends jspb.Message {
  getAccountsList(): Array<AccountSingle>;
  setAccountsList(value: Array<AccountSingle>): void;
  clearAccountsList(): void;
  addAccounts(value?: AccountSingle, index?: number): AccountSingle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsResponse): AccountsResponse.AsObject;
  static serializeBinaryToWriter(message: AccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsResponse;
  static deserializeBinaryFromReader(message: AccountsResponse, reader: jspb.BinaryReader): AccountsResponse;
}

export namespace AccountsResponse {
  export type AsObject = {
    accountsList: Array<AccountSingle.AsObject>,
  }
}

export class AccountRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRequest): AccountRequest.AsObject;
  static serializeBinaryToWriter(message: AccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRequest;
  static deserializeBinaryFromReader(message: AccountRequest, reader: jspb.BinaryReader): AccountRequest;
}

export namespace AccountRequest {
  export type AsObject = {
    accesstoken: string,
    id: number,
  }
}

export class AccountResponse extends jspb.Message {
  getAccount(): Account | undefined;
  setAccount(value?: Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountResponse): AccountResponse.AsObject;
  static serializeBinaryToWriter(message: AccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountResponse;
  static deserializeBinaryFromReader(message: AccountResponse, reader: jspb.BinaryReader): AccountResponse;
}

export namespace AccountResponse {
  export type AsObject = {
    account?: Account.AsObject,
  }
}

export class BuyProductRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuyProductRequest): BuyProductRequest.AsObject;
  static serializeBinaryToWriter(message: BuyProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyProductRequest;
  static deserializeBinaryFromReader(message: BuyProductRequest, reader: jspb.BinaryReader): BuyProductRequest;
}

export namespace BuyProductRequest {
  export type AsObject = {
    accesstoken: string,
    slug: string,
  }
}

export class BuyProductResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuyProductResponse): BuyProductResponse.AsObject;
  static serializeBinaryToWriter(message: BuyProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyProductResponse;
  static deserializeBinaryFromReader(message: BuyProductResponse, reader: jspb.BinaryReader): BuyProductResponse;
}

export namespace BuyProductResponse {
  export type AsObject = {
    success: boolean,
  }
}

