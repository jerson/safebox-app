import React from 'react';

import * as renderer from 'react-test-renderer';
import Loading from './Loading';

it('renders without crashing', () => {
  const snapshot = renderer.create(<Loading />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<Loading />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
