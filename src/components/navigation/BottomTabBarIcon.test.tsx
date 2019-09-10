import React from 'react';
import * as renderer from 'react-test-renderer';

import BottomTabBarIcon, {BottomTabBarIconProps} from './BottomTabBarIcon';

const props: BottomTabBarIconProps = {
  focused: true,
  accessibilityLabel: 'test',
  onLongPress: jest.fn(),
  onPress: jest.fn(),
  style: {},
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<BottomTabBarIcon {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<BottomTabBarIcon {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
