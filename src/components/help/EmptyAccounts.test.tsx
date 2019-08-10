import React from 'react';
import * as renderer from 'react-test-renderer';
import EmptyAccounts from './EmptyAccounts';

const props = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<EmptyAccounts {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<EmptyAccounts {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
