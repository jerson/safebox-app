import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Container, { ContainerProps } from './Container';

const props: ContainerProps = {
  style: {}
};

it('renders without crashing', () => {
  const snapshot = renderer.create(<Container {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<Container {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
