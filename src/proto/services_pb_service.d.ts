// package: 
// file: proto/services.proto

import * as proto_services_pb from "../proto/services_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServicesPing = {
  readonly methodName: string;
  readonly service: typeof Services;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_services_pb.PingRequest;
  readonly responseType: typeof proto_services_pb.PingReply;
};

type ServicesLogin = {
  readonly methodName: string;
  readonly service: typeof Services;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_services_pb.LoginRequest;
  readonly responseType: typeof proto_services_pb.HelloReply;
};

type ServicesRegister = {
  readonly methodName: string;
  readonly service: typeof Services;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_services_pb.RegisterRequest;
  readonly responseType: typeof proto_services_pb.HelloReply;
};

export class Services {
  static readonly serviceName: string;
  static readonly Ping: ServicesPing;
  static readonly Login: ServicesLogin;
  static readonly Register: ServicesRegister;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ServicesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: proto_services_pb.PingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.PingReply|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: proto_services_pb.PingRequest,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.PingReply|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_services_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.HelloReply|null) => void
  ): UnaryResponse;
  login(
    requestMessage: proto_services_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.HelloReply|null) => void
  ): UnaryResponse;
  register(
    requestMessage: proto_services_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.HelloReply|null) => void
  ): UnaryResponse;
  register(
    requestMessage: proto_services_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: proto_services_pb.HelloReply|null) => void
  ): UnaryResponse;
}

