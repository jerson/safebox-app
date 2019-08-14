import React from 'react';
import { View } from 'react-native';

export default class LottieView extends React.Component {
  play = () => {
    return true;
  };
  render() {
    const { children, ...props } = this.props;
    return <View {...props}>{children}</View>;
  }
}
