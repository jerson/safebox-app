import { AuthResponse } from '../proto/services_pb';
import Emitter from '../modules/listener/Emitter';
const moment = require('moment');

export default class Session {
  static setPassword(password: string) {
    this.password = password;
  }
  static getPassword() {
    return this.password || '';
  }
  static login(response: AuthResponse) {
    this.response = response;
    Emitter.emit('onSession', true);
  }
  static logout() {
    this.response = undefined;
    this.password = undefined;
    Emitter.emit('onSession', false);
  }
  static getAccessToken() {
    if (!this.response) {
      return '';
    }
    return this.response.getAccesstoken();
  }
  static getDateExpire() {
    if (!this.response) {
      return moment()
        .add(300, 'second')
        .toDate();
    }
    return moment(this.response.getDateexpire()).toDate();
  }
  static getPublicKey() {
    if (!this.response) {
      return '';
    }
    const keyPair = this.response.getKeypair();
    if (!keyPair) {
      return '';
    }
    return keyPair.getPublickey();
  }
  static getPrivateKey() {
    if (!this.response) {
      return '';
    }
    const keyPair = this.response.getKeypair();
    if (!keyPair) {
      return '';
    }
    return keyPair.getPrivatekey();
  }
  private static response?: AuthResponse;
  private static password?: string;
}
