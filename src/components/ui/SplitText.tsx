import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text from './Text';

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
    top: 12
  } as ViewStyle,
  splitDefault: {
    backgroundColor: Colors.accent
  } as ViewStyle,
  label: {
    minWidth: 20,
    textAlign: 'center',
    color: Colors.white,
    lineHeight: 14,
    fontSize: 13
  } as TextStyle,
  labelContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 4,
    borderRadius: 10,
    backgroundColor: Colors.primary
  } as TextStyle,
  labelContainerDefault: {
    backgroundColor: Colors.accentDark
  } as TextStyle
});
export interface SplitTextProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  type?: 'Primary' | 'Default';
}

function SplitText({ title, type, style }: SplitTextProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.split, type === 'Default' && styles.splitDefault]} />
      <View
        style={[
          styles.labelContainer,
          type === 'Default' && styles.labelContainerDefault
        ]}
      >
        <Text style={styles.label}>{title}</Text>
      </View>
    </View>
  );
}

SplitText.defaultProps = {
  type: 'Primary'
};

export default SplitText;
