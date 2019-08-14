import React from 'react';
import { StyleSheet, TextProps, TextStyle } from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
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

function TextError(props: TextErrorProps) {
  const { children, center, decoration, style, ...extraProps } = props;

  return (
    <Text
      style={[styles.text, center && styles.centerText, style]}
      {...extraProps}
    >
      {children}
      {decoration && '.'}
    </Text>
  );
}

TextError.defaultProps = {
  decoration: true,
  center: false
};

export default TextError;
