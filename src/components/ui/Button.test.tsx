import React from 'react';
import * as renderer from 'react-test-renderer';
import Button, { ButtonProps } from './Button';

const props: ButtonProps = {
  title: 'Sample'
};
it('renders without crashing', () => {
  const snapshot = renderer.create(<Button {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<Button {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
