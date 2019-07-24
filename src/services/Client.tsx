import { ServicesClient } from "../proto/ServicesServiceClientPb";
import Config from "../Config";
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
} from "../proto/services_pb";
import Session from "./Session";

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
