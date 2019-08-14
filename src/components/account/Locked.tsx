import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ImageStyle,
  Image,
  Modal,
  StatusBar,
  ScrollView
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import Text from '../ui/Text';
import useTextInput from '../hooks/useTextInput';
const tinyColor = require('tinycolor2');

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
  } as ViewStyle,
  scrollViewContent: {
    paddingBottom: 40,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  scrollView: {
    backgroundColor: tinyColor(Colors.accentDark)
      .setAlpha(0.8)
      .toRgbString(),
    flex: 1
  }
});

export interface LockedProps {
  onUnlock: (password: string) => void;
  visible: boolean;
}

function Locked({ visible, onUnlock }: LockedProps) {
  const [password, passwordProps] = useTextInput('');
  const onUnlockCallback = () => {
    onUnlock(password);
  };

  return (
    <Modal transparent animated animationType={'fade'} visible={visible}>
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={Colors.grey5}
      />
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={[styles.container, styles.shadow]}>
          <View style={styles.logoContent}>
            <Image
              style={styles.logo}
              resizeMode={'stretch'}
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
            autoFocus
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
      </ScrollView>
    </Modal>
  );
}

export default Locked;
