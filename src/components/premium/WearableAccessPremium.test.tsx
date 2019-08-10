import React from 'react';
import * as renderer from 'react-test-renderer';
import WearableAccessPremium, {
  WearableAccessPremiumProps
} from './WearableAccessPremium';

const props: WearableAccessPremiumProps = {};
test('renders without crashing', () => {
  const snapshot = renderer
    .create(<WearableAccessPremium {...props} />)
    .toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer
    .create(<WearableAccessPremium {...props} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
