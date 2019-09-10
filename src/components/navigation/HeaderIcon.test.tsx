import React from 'react';
import * as renderer from 'react-test-renderer';
import HeaderIcon, {HeaderIconProps} from './HeaderIcon';

const props: HeaderIconProps = {
  name: 'trash',
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<HeaderIcon {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<HeaderIcon {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
