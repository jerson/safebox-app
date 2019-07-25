import React from 'react';
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
  children: React.ReactNode | React.ReactNode[];
}

function Container(props: ContainerProps) {
  const { style, children, ...extraProps } = props;
  return (
    <View style={[styles.container, style]} {...extraProps}>
      {children}
    </View>
  );
}
export default Container;
