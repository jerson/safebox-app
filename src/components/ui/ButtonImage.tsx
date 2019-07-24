import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity
} from 'react-native';
import Touchable, { TouchableProps } from './Touchable';

export interface ButtonImageProps extends TouchableProps {
  imageSource?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
}

export interface ButtonImageState {}

export default class ButtonImage extends React.Component<
  ButtonImageProps,
  ButtonImageState
> {
  buttonRef!: TouchableOpacity | null;

  getButtonRef() {
    return this.buttonRef;
  }

  render() {
    const { imageSource, imageStyle, onPress, ...props } = this.props;
    return (
      <Touchable
        ref={ref => {
          this.buttonRef = ref;
        }}
        {...props}
        onPress={onPress}
      >
        {imageSource && <Image style={imageStyle} source={imageSource} />}
      </Touchable>
    );
  }
}
