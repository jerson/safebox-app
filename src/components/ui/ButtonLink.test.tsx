import React from 'react';
import * as renderer from 'react-test-renderer';
import ButtonLink, {ButtonLinkProps} from './ButtonLink';

const props: ButtonLinkProps = {
  title: 'sample',
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<ButtonLink {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<ButtonLink {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
