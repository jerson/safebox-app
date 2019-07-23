/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  HelloReply,
  LoginRequest,
  PingReply,
  PingRequest,
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
    PingReply,
    (request: PingRequest) => {
      return request.serializeBinary();
    },
    PingReply.deserializeBinary
  );

  ping(
    request: PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PingReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Ping',
      request,
      metadata || {},
      this.methodInfoPing,
      callback);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Login',
      request,
      metadata || {},
      this.methodInfoLogin,
      callback);
  }

  methodInfoRegister = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: RegisterRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  register(
    request: RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Services/Register',
      request,
      metadata || {},
      this.methodInfoRegister,
      callback);
  }

}

