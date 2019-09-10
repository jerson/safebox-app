export default class Strings {
  static getError(e: any) {
    return Strings.capitalizeFirstLetter(
      `${e.message.split(';').join('\n\n')}`,
    );
  }
  static capitalizeFirstLetter(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
}
