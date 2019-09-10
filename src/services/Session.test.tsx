import Session from './Session';
import {AuthResponse, KeyPairResponse} from '../proto/services_pb';
const moment = require('moment');

test('setPassword', () => {
  Session.setPassword('test');
  expect(Session.getPassword()).toBe('test');
});

test('getAccessToken', () => {
  expect(Session.getAccessToken()).toBe('');
});
test('getPublicKey', () => {
  expect(Session.getPublicKey()).toBe('');
});

test('getPrivateKey', () => {
  expect(Session.getPrivateKey()).toBe('');
});
test('getDateExpire', () => {
  expect(Session.getDateExpire()).toStrictEqual(
    moment('2018-01-01T12:05:00.000Z').toDate(),
  );
});

test('login', () => {
  const keyPair = new KeyPairResponse();
  keyPair.setPublickey('sample');
  keyPair.setPrivatekey('sample');

  const response = new AuthResponse();
  response.setAccesstoken('test');
  response.setDate(moment().toDate());
  response.setDateexpire(moment().toDate());
  response.setKeypair(keyPair);
  Session.login(response);
  expect(Session.getAccessToken()).not.toBe('');
  expect(Session.getDateExpire()).not.toBe('');
  expect(Session.getPublicKey()).not.toBe('');
  expect(Session.getPrivateKey()).not.toBe('');
});

test('logout', () => {
  Session.logout();
  expect(Session.getPassword()).toBe('');
});
