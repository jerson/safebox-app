export default class Log {
  static exception(tag: string, method: string, error: any) {
    let stack = '';
    if (error) {
      if (error.stack) {
        if (error.message) {
          stack = error.message + '\n\n';
        }
        stack += error.stack.toString();
      } else {
        stack = error.toString();
      }
    }

    const message = `${tag} - ${method} => ${stack}`;

    if (__DEV__) {
      console.warn(message);
      return;
    }
  }

  static format(type: string, tag: string, method?: string, params?: string[]) {
    return `[${type.toUpperCase()}] ${tag} - ${method} => ${
      params ? JSON.stringify(params) : ''
    }`;
  }

  static debug(tag: string, method?: string, ...params: any[]) {
    if (__DEV__) {
      console.debug(tag, method, ...params);
      return;
    }
  }

  static log(tag: string, method?: string, ...params: any[]) {
    if (__DEV__) {
      console.log(tag, method, ...params);
      return;
    }
  }

  static info(tag: string, method?: string, ...params: any[]) {
    if (__DEV__) {
      console.info(tag, method, ...params);
      return;
    }
  }

  static warn(tag: string, method?: string, ...params: any[]) {
    if (__DEV__) {
      console.warn(tag, method, ...params);
      return;
    }
  }

  static error(tag: string, method?: string, ...params: any[]) {
    if (__DEV__) {
      console.error(tag, method, ...params);
      return;
    }
  }
}
