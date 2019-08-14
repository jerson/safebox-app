import React from 'react';

import * as renderer from 'react-test-renderer';
import Loading from './Loading';

test('renders without crashing', () => {
  const snapshot = renderer.create(<Loading />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Loading />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
