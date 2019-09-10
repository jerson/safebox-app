import React from 'react';
import * as renderer from 'react-test-renderer';
import ShowPassPremium, {ShowPassPremiumProps} from './ShowPassPremium';

const props: ShowPassPremiumProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<ShowPassPremium {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<ShowPassPremium {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
