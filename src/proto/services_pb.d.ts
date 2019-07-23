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

export class LoginResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accesstoken: string,
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

export class RegisterResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    success: boolean,
    accesstoken: string,
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

export class AccountAddRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getAccount(): Account | undefined;
  setAccount(value?: Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAddRequest): AccountAddRequest.AsObject;
  static serializeBinaryToWriter(message: AccountAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAddRequest;
  static deserializeBinaryFromReader(message: AccountAddRequest, reader: jspb.BinaryReader): AccountAddRequest;
}

export namespace AccountAddRequest {
  export type AsObject = {
    accesstoken: string,
    account?: Account.AsObject,
  }
}

export class AccountAddResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAddResponse): AccountAddResponse.AsObject;
  static serializeBinaryToWriter(message: AccountAddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAddResponse;
  static deserializeBinaryFromReader(message: AccountAddResponse, reader: jspb.BinaryReader): AccountAddResponse;
}

export namespace AccountAddResponse {
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

