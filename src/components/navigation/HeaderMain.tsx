import * as React from 'react';
import {
  Platform,
  View,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle
} from 'react-native';
import { HeaderProps } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import Size from '../../modules/dimensions/Size';

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
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  centerContainer: {
    flex: 1,
    alignItems: 'center'
  } as ViewStyle,
  leftContainer: {
    width: 60
  } as ViewStyle,
  rightContainer: {
    width: 60
  } as ViewStyle,
  logo: {
    height: 45,
    width: 96,
    marginTop: 15
  } as ImageStyle,
  image: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height + 30
  } as ImageStyle
});

export interface HeaderMainState {}

export default class HeaderMain extends React.Component<
  HeaderProps,
  HeaderMainState
> {
  state: HeaderMainState = {};

  render() {
    const { options } = this.props.scene.descriptor;
    const isEmpty =
      !options.headerLeft && !options.headerRight && !options.title;
    if (isEmpty) {
      return null;
    }

    return (
      <View
        accessibilityLabel={'header_container'}
        style={styles.globalContainer}
      >
        <Image
          accessibilityLabel={'headerlanding_cover'}
          style={styles.image}
          resizeMode={'stretch'}
          fadeDuration={400}
          source={require('../../assets/images/header-background-gradient.png')}
        />
        <View
          accessibilityLabel={'header'}
          style={[styles.container, options.headerStyle]}
        >
          <View style={styles.leftContainer}>{options.headerLeft}</View>
          <View style={styles.centerContainer}>
            <Image
              accessibilityLabel={'headerlanding_logo'}
              style={styles.logo}
              fadeDuration={200}
              resizeMode={'contain'}
              source={require('../../assets/images/logo-colorful.png')}
            />
          </View>
          <View style={styles.rightContainer}>{options.headerRight}</View>
        </View>
      </View>
    );
  }
}
