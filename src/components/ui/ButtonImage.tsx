import React, { useRef } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp
} from 'react-native';
import Touchable, { TouchableProps } from './Touchable';

export interface ButtonImageProps extends TouchableProps {
  imageSource?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}

function ButtonImage(props: ButtonImageProps) {
  const touchableRef = useRef(null);

  const { imageSource, imageStyle, onPress, ...extraProps } = props;
  return (
    <Touchable ref={touchableRef} {...extraProps} onPress={onPress}>
      {imageSource && <Image style={imageStyle} source={imageSource} />}
    </Touchable>
  );
}
export default ButtonImage;
