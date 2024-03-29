import React from 'react';
import { View, Platform, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { HeaderProps } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';
import Size from '../../modules/dimensions/Size';
import Text from '../ui/Text';

const paddingTop = Platform.OS === 'ios' ? Size.getStatusBarHeight() : 0;
const height = Size.getActionBarHeight() + paddingTop;
const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: Colors.grey1,
    overflow: 'visible'
  } as ViewStyle,
  container: {
    height,
    paddingTop,
    backgroundColor: Colors.grey1,
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  shadow: {
    overflow: 'visible'
  } as ViewStyle,
  title: {
    ...Font({ weight: 'Bold' }),
    textAlign: 'center',
    color: Colors.grey6,
    fontSize: 18,
    marginBottom: 2
  } as TextStyle,
  centerContainer: {
    flex: 1,
    justifyContent: 'center'
  } as ViewStyle,
  leftContainer: {
    width: 60
  } as ViewStyle,
  rightContainer: {
    width: 60
  } as ViewStyle
});

function Header(props: HeaderProps) {
  const { options } = props.scene.descriptor;
  const isEmpty = !options.headerLeft && !options.headerRight && !options.title;
  if (isEmpty) {
    return null;
  }

  return (
    <View style={styles.globalContainer}>
      <View style={[styles.container, options.headerStyle, styles.shadow]}>
        <View style={styles.leftContainer}>{options.headerLeft}</View>
        <View style={styles.centerContainer}>
          <Text allowFontScaling={false} style={styles.title}>
            {options.title}
          </Text>
        </View>
        <View style={styles.rightContainer}>{options.headerRight}</View>
      </View>
    </View>
  );
}

export default Header;
