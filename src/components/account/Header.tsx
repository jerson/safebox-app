import React from 'react';
import {View, Platform, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';
import Size from '../../modules/dimensions/Size';
import Text from '../ui/Text';
import Icon from 'react-native-vector-icons/Feather';
import {HeaderProps} from 'react-navigation-stack/lib/typescript/types';

const paddingTop = Platform.OS === 'ios' ? Size.getStatusBarHeight() : 0;
const height = Size.getActionBarHeight() + paddingTop;
const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: Colors.grey1,
    overflow: 'visible',
  } as ViewStyle,
  container: {
    height,
    paddingTop,
    backgroundColor: Colors.grey1,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  shadow: {
    overflow: 'visible',
  } as ViewStyle,
  title: {
    ...Font({weight: 'Bold'}),
    textAlign: 'center',
    color: Colors.grey6,
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 2,
  } as TextStyle,
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  leftContainer: {
    width: 60,
  } as ViewStyle,
  rightContainer: {
    width: 60,
  } as ViewStyle,
  icon: {
    fontSize: 20,
  } as TextStyle,
});

export interface AccountHeaderProps {
  title: string;
  icon: string;
  tintColor: string;
}

function Header(props: HeaderProps & AccountHeaderProps) {
  const {options} = props.scene.descriptor;
  const isEmpty = !options.headerLeft && !options.headerRight && !options.title;
  if (isEmpty) {
    return null;
  }

  return (
    <View style={styles.globalContainer}>
      <View style={[styles.container, options.headerStyle, styles.shadow]}>
        <View style={styles.leftContainer}>{options.headerLeft}</View>
        <View style={styles.centerContainer}>
          <Icon
            style={[styles.icon, {color: props.tintColor}]}
            name={props.icon}
          />
          <Text allowFontScaling={false} style={styles.title}>
            {props.title}
          </Text>
        </View>
        <View style={styles.rightContainer}>{options.headerRight}</View>
      </View>
    </View>
  );
}

export default Header;
