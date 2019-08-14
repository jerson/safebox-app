import React from 'react';
import * as renderer from 'react-test-renderer';
import TextError, { TextErrorProps } from './TextError';

const props: TextErrorProps = { children: 'test' };

test('renders without crashing', () => {
  const snapshot = renderer.create(<TextError {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<TextError {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
