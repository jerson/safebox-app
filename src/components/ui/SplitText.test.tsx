import React from 'react';
import * as renderer from 'react-test-renderer';
import SplitText, { SplitTextProps } from './SplitText';

const props: SplitTextProps = {
  title: 'sample'
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<SplitText {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<SplitText {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
