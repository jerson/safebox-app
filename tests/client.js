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
  Device
} from '../src/proto/services_pb';
const moment = require('moment');

jest.mock('../src/services/Client.tsx', () => {
  return {
    refreshToken: () => {
      const authResponse = new AuthResponse();
      return new Promise(resolve => {
        return authResponse;
      });
    },
    getDevices: () => {
      const device = new Device();
      device.setId(1);
      device.setName('sample');
      device.setDatecreated(moment().toDate());
      device.setUid('sample');

      const devicesResponse = new DevicesResponse();
      devicesResponse.setDevicesList([device]);
      return new Promise(resolve => {
        return devicesResponse;
      });
    }
  };
});
