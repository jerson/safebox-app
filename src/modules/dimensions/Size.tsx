import { Dimensions, Platform, StatusBar } from 'react-native';

export default class Size {
  static getStatusBarHeight(): number {
    return Platform.OS === 'android'
      ? StatusBar.currentHeight || 0
      : this.isiPhoneX()
      ? 44
      : 20;
  }

  static getActionBarHeight(): number {
    return Platform.OS === 'ios' ? 64 : 56;
  }

  static getHeight(): number {
    const dimensions = Dimensions.get('window');
    return dimensions.height;
  }

  static getWidth(): number {
    const dimensions = Dimensions.get('window');
    return dimensions.width;
  }

  static getVisibleHeight(): number {
    return this.getHeight() - this.getStatusBarHeight();
  }

  static getVisibleWidth(): number {
    return this.getWidth();
  }

  /**
   * Actualmente retornamos `0` porque hasta el momento
   * se esta dejando de usar en la version 2
   */
  static getHeaderBarHeight(): number {
    return 0;
  }

  static getVisibleScreenHeight(): number {
    return (
      this.getVisibleHeight() -
      this.getActionBarHeight() -
      this.getHeaderBarHeight()
    );
  }

  static getVisibleTabScreenHeight(): number {
    return this.getVisibleScreenHeight() - this.getTabBarHeight();
  }

  static getTabBarHeight(): number {
    if (this.isiPhoneX()) {
      return 65;
    }
    if (Platform.OS === 'ios') {
      return 30;
    }
    return 50;
  }

  static getBottomTabBarHeight(): number {
    if (this.isiPhoneX()) {
      return 84; // Should be aligned with getTabBarHeight
    }
    return 50;
  }

  static isiPhoneX(): boolean {
    const { height, width } = Dimensions.get('window');
    const isAllowedDevice =
      // @ts-ignore
      Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS;
    const isAlternativeDevice = height === 896 || width === 896;
    return (
      isAllowedDevice &&
      (height === 812 || width === 812 || isAlternativeDevice)
    );
  }

  static getBottomOffset(): number {
    return 0;
  }
}
