import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ImageStyle,
  Image
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import { useNavigation } from 'react-navigation-hooks';
import Button from '../ui/Button';
import Text from '../ui/Text';

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
    overflow: 'hidden',
    marginBottom: 10
  } as ViewStyle,
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  } as ViewStyle,
  button: {
    marginTop: 20
  } as ViewStyle,
  description: {
    textAlign: 'center',
    color: Colors.grey5
  } as TextStyle
});

function EmptyAccounts() {
  const { navigate } = useNavigation();
  const goToAdd = () => {
    navigate('AddAccount');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <Image
          style={styles.logo}
          resizeMode={'stretch'}
          source={require('../../assets/images/logo.png')}
        />
      </View>

      <Text style={styles.description} weight={'Light'}>
        {'The first thing you should do is add a '}
        <Text weight={'SemiBold'}>{'Secret account'}</Text>
      </Text>

      <Button
        icon={'plus-circle'}
        style={styles.button}
        title={'Add first secret account'}
        typeColor={'primaryLight'}
        onPress={goToAdd}
      />
    </View>
  );
}

export default EmptyAccounts;
