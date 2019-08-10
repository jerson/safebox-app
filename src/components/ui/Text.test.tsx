import React from 'react';
import * as renderer from 'react-test-renderer';
import Text, { TextProps } from './Text';

const props: TextProps = {
  children: 'sample'
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<Text {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Text {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
