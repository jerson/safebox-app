import React from 'react';
import * as renderer from 'react-test-renderer';
import Content, {ContentProps} from './Content';
import {View} from 'react-native';

const props: ContentProps = {
  style: {},
  children: <View />,
};

test('renders without crashing', () => {
  const snapshot = renderer.create(<Content {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Content {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
