import React from 'react';
import {
  Text as TextBase,
  TextProps as TextBaseProps,
  TextStyle,
  StyleSheet
} from 'react-native';
import Font, {
  FontWeight,
  FontTypeStyle,
  FontFamily
} from '../../modules/resources/Font';

const styles = StyleSheet.create({
  text: {} as TextStyle
});

export interface TextProps extends TextBaseProps {
  weight?: FontWeight;
  textStyle?: FontTypeStyle;
  family?: FontFamily;
  size?: number;
  children: string | React.ReactNode;
}

function Text({ style, weight, textStyle, family, size, ...props }: TextProps) {
  const customStyle = {
    fontSize: size,
    ...Font({
      weight,
      family,
      style: textStyle
    })
  } as TextStyle;
  return <TextBase style={[customStyle, styles.text, style]} {...props} />;
}

export default Text;
