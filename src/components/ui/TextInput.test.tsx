import React from 'react';
import * as renderer from 'react-test-renderer';
import TextInput from './TextInput';

test('renders without crashing', () => {
  const snapshot = renderer.create(<TextInput />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<TextInput />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
