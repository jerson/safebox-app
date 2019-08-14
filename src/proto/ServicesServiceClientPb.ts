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
  AddDeviceRequest,
  AddDeviceResponse,
  AuthResponse,
  BuyProductRequest,
  BuyProductResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DevicesRequest,
  DevicesResponse,
  DisableLocationRequest,
  DisableLocationResponse,
  EnableLocationRequest,
  EnableLocationResponse,
  GetEmailRequest,
  GetEmailResponse,
  HasProductRequest,
  HasProductResponse,
  LoginDeviceRequest,
  LoginRequest,
  LogoutRequest,
  LogoutResponse,
  PingRequest,
  PingResponse,
  RefreshTokenRequest,
  RegisterRequest,
  SendLocationRequest,
  SendLocationResponse} from './services_pb';

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

  methodInfoAddDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    AddDeviceResponse,
    (request: AddDeviceRequest) => {
      return request.serializeBinary();
    },
    AddDeviceResponse.deserializeBinary
  );

  addDevice(
    request: AddDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AddDeviceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/AddDevice',
      request,
      metadata || {},
      this.methodInfoAddDevice,
      callback);
  }

  methodInfoDeleteDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteDeviceResponse,
    (request: DeleteDeviceRequest) => {
      return request.serializeBinary();
    },
    DeleteDeviceResponse.deserializeBinary
  );

  deleteDevice(
    request: DeleteDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteDeviceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/DeleteDevice',
      request,
      metadata || {},
      this.methodInfoDeleteDevice,
      callback);
  }

  methodInfoGetDevices = new grpcWeb.AbstractClientBase.MethodInfo(
    DevicesResponse,
    (request: DevicesRequest) => {
      return request.serializeBinary();
    },
    DevicesResponse.deserializeBinary
  );

  getDevices(
    request: DevicesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DevicesResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/GetDevices',
      request,
      metadata || {},
      this.methodInfoGetDevices,
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

  methodInfoLoginWithDevice = new grpcWeb.AbstractClientBase.MethodInfo(
    AuthResponse,
    (request: LoginDeviceRequest) => {
      return request.serializeBinary();
    },
    AuthResponse.deserializeBinary
  );

  loginWithDevice(
    request: LoginDeviceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/LoginWithDevice',
      request,
      metadata || {},
      this.methodInfoLoginWithDevice,
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

  methodInfoDeleteAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteAccountResponse,
    (request: DeleteAccountRequest) => {
      return request.serializeBinary();
    },
    DeleteAccountResponse.deserializeBinary
  );

  deleteAccount(
    request: DeleteAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteAccountResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/DeleteAccount',
      request,
      metadata || {},
      this.methodInfoDeleteAccount,
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

  methodInfoSendLocation = new grpcWeb.AbstractClientBase.MethodInfo(
    SendLocationResponse,
    (request: SendLocationRequest) => {
      return request.serializeBinary();
    },
    SendLocationResponse.deserializeBinary
  );

  sendLocation(
    request: SendLocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SendLocationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/SendLocation',
      request,
      metadata || {},
      this.methodInfoSendLocation,
      callback);
  }

  methodInfoEnableLocation = new grpcWeb.AbstractClientBase.MethodInfo(
    EnableLocationResponse,
    (request: EnableLocationRequest) => {
      return request.serializeBinary();
    },
    EnableLocationResponse.deserializeBinary
  );

  enableLocation(
    request: EnableLocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EnableLocationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/EnableLocation',
      request,
      metadata || {},
      this.methodInfoEnableLocation,
      callback);
  }

  methodInfoDisableLocation = new grpcWeb.AbstractClientBase.MethodInfo(
    DisableLocationResponse,
    (request: DisableLocationRequest) => {
      return request.serializeBinary();
    },
    DisableLocationResponse.deserializeBinary
  );

  disableLocation(
    request: DisableLocationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DisableLocationResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/DisableLocation',
      request,
      metadata || {},
      this.methodInfoDisableLocation,
      callback);
  }

  methodInfoGetEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    GetEmailResponse,
    (request: GetEmailRequest) => {
      return request.serializeBinary();
    },
    GetEmailResponse.deserializeBinary
  );

  getEmail(
    request: GetEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetEmailResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/GetEmail',
      request,
      metadata || {},
      this.methodInfoGetEmail,
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

  methodInfoHasProduct = new grpcWeb.AbstractClientBase.MethodInfo(
    HasProductResponse,
    (request: HasProductRequest) => {
      return request.serializeBinary();
    },
    HasProductResponse.deserializeBinary
  );

  hasProduct(
    request: HasProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HasProductResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/HasProduct',
      request,
      metadata || {},
      this.methodInfoHasProduct,
      callback);
  }

}

