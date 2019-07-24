import React from 'react';

import * as renderer from 'react-test-renderer';
import LoadingOverlay, { LoadingOverlayProps } from './LoadingOverlay';

const props: LoadingOverlayProps = {
  isLoading: true
};

it('render just views', () => {
  const snapshot = renderer.create(<LoadingOverlay {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
it('render just views !isLoading', () => {
  const snapshot = renderer
    .create(<LoadingOverlay {...props} isLoading={false} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
