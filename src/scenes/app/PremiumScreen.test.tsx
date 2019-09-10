import React from 'react';
import * as renderer from 'react-test-renderer';
import PremiumScreen from './PremiumScreen';

const props = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<PremiumScreen {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<PremiumScreen {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
