import React from 'react';
import * as renderer from 'react-test-renderer';
import ItemPremium, {ItemPremiumProps} from './ItemPremium';

const props: ItemPremiumProps = {
  description: 'sample',
  name: 'sample',
  icon: 'trash',
  productId: 'sample',
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<ItemPremium {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<ItemPremium {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
