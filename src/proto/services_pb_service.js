// package:
// file: proto/services.proto

var proto_services_pb = require('../proto/services_pb');
var grpc = require('@improbable-eng/grpc-web').grpc;

var Services = (function() {
  function Services() {}
  Services.serviceName = 'Services';
  return Services;
})();

Services.Ping = {
  methodName: 'Ping',
  service: Services,
  requestStream: false,
  responseStream: false,
  requestType: proto_services_pb.PingRequest,
  responseType: proto_services_pb.PingReply
};

Services.Login = {
  methodName: 'Login',
  service: Services,
  requestStream: false,
  responseStream: false,
  requestType: proto_services_pb.LoginRequest,
  responseType: proto_services_pb.HelloReply
};

Services.Register = {
  methodName: 'Register',
  service: Services,
  requestStream: false,
  responseStream: false,
  requestType: proto_services_pb.RegisterRequest,
  responseType: proto_services_pb.HelloReply
};

exports.Services = Services;

function ServicesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServicesClient.prototype.ping = function ping(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Services.Ping, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function() {
      callback = null;
      client.close();
    }
  };
};

ServicesClient.prototype.login = function login(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Services.Login, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function() {
      callback = null;
      client.close();
    }
  };
};

ServicesClient.prototype.register = function register(
  requestMessage,
  metadata,
  callback
) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Services.Register, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function() {
      callback = null;
      client.close();
    }
  };
};

exports.ServicesClient = ServicesClient;
