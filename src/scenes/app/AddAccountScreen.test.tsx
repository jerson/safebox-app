import React from 'react';
import * as renderer from 'react-test-renderer';
import AddAccountScreen from './AddAccountScreen';

const props: AddAccountScreen = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AddAccountScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AddAccountScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
