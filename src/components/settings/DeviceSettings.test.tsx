import React from 'react';
import * as renderer from 'react-test-renderer';
import DeviceSettings, { DeviceSettingsProps } from './DeviceSettings';

const props: DeviceSettingsProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<DeviceSettings {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<DeviceSettings {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
