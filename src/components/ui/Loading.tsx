import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';

const styles = StyleSheet.create({
  marginSmall: {
    padding: 5
  } as ViewStyle,
  marginMedium: {
    padding: 10
  } as ViewStyle,
  marginLarge: {
    padding: 20
  } as ViewStyle
});

export interface LoadingProps extends ActivityIndicatorProps {
  margin?: 'small' | 'medium' | 'large';
}

function Loading(props: LoadingProps) {
  const { color, style, margin, size, ...extraProps } = props;
  return (
    <View
      style={[
        margin === 'small' && styles.marginSmall,
        margin === 'medium' && styles.marginMedium,
        margin === 'large' && styles.marginLarge,
        style
      ]}
    >
      <ActivityIndicator color={color} size={size} {...extraProps} />
    </View>
  );
}

Loading.defaultProps = {
  color: Colors.primary,
  margin: 'none'
};

export default Loading;
