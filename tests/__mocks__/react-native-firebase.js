export default class Firebase {
  static notifications() {
    return {
      scheduleNotification: jest.fn(),
      getInitialNotification: jest.fn(),
      onNotificationOpened: jest.fn(),
      removeDeliveredNotification: jest.fn(),
      removeAllDeliveredNotifications: jest.fn()
    };
  }
  static messaging() {
    return {
      getToken: jest.fn(),
      onTokenRefresh: jest.fn(),
      hasPermission: jest.fn(),
      requestPermission: jest.fn()
    };
  }

  static config() {
    return {
      enableDeveloperMode: jest.fn(),
      getValue: jest.fn(),
      fetch: jest.fn(),
      activateFetched: jest.fn()
    };
  }

  static app() {
    return {
      onReady: jest.fn()
    };
  }
  static crashlytics() {
    return {
      crash: jest.fn(),
      log: jest.fn(),
      recordError: (code, message) => {
        console.warn('[Crashlytics].recordError', '»', code, message);
      }
    };
  }
  static analytics() {
    return {
      logEvent: (message, params) => {
        console.info('[Analytics].logEvent', '»', message);
      },
      setCurrentScreen: screen => {
        console.log('[Analytics].setCurrentScreen', '»', screen);
      }
    };
  }
}
