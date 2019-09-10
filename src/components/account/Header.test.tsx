import React from 'react';
import * as renderer from 'react-test-renderer';

import Header, {AccountHeaderProps} from './Header';
import Colors from '../../modules/constants/Colors';
import {View} from 'react-native';
import {HeaderProps} from 'react-navigation-stack/lib/typescript/types';

const props: HeaderProps & AccountHeaderProps = {
  mode: {} as any,
  scene: {descriptor: {options: {headerLeft: <View />}}} as any,
  title: 'sample',
  icon: 'trash',
  tintColor: Colors.primary,
} as any;
test('renders without crashing', () => {
  const snapshot = renderer.create(<Header {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Header {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
