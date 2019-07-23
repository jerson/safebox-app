import React from 'react';

import * as renderer from 'react-test-renderer';
import BackIcon, { BackIconProps } from './BackIcon';

const props: BackIconProps = {};

it('renders without crashing', () => {
  const snapshot = renderer.create(<BackIcon {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<BackIcon {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
