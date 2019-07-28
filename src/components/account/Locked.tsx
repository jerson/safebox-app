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
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import Text from '../ui/Text';
import useTextInput from '../hooks/useTextInput';

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowColor: Colors.grey6,
    shadowOffset: { height: 4, width: 0 },
    elevation: 4
  } as ViewStyle,
  container: {
    padding: 20,
    margin: 20,
    marginBottom: 40,
    maxWidth: 280,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'visible'
  } as ViewStyle,
  textInput: {
    marginTop: 0,
    borderColor: Colors.primaryLight
  } as ViewStyle,
  button: {} as ViewStyle,
  description: {
    fontSize: 13,
    color: Colors.grey6,
    textAlign: 'justify'
  } as TextStyle,
  help: {
    marginTop: 5,
    fontSize: 12,
    color: Colors.grey5
  } as TextStyle,
  logo: {
    width: 70,
    height: 70
  } as ImageStyle,
  logoContent: {
    backgroundColor: Colors.grey6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.accent,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: 10
  } as ViewStyle
});

export interface LockedProps {
  onUnlock: (password: string) => void;
}

function Locked({ onUnlock }: LockedProps) {
  const [password, passwordProps] = useTextInput('');
  const onUnlockCallback = () => {
    onUnlock(password);
  };

  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.logoContent}>
        <Image
          style={styles.logo}
          resizeMode={'center'}
          resizeMethod={'scale'}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <Text style={styles.description}>
        To continue you must enter the password with which you Sign In to
        <Text style={{ color: Colors.primaryLight }}>
          {' '}
          Safe<Text weight={'Bold'}>Box</Text>
        </Text>
        .
      </Text>
      <TextInput
        icon={'lock'}
        secureTextEntry
        keyboardType={'default'}
        autoCapitalize={'none'}
        autoCorrect={false}
        autoCompleteType={'password'}
        returnKeyType={'done'}
        blurOnSubmit
        onSubmitEditing={onUnlockCallback}
        style={styles.textInput}
        placeholder={'SafeBox password'}
        help={
          <Text style={styles.help}>
            SafeBox password is used to unlock your secret passwords.
          </Text>
        }
        {...passwordProps}
      />
      <Button
        icon={'unlock'}
        style={styles.button}
        onPress={onUnlockCallback}
        typeColor={'primaryLight'}
        title={'Unlock passwords'}
      />
    </View>
  );
}

export default Locked;