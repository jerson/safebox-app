export default class FBSDK {}

export const AppEventsLogger = {
  logEvent: () => {
    return jest.fn();
  }
};
