import {ServicesClient} from '../proto/ServicesServiceClientPb';
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
  LoginDeviceRequest,
  HasProductRequest,
  HasProductResponse,
  SendLocationRequest,
  SendLocationResponse,
  EnableLocationRequest,
  EnableLocationResponse,
  DisableLocationRequest,
  DisableLocationResponse,
  GetEmailRequest,
  GetEmailResponse,
} from '../proto/services_pb';
import Session from './Session';

export default class Client {
  static refreshToken(): Promise<AuthResponse> {
    const request = new RefreshTokenRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.refreshToken(request, null, (err, response) => {
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
      /* NOSONAR */ client.login(request, null, (err, response) => {
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
      /* NOSONAR */ client.loginWithDevice(request, null, (err, response) => {
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
      /* NOSONAR */ client.register(request, null, (err, response) => {
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
      /* NOSONAR */ client.logout(request, null, (err, response) => {
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
      /* NOSONAR */ client.addAccount(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  static deleteAccount(
    request: DeleteAccountRequest,
  ): Promise<DeleteAccountResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.deleteAccount(request, null, (err, response) => {
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
      /* NOSONAR */ client.getAccount(request, null, (err, response) => {
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
      /* NOSONAR */ client.getAccounts(request, null, (err, response) => {
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
      /* NOSONAR */ client.addDevice(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static deleteDevice(
    request: DeleteDeviceRequest,
  ): Promise<DeleteDeviceResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.deleteDevice(request, null, (err, response) => {
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
      /* NOSONAR */ client.getDevices(request, null, (err, response) => {
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
      /* NOSONAR */ client.buyProduct(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static hasProduct(request: HasProductRequest): Promise<HasProductResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.hasProduct(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static sendLocation(
    request: SendLocationRequest,
  ): Promise<SendLocationResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.sendLocation(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static enableLocation(
    request: EnableLocationRequest,
  ): Promise<EnableLocationResponse> {
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.enableLocation(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static disableLocation(): Promise<DisableLocationResponse> {
    const request = new DisableLocationRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.disableLocation(request, null, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
  static getEmail(): Promise<GetEmailResponse> {
    const request = new GetEmailRequest();
    request.setAccesstoken(Session.getAccessToken());

    const client = this.connect();
    return new Promise((resolve, reject) => {
      /* NOSONAR */ client.getEmail(request, null, (err, response) => {
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
