jest.mock('../src/services/Client.tsx', () => {
  return {
    refreshToken: () => {
      const { AuthResponse } = require('../src/proto/services_pb');
      const response = new AuthResponse();
      return response;
    },
    login: _request => {
      const { AuthResponse } = require('../src/proto/services_pb');
      const response = new AuthResponse();
      return response;
    },
    loginWithDevice: _request => {
      const { AuthResponse } = require('../src/proto/services_pb');
      const response = new AuthResponse();
      return response;
    },
    register: _request => {
      const { AuthResponse } = require('../src/proto/services_pb');
      const response = new AuthResponse();
      return response;
    },
    logout: () => {
      const { LogoutResponse } = require('../src/proto/services_pb');
      const response = new LogoutResponse();
      return response;
    },
    addAccount: _request => {
      const { AddAccountResponse } = require('../src/proto/services_pb');
      const response = new AddAccountResponse();
      return response;
    },
    deleteAccount: _request => {
      const { DeleteAccountResponse } = require('../src/proto/services_pb');
      const response = new DeleteAccountResponse();
      return response;
    },
    getAccount: _request => {
      const { Account, AccountResponse } = require('../src/proto/services_pb');
      const response = new AccountResponse();

      const account = new Account();
      account.setHint('sample');
      account.setLabel('sample');
      account.setPassword('sample');
      account.setUsername('sample');
      response.setAccount(account);
      return response;
    },
    getAccounts: () => {
      const {
        AccountSingle,
        AccountsResponse
      } = require('../src/proto/services_pb');
      const response = new AccountsResponse();

      const account = new AccountSingle();
      account.setId(9);
      account.setHint('sample');
      account.setLabel('sample');
      account.setUsername('sample');
      response.setAccountsList([account]);
      return response;
    },
    addDevice: _request => {
      const { AddDeviceResponse } = require('../src/proto/services_pb');
      const response = new AddDeviceResponse();
      return response;
    },
    deleteDevice: _request => {
      const { DeleteDeviceResponse } = require('../src/proto/services_pb');
      const response = new DeleteDeviceResponse();
      return response;
    },
    getDevices: () => {
      const { Device, DevicesResponse } = require('../src/proto/services_pb');
      const moment = require('moment');

      const device = new Device();
      device.setId(1);
      device.setName('sample');
      device.setDatecreated(moment().toDate());
      device.setUid('sample');

      const response = new DevicesResponse();
      response.setDevicesList([device]);
      return response;
    },
    buyProduct: _request => {
      const { BuyProductResponse } = require('../src/proto/services_pb');
      const response = new BuyProductResponse();
      return response;
    },
    hasProduct: _request => {
      const { HasProductResponse } = require('../src/proto/services_pb');
      const response = new HasProductResponse();
      return response;
    },
    sendLocation: _request => {
      const { SendLocationResponse } = require('../src/proto/services_pb');
      const response = new SendLocationResponse();
      return response;
    },
    enableLocation: _request => {
      const { EnableLocationResponse } = require('../src/proto/services_pb');
      const response = new EnableLocationResponse();
      return response;
    },
    disableLocation: _request => {
      const { DisableLocationResponse } = require('../src/proto/services_pb');
      const response = new DisableLocationResponse();
      return response;
    },
    getEmail: _request => {
      const { GetEmailResponse } = require('../src/proto/services_pb');
      const response = new GetEmailResponse();
      return response;
    }
  };
});
