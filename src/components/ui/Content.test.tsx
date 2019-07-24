import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Content, { ContentProps } from './Content';

const props: ContentProps = {
  style: {}
};

it('renders without crashing', () => {
  const snapshot = renderer.create(<Content {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<Content {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
