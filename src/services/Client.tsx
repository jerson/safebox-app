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
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  LogoutRequest,
  LogoutResponse
} from '../proto/services_pb';

export default class Client {
  static login(request: LoginRequest): Promise<LoginResponse> {
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
  static logout(request: LogoutRequest): Promise<LogoutResponse> {
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

  static register(request: RegisterRequest): Promise<RegisterResponse> {
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

  static addAccount(request: AddAccountRequest): Promise<AddAccountResponse> {
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

  static getAccount(request: AccountRequest): Promise<AccountResponse> {
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

  static getAccounts(request: AccountsRequest): Promise<AccountsResponse> {
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

  static buyProduct(request: BuyProductRequest): Promise<BuyProductResponse> {
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
