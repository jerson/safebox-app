export default class Session {
  static login(token: string) {
    this.token = token;
  }
  static logout() {
    this.token = undefined;
  }
  private static token? = '';
}
