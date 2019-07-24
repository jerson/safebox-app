import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import Font from '../../modules/resources/Font';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  text: {
    ...Font(),
    color: Colors.danger,
    fontSize: 13
  } as TextStyle,
  centerText: {
    textAlign: 'center',
    alignSelf: 'center'
  } as TextStyle
});

export interface TextErrorProps extends TextProps {
  children?: string | React.ReactNode;
  decoration?: boolean;
  center?: boolean;
}

export interface TextErrorState {}

export default class TextError extends React.Component<
  TextErrorProps,
  TextErrorState
> {
  static defaultProps = {
    decoration: true,
    center: false
  };

  render() {
    const { children, center, decoration, style, ...props } = this.props;

    return (
      <Text
        style={[styles.text, center && styles.centerText, style]}
        {...props}
      >
        {children}
        {decoration && '.'}
      </Text>
    );
  }
}
