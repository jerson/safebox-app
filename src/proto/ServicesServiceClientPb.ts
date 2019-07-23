/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AccountAddRequest,
  AccountAddResponse,
  AccountRequest,
  AccountResponse,
  AccountsRequest,
  AccountsResponse,
  BuyProductRequest,
  BuyProductResponse,
  LoginRequest,
  LoginResponse,
  PingRequest,
  PingResponse,
  RegisterRequest,
  RegisterResponse} from './services_pb';

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

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Login',
      request,
      metadata || {},
      this.methodInfoLogin,
      callback);
  }

  methodInfoRegister = new grpcWeb.AbstractClientBase.MethodInfo(
    RegisterResponse,
    (request: RegisterRequest) => {
      return request.serializeBinary();
    },
    RegisterResponse.deserializeBinary
  );

  register(
    request: RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RegisterResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Register',
      request,
      metadata || {},
      this.methodInfoRegister,
      callback);
  }

  methodInfoAddAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountAddResponse,
    (request: AccountAddRequest) => {
      return request.serializeBinary();
    },
    AccountAddResponse.deserializeBinary
  );

  addAccount(
    request: AccountAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountAddResponse) => void) {
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

