import React from 'react';
import * as renderer from 'react-test-renderer';
import RegisterScreen from './RegisterScreen';

const props = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<RegisterScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<RegisterScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
