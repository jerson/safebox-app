import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  StyleProp
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import { NavigationScreenComponent } from 'react-navigation';
import Text from './Text';

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 90
  } as ImageStyle,
  logoContent: {
    backgroundColor: Colors.grey6,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Colors.accent,
    alignSelf: 'center',
    overflow: 'hidden'
  } as ViewStyle,
  logoContainer: {} as ViewStyle,
  header: {
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowColor: Colors.grey6,
    shadowOffset: { height: 4, width: 0 },
    elevation: 4
  } as ViewStyle,
  name: {
    fontSize: 35,
    color: Colors.white
  } as TextStyle,
  subtitle: {
    fontSize: 14,
    color: Colors.grey2
  } as TextStyle
});

export interface HeaderLandingProps {
  subtitle?: string;
  shadow?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}
const HeaderLanding: React.FC<HeaderLandingProps> = ({
  style,
  subtitle,
  titleStyle,
  subtitleStyle,
  shadow
}) => {
  return (
    <View style={[styles.header, shadow && styles.shadow, style]}>
      <View style={styles.logoContainer}>
        <View style={styles.logoContent}>
          <Image
            style={styles.logo}
            resizeMode={'center'}
            resizeMethod={'scale'}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>

      <Text style={[styles.name, titleStyle]}>
        Safe
        <Text weight={'Bold'}>Box</Text>
      </Text>
      <Text weight={'Light'} style={[styles.subtitle, subtitleStyle]}>
        {subtitle}
      </Text>
    </View>
  );
};

HeaderLanding.defaultProps = {
  subtitle: 'passwords always safe',
  shadow: false
};

export default HeaderLanding;
