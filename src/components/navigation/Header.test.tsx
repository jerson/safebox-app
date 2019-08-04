import React from 'react';
import * as renderer from 'react-test-renderer';

import Header from './Header';
import { HeaderProps } from 'react-navigation';
import { View } from 'react-native';

const props: HeaderProps = {
  mode: {} as any,
  scene: {
    descriptor: { options: { headerLeft: <View />, title: 'sample' } }
  } as any
} as any;
test('renders without crashing', () => {
  const snapshot = renderer.create(<Header {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Header {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
