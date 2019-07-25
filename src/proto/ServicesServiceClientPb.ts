/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AccountRequest,
  AccountResponse,
  AccountsRequest,
  AccountsResponse,
  AddAccountRequest,
  AddAccountResponse,
  AuthResponse,
  BuyProductRequest,
  BuyProductResponse,
  LoginBiometricRequest,
  LoginRequest,
  LogoutRequest,
  LogoutResponse,
  PingRequest,
  PingResponse,
  RefreshTokenRequest,
  RegisterRequest} from './services_pb';

export class ServicesClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.AbstractClientBase.MethodInfo(
    PingResponse,
    (request: PingRequest) => {
      return request.serializeBinary();
    },
    PingResponse.deserializeBinary
  );

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PingResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoLogout = new grpcWeb.AbstractClientBase.MethodInfo(
    LogoutResponse,
    (request: LogoutRequest) => {
      return request.serializeBinary();
    },
    LogoutResponse.deserializeBinary
  );

  logout(
    request: LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LogoutResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Logout',
      request,
      metadata || {},
      this.methodInfoLogout,
      callback);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Login',
      request,
      metadata || {},
      this.methodInfoLogin,
      callback);
  }

  methodInfoRefreshToken = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: RefreshTokenRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  refreshToken(
    request: RefreshTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/RefreshToken',
      request,
      metadata || {},
      this.methodInfoRefreshToken,
      callback);
  }

  methodInfoLoginBiometric = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: LoginBiometricRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  loginBiometric(
    request: LoginBiometricRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/LoginBiometric',
      request,
      metadata || {},
      this.methodInfoLoginBiometric,
      callback);
  }

  methodInfoRegister = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: RegisterRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  register(
    request: RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Register',
      request,
      metadata || {},
      this.methodInfoRegister,
      callback);
  }

  methodInfoAddAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    AddAccountResponse,
    (request: AddAccountRequest) => {
      return request.serializeBinary();
    },
    AddAccountResponse.deserializeBinary
  );

  addAccount(
    request: AddAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddAccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/AddAccount',
      request,
      metadata || {},
      this.methodInfoAddAccount,
      callback);
  }

  methodInfoGetAccounts = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountsResponse,
    (request: AccountsRequest) => {
      return request.serializeBinary();
    },
    AccountsResponse.deserializeBinary
  );

  getAccounts(
    request: AccountsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/GetAccounts',
      request,
      metadata || {},
      this.methodInfoGetAccounts,
      callback);
  }

  methodInfoGetAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountResponse,
    (request: AccountRequest) => {
      return request.serializeBinary();
    },
    AccountResponse.deserializeBinary
  );

  getAccount(
    request: AccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/GetAccount',
      request,
      metadata || {},
      this.methodInfoGetAccount,
      callback);
  }

  methodInfoBuyProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    BuyProductResponse,
    (request: BuyProductRequest) => {
      return request.serializeBinary();
    },
    BuyProductResponse.deserializeBinary
  );

  buyProduct(
    request: BuyProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BuyProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/BuyProduct',
      request,
      metadata || {},
      this.methodInfoBuyProduct,
      callback);
  }

}

