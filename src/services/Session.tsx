import { AuthResponse } from '../proto/services_pb';

export default class Session {
  static setPassword(password: string) {
    this.password = password;
  }
  static getPassword() {
    return this.password || '';
  }
  static login(response: AuthResponse) {
    this.response = response;
  }
  static logout() {
    this.response = undefined;
  }
  static getAccessToken() {
    if (!this.response) {
      return '';
    }
    return this.response.getAccesstoken();
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
