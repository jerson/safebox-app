import React from 'react';
import * as renderer from 'react-test-renderer';
import AccountScreen from './AccountScreen';

const props: AccountScreen = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AccountScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AccountScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
