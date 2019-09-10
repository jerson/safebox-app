jest.useFakeTimers();

let mockDate;
beforeAll(() => {
  mockDate = jest.spyOn(Date, 'now').mockImplementation(() => 1514808000000);
});
afterAll(() => {
  mockDate && mockDate.mockRestore();
});
afterEach(() => {
  jest.clearAllTimers();
});

jest.mock('react-navigation-hooks', () => {
  return {
    isFocused: true,
    useNavigationParam: param => {
      return {};
    },
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        getParam: jest.fn(),
        setParams: jest.fn(),
        addListener: jest.fn(),
      };
    },
  };
});

jest.mock('@react-native-community/async-storage', () => {
  return {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    isConnected: {
      addEventListener: jest.fn(),
      fetch: jest.fn(),
    },
  };
});
