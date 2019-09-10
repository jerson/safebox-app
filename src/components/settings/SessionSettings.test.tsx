import React from 'react';
import * as renderer from 'react-test-renderer';
import SessionSettings, {SessionSettingsProps} from './SessionSettings';

const props: SessionSettingsProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<SessionSettings {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<SessionSettings {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
