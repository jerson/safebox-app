import React from 'react';
import * as renderer from 'react-test-renderer';
import NotAvailableDevice from './NotAvailableDevice';

const props = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<NotAvailableDevice {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<NotAvailableDevice {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
