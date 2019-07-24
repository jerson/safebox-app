import React from 'react';
import * as renderer from 'react-test-renderer';
import ButtonImage, { ButtonImageProps } from './ButtonImage';

const props: ButtonImageProps = {
  imageStyle: { width: 20, height: 20 },
  style: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageSource: 5,
  onPress: jest.fn()
};

it('renders without crashing', () => {
  const snapshot = renderer.create(<ButtonImage {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

it('render just views', () => {
  const snapshot = renderer.create(<ButtonImage {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
