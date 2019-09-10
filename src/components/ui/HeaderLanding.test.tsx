import React from 'react';
import * as renderer from 'react-test-renderer';
import HeaderLanding, {HeaderLandingProps} from './HeaderLanding';

const props: HeaderLandingProps = {
  subtitle: 'sample',
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<HeaderLanding {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<HeaderLanding {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
