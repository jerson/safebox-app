import React from 'react';
import * as renderer from 'react-test-renderer';
import TextInputBase from './TextInputBase';

test('renders without crashing', () => {
  const snapshot = renderer.create(<TextInputBase />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<TextInputBase />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
