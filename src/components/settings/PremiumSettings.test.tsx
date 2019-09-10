import React from 'react';
import * as renderer from 'react-test-renderer';
import PremiumSettings, {PremiumSettingsProps} from './PremiumSettings';

const props: PremiumSettingsProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<PremiumSettings {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<PremiumSettings {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
