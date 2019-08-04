import React from 'react';
import * as renderer from 'react-test-renderer';
import Locked, { LockedProps } from './Locked';

const props: LockedProps = {
  onUnlock: jest.fn()
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<Locked {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Locked {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
