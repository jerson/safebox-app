import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text, { TextProps } from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  } as ViewStyle,
  split: {
    height: 1,
    backgroundColor: Colors.primaryLight,
    opacity: 0.5,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10
  } as ViewStyle,
  label: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    minWidth: 20,
    textAlign: 'center',
    color: Colors.white,
    backgroundColor: Colors.primary,
    lineHeight: 14,
    fontSize: 13,
    borderRadius: 10
  } as TextStyle
});
export interface SplitTextProps extends TextProps {
  title?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ title, style, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.split} />
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default SplitText;
