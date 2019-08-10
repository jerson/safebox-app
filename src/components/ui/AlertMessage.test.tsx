import React from 'react';
import * as renderer from 'react-test-renderer';
import AlertMessage, { AlertMessageProps } from './AlertMessage';

const props: AlertMessageProps = {
  message: 'sample'
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AlertMessage {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AlertMessage {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
