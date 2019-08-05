import * as jspb from "google-protobuf"

export class DisableLocationRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableLocationRequest): DisableLocationRequest.AsObject;
  static serializeBinaryToWriter(message: DisableLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableLocationRequest;
  static deserializeBinaryFromReader(message: DisableLocationRequest, reader: jspb.BinaryReader): DisableLocationRequest;
}

export namespace DisableLocationRequest {
  export type AsObject = {
    accesstoken: string,
  }
}

export class DisableLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableLocationResponse): DisableLocationResponse.AsObject;
  static serializeBinaryToWriter(message: DisableLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableLocationResponse;
  static deserializeBinaryFromReader(message: DisableLocationResponse, reader: jspb.BinaryReader): DisableLocationResponse;
}

export namespace DisableLocationResponse {
  export type AsObject = {
  }
}

export class EnableLocationRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableLocationRequest): EnableLocationRequest.AsObject;
  static serializeBinaryToWriter(message: EnableLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableLocationRequest;
  static deserializeBinaryFromReader(message: EnableLocationRequest, reader: jspb.BinaryReader): EnableLocationRequest;
}

export namespace EnableLocationRequest {
  export type AsObject = {
    accesstoken: string,
    email: string,
  }
}

export class EnableLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableLocationResponse): EnableLocationResponse.AsObject;
  static serializeBinaryToWriter(message: EnableLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableLocationResponse;
  static deserializeBinaryFromReader(message: EnableLocationResponse, reader: jspb.BinaryReader): EnableLocationResponse;
}

export namespace EnableLocationResponse {
  export type AsObject = {
  }
}

export class SendLocationRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getLatitude(): string;
  setLatitude(value: string): void;

  getLongitude(): string;
  setLongitude(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendLocationRequest): SendLocationRequest.AsObject;
  static serializeBinaryToWriter(message: SendLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendLocationRequest;
  static deserializeBinaryFromReader(message: SendLocationRequest, reader: jspb.BinaryReader): SendLocationRequest;
}

export namespace SendLocationRequest {
  export type AsObject = {
    accesstoken: string,
    latitude: string,
    longitude: string,
  }
}

export class SendLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendLocationResponse): SendLocationResponse.AsObject;
  static serializeBinaryToWriter(message: SendLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendLocationResponse;
  static deserializeBinaryFromReader(message: SendLocationResponse, reader: jspb.BinaryReader): SendLocationResponse;
}

export namespace SendLocationResponse {
  export type AsObject = {
  }
}

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

export class AddDeviceRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPublickey(): string;
  setPublickey(value: string): void;

  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDeviceRequest): AddDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: AddDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDeviceRequest;
  static deserializeBinaryFromReader(message: AddDeviceRequest, reader: jspb.BinaryReader): AddDeviceRequest;
}

export namespace AddDeviceRequest {
  export type AsObject = {
    accesstoken: string,
    name: string,
    publickey: string,
    uid: string,
  }
}

export class AddDeviceResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddDeviceResponse): AddDeviceResponse.AsObject;
  static serializeBinaryToWriter(message: AddDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDeviceResponse;
  static deserializeBinaryFromReader(message: AddDeviceResponse, reader: jspb.BinaryReader): AddDeviceResponse;
}

export namespace AddDeviceResponse {
  export type AsObject = {
    id: number,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    accesstoken: string,
    id: number,
  }
}

export class DeleteDeviceResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceResponse): DeleteDeviceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceResponse;
  static deserializeBinaryFromReader(message: DeleteDeviceResponse, reader: jspb.BinaryReader): DeleteDeviceResponse;
}

export namespace DeleteDeviceResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class Device extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDatecreated(): string;
  setDatecreated(value: string): void;

  getUid(): string;
  setUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: number,
    name: string,
    datecreated: string,
    uid: string,
  }
}

export class DevicesRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DevicesRequest): DevicesRequest.AsObject;
  static serializeBinaryToWriter(message: DevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DevicesRequest;
  static deserializeBinaryFromReader(message: DevicesRequest, reader: jspb.BinaryReader): DevicesRequest;
}

export namespace DevicesRequest {
  export type AsObject = {
    accesstoken: string,
  }
}

export class DevicesResponse extends jspb.Message {
  getDevicesList(): Array<Device>;
  setDevicesList(value: Array<Device>): void;
  clearDevicesList(): void;
  addDevices(value?: Device, index?: number): Device;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DevicesResponse): DevicesResponse.AsObject;
  static serializeBinaryToWriter(message: DevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DevicesResponse;
  static deserializeBinaryFromReader(message: DevicesResponse, reader: jspb.BinaryReader): DevicesResponse;
}

export namespace DevicesResponse {
  export type AsObject = {
    devicesList: Array<Device.AsObject>,
  }
}

export class DeleteAccountRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
    accesstoken: string,
    id: number,
  }
}

export class DeleteAccountResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountResponse): DeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountResponse;
  static deserializeBinaryFromReader(message: DeleteAccountResponse, reader: jspb.BinaryReader): DeleteAccountResponse;
}

export namespace DeleteAccountResponse {
  export type AsObject = {
    success: boolean,
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

export class LoginDeviceRequest extends jspb.Message {
  getPublickey(): string;
  setPublickey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginDeviceRequest): LoginDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: LoginDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginDeviceRequest;
  static deserializeBinaryFromReader(message: LoginDeviceRequest, reader: jspb.BinaryReader): LoginDeviceRequest;
}

export namespace LoginDeviceRequest {
  export type AsObject = {
    publickey: string,
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

  getDate(): string;
  setDate(value: string): void;

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
    date: string,
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

