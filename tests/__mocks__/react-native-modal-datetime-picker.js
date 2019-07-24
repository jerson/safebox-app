import React from 'react';
import { View } from 'react-native';

export default class DatePicker extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return <View {...props}>{children}</View>;
  }
}
