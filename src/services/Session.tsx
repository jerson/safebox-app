export default class Session {
  static login(token: string) {
    this.token = token;
  }
  static logout() {
    this.token = undefined;
  }
  static getAccessToken() {
    return this.token || "";
  }
  private static token? = "";
}
