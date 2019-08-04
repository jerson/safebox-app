import React from 'react';
import * as renderer from 'react-test-renderer';
import SettingsScreen from './SettingsScreen';

const props: SettingsScreen = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<SettingsScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<SettingsScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
