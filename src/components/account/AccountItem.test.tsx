import React from 'react';
import * as renderer from 'react-test-renderer';

import AccountItem, {AccountItemProps} from './AccountItem';
import {AccountSingle} from '../../proto/services_pb';

const item = new AccountSingle();
item.setHint('sample');
item.setLabel('sample');
item.setUsername('sample');

const props: AccountItemProps = {
  item,
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<AccountItem {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<AccountItem {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
