export default class RNFS {
  static DocumentDirectoryPath = 'demo';
  static downloadFile(options) {
    return {
      promise: async () => {
        return options;
      }
    };
  }
}
