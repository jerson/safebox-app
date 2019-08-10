import React from 'react';
import * as renderer from 'react-test-renderer';
import LoginScreen from './LoginScreen';

const props: LoginScreen = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<LoginScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<LoginScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
