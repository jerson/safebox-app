export default class Strings {
  static getError(e: any) {
    return `- ${e.message.split(';').join('\n\n- ')}`;
  }
}
