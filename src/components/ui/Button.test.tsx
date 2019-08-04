import React from 'react';
import * as renderer from 'react-test-renderer';

import Button, { ButtonProps } from './Button';

const props: ButtonProps = {
  title: 'Sample',
  onPress: jest.fn()
};
test('renders without crashing', () => {
  const snapshot = renderer.create(<Button {...props} />).toJSON();
  expect(snapshot).toBeTruthy();
});

test('render just views', () => {
  const snapshot = renderer.create(<Button {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('isLoading', async () => {
  const customProps: ButtonProps = {
    ...props,
    isLoading: true
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('disabled', async () => {
  const customProps: ButtonProps = {
    ...props,
    disabled: true
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('allowOnPress', async () => {
  const customProps: ButtonProps = {
    ...props,
    allowOnPress: false
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('icon', async () => {
  const customProps: ButtonProps = {
    ...props,
    icon: 'trash'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
test('light', async () => {
  const customProps: ButtonProps = {
    ...props,
    light: true
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
test('small', async () => {
  const customProps: ButtonProps = {
    ...props,
    small: true
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('typeColor:primary', async () => {
  const customProps: ButtonProps = {
    ...props,
    typeColor: 'primary'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
test('typeColor:secondary', async () => {
  const customProps: ButtonProps = {
    ...props,
    typeColor: 'secondary'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
test('typeColor:accentDark', async () => {
  const customProps: ButtonProps = {
    ...props,
    typeColor: 'accentDark'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
test('typeColor:accent', async () => {
  const customProps: ButtonProps = {
    ...props,
    typeColor: 'accent'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('typeColor:danger', async () => {
  const customProps: ButtonProps = {
    ...props,
    typeColor: 'accent'
  };
  const snapshot = renderer.create(<Button {...customProps} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('button_touchable press', async () => {
  const instance = renderer.create(<Button {...props} />).root;

  const element = instance.findByProps({ testID: 'button_touchable' });
  element.props.onPress();

  expect(props.onPress).toBeCalled();
});

test('button_touchable press disabled', async () => {
  const customProps: ButtonProps = {
    ...props,
    onPress: undefined,
    disabled: true,
    allowOnPress: false
  };
  const instance = renderer.create(<Button {...customProps} />).root;

  const element = instance.findByProps({ testID: 'button_touchable' });

  expect(typeof element.props.onPress).toBe('undefined');
});
