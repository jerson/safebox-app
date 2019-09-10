import React from 'react';
import * as renderer from 'react-test-renderer';
import AccountScreen from './AccountScreen';

jest.mock('react-navigation-hooks', () => {
  return {
    isFocused: true,
    useNavigationParam: (name: string) => {
      switch (name) {
        case 'showDelete':
          return true;

        case 'account':
          const {AccountSingle} = require('../../proto/services_pb');

          const account = new AccountSingle();
          account.setHint('sample');
          account.setLabel('sample');
          account.setId(6);
          account.setUsername('sample');
          return account;
      }
      return {};
    },
    useNavigation: () => {
      return {
        navigate: () => {
          return true;
        },
        getParam: () => {
          return true;
        },
        setParams: () => {
          return true;
        },
        addListener: () => {
          return true;
        },
      };
    },
  };
});

const props = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AccountScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AccountScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
