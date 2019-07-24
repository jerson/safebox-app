export default class CustomTabs {
  static CustomTabs = {
    canOpenURL: () => {
      return jest.fn();
    },
    openURL: () => {
      return jest.fn();
    }
  };
}
