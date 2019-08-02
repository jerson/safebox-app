import { ServicesClient } from '../proto/ServicesServiceClientPb';
import Config from '../Config';
import {
  AccountRequest,
  AccountResponse,
  AccountsRequest,
  AccountsResponse,
  AddAccountRequest,
  AddAccountResponse,
  BuyProductRequest,
  BuyProductResponse,
  LoginRequest,
  RegisterRequest,
  LogoutRequest,
  LogoutResponse,
  AuthResponse,
  RefreshTokenRequest,
  DeleteAccountRequest,
  DeleteAccountResponse,
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DevicesRequest,
  DevicesResponse,
  AddDeviceRequest,
  AddDeviceResponse,
  LoginDeviceRequest
} from '../proto/services_pb';
import Session from './Session';

export default class Client {
  static refreshToken(): Promise<AuthResponse> {
    const request = new RefreshTokenRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.refreshToken(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static login(request: LoginRequest): Promise<AuthResponse> {
    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.login(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static loginWithDevice(request: LoginDeviceRequest): Promise<AuthResponse> {
    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.loginWithDevice(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static register(request: RegisterRequest): Promise<AuthResponse> {
    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.register(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static logout(): Promise<LogoutResponse> {
    const request = new LogoutRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.logout(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static addAccount(request: AddAccountRequest): Promise<AddAccountResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.addAccount(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static deleteAccount(
    request: DeleteAccountRequest
  ): Promise<DeleteAccountResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.deleteAccount(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static getAccount(request: AccountRequest): Promise<AccountResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.getAccount(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static getAccounts(): Promise<AccountsResponse> {
    const request = new AccountsRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.getAccounts(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static addDevice(request: AddDeviceRequest): Promise<AddDeviceResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.addDevice(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static deleteDevice(
    request: DeleteDeviceRequest
  ): Promise<DeleteDeviceResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.deleteDevice(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static getDevices(): Promise<DevicesResponse> {
    const request = new DevicesRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.getDevices(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static buyProduct(request: BuyProductRequest): Promise<BuyProductResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      client.buyProduct(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  private static connect() {
    return new ServicesClient(Config.server.url);
  }
}
