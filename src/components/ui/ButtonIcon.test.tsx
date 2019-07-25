import React from 'react';
import * as renderer from 'react-test-renderer';
import ButtonIcon, { ButtonIconProps } from './ButtonIcon';

const props: ButtonIconProps = {
  iconStyle: { fontSize: 20 },
  style: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: 'sample',
  onPress: jest.fn()
};

it('renders without crashing', () => {
  const snapshot = renderer.create(<ButtonIcon {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<ButtonIcon {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
