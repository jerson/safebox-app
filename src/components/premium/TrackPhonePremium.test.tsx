import React from 'react';
import * as renderer from 'react-test-renderer';
import TrackPhonePremium, {TrackPhonePremiumProps} from './TrackPhonePremium';

const props: TrackPhonePremiumProps = {};
test('renders without crashing', () => {
  const snapshot = renderer.create(<TrackPhonePremium {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<TrackPhonePremium {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
