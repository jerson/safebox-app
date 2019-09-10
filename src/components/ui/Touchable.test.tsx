import React from 'react';
import * as renderer from 'react-test-renderer';
import Touchable, {TouchableProps} from './Touchable';

const props: TouchableProps = {
  onPress: jest.fn(),
  onLongPress: jest.fn(),
};

test('renders without crashing', () => {
  const snapshot = renderer.create(<Touchable {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Touchable {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
