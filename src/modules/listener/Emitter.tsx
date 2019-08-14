const Mitt = require('mitt');

const emitter = Mitt();

export default class Emitter {
  static on<T>(action: string, callback: (event: T) => void) {
    emitter.on(action, callback);
  }

  static off<T>(action: string, callback: (event: T) => void) {
    emitter.off(action, callback);
  }

  static emit<T>(action: string, data?: T) {
    emitter.emit(action, data);
  }
}
