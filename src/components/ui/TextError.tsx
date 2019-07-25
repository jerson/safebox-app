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
