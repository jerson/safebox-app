import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import { NavigationScreenComponent } from 'react-navigation';
import Text from './Text';

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  } as ImageStyle,
  logoContent: {
    backgroundColor: Colors.grey6,
    borderRadius: 24,
    elevation: 3,
    alignSelf: 'center'
  } as ViewStyle,
  logoContainer: {
    bottom: -50,
    position: 'absolute',
    left: 0,
    right: 0
  } as ViewStyle,
  header: {
    overflow: 'visible',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 120
  } as ViewStyle,
  title: {
    fontSize: 25,
    marginTop: 25,
    color: Colors.white
  } as TextStyle
});

const HeaderLanding: React.FC & NavigationScreenComponent<any> = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Safe
        <Text weight={'Bold'}>Box</Text>
      </Text>

      <View style={styles.logoContainer}>
        <View style={styles.logoContent}>
          <Image
            style={styles.logo}
            resizeMode={'center'}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderLanding;
