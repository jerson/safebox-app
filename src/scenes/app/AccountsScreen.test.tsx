import React from 'react';
import * as renderer from 'react-test-renderer';
import AccountsScreen from './AccountsScreen';

const props: AccountsScreen = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AccountsScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AccountsScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
