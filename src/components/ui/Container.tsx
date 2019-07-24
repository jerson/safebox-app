import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
    flex: 1
  } as ViewStyle
});

export interface ContainerProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}

export interface ContainerState {}

export default class Container extends React.Component<
  ContainerProps,
  ContainerState
> {
  render() {
    const { style, children, ...props } = this.props;
    return (
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    );
  }
}
