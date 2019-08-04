import React from 'react';
import * as renderer from 'react-test-renderer';
import Item, { ItemProps } from './Item';
import { Device } from '../../proto/services_pb';
const moment = require('moment');

const item = new Device();
item.setDatecreated(moment().toDate());
item.setId(1);
item.setName('sample');
item.setUid('sample');
const props: ItemProps = {
  item
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<Item {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Item {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
