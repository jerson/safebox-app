import React from 'react';
import { Text as TextBase, TextProps, TextStyle } from 'react-native';
import Font, {
  FontWeight,
  FontTypeStyle,
  FontFamily
} from '../../modules/resources/Font';

interface Props extends TextProps {
  weight?: FontWeight;
  textStyle?: FontTypeStyle;
  family?: FontFamily;
  size?: number;
}

const Text: React.FC<Props> = ({
  style,
  weight,
  textStyle,
  family,
  size,
  ...props
}) => {
  const customStyle = {
    fontSize: size,
    ...Font({
      weight,
      family,
      style: textStyle
    })
  } as TextStyle;
  return <TextBase style={[customStyle, style]} {...props} />;
};

export default Text;
