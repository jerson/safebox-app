import React from 'react';
import * as renderer from 'react-test-renderer';
import Timeout, {TimeoutProps} from './Timeout';

const props: TimeoutProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<Timeout {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Timeout {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
