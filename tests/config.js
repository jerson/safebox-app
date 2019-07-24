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

jest.mock('@react-native-community/async-storage', () => {
  return {
    default: {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn()
    }
  };
});

jest.mock('@react-native-community/netinfo', () => {
  return {
    default: {
      isConnected: {
        addEventListener: jest.fn(),
        fetch: jest.fn()
      }
    }
  };
});

jest.mock('LayoutAnimation');
jest.mock('InteractionManager', () => {
  const ActualInteractionManager = require.requireActual('InteractionManager');
  return {
    ...ActualInteractionManager,
    runAfterInteractions: callback => {
      callback && callback();
      return {
        then: () => {
          return jest.fn();
        },
        done: () => {
          return true;
        },
        cancel: () => {
          return true;
        }
      };
    }
  };
});

jest.mock('Animated', () => {
  const ActualAnimated = require.requireActual('Animated');
  return {
    ...ActualAnimated,
    timing: (value, config) => {
      return {
        start: callback => {
          value.setValue(config.toValue);
          callback && callback();
        },
        stop: callback => {
          callback && callback();
        }
      };
    },
    spring: (value, config) => {
      return {
        start: callback => {
          value.setValue(config.toValue);
          callback && callback();
        },
        stop: callback => {
          callback && callback();
        }
      };
    },
    parallel: (animations, config) => {
      let doneCount = 0;
      const hasEnded = {};
      const stopTogether = !(config && config.stopTogether === false);
      const result = {
        start: callback => {
          if (doneCount === animations.length) {
            callback && callback({ finished: true });
            return;
          }
          animations.forEach((animation, idx) => {
            const cb = function(endResult) {
              hasEnded[idx] = true;
              doneCount++;
              if (doneCount === animations.length) {
                doneCount = 0;
                callback && callback(endResult);
                return;
              }
              if (endResult && !endResult.finished && stopTogether) {
                result.stop();
              }
            };
            if (!animation) {
              cb({ finished: true });
            } else {
              animation.start(cb);
            }
          });
        },
        stop: () => {
          animations.forEach((animation, idx) => {
            !hasEnded[idx] && animation.stop();
            hasEnded[idx] = true;
          });
        }
      };
      return result;
    }
  };
});

jest.mock('../src/Config.tsx', () => {
  return {
    default: {
      server: {
        url: 'https://safebox.jerson.dev'
      },
      settings: {
        keyOptions: {
          RSABits: 2048,
          cipher: 'aes256',
          compression: 'zlib',
          compressionLevel: 9,
          hash: 'sha512'
        }
      }
    }
  };
});
