import React from 'react';
import * as renderer from 'react-test-renderer';
import Container, {ContainerProps} from './Container';
import {View} from 'react-native';

const props: ContainerProps = {
  style: {},
  children: <View />,
};

test('renders without crashing', () => {
  const snapshot = renderer.create(<Container {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Container {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
