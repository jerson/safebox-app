import React from 'react';
import * as renderer from 'react-test-renderer';
import List, {ListProps} from './List';

const props: ListProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<List {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<List {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
