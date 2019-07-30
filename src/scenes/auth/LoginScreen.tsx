import React, { useState, useRef, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import HeaderLanding from '../../components/ui/HeaderLanding';
import TextInput, { TextInputRef } from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import SplitText from '../../components/ui/SplitText';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import useTextInput from '../../components/hooks/useTextInput';
import {
  LoginRequest,
  LoginDeviceRequest,
  AuthResponse
} from '../../proto/services_pb';
import Client from '../../services/Client';
import Session from '../../services/Session';
import Strings from '../../modules/format/Strings';
import AlertMessage from '../../components/ui/AlertMessage';
import useAnimatedState from '../../components/hooks/useAnimatedState';
import { useNavigation } from 'react-navigation-hooks';
import SettingsStorage from '../../modules/storage/SettingsStorage';
import Log from '../../modules/log/Log';
import Biometrics from 'react-native-biometrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary
  } as ViewStyle,
  scrollView: {
    flex: 1
  } as ViewStyle,
  safeArea: {
    flex: 1
  } as ViewStyle,
  headerLanding: {
    marginTop: 20,
    marginBottom: 20
  } as ViewStyle,
  textInput: {
    borderColor: Colors.primary,
    borderWidth: 1
  } as ViewStyle,
  textInputContainer: {
    marginBottom: 0
  } as ViewStyle,
  form: {
    width: 280,
    marginBottom: 20,
    alignSelf: 'center'
  } as ViewStyle,
  button: {
    marginTop: 20
  } as ViewStyle,
  splitText: {
    marginTop: 20
  } as ViewStyle,
  buttonLogin: {
    flex: 1,
    marginLeft: 10
  } as ViewStyle,
  buttonBiometric: {
    paddingLeft: 15
  } as ViewStyle,
  buttonRow: {
    flexDirection: 'row'
  } as ViewStyle
});

const TAG = '[LoginScreen]';
function LoginScreen() {
  const { navigate } = useNavigation();

  const [hasBiometric, setHasBiometric] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState('');

  const usernameRef = useRef<TextInputRef>(null);
  const passwordRef = useRef<TextInputRef>(null);

  const [username, usernameProps] = useTextInput('');
  const [password, passwordProps] = useTextInput('');

  const checkSettings = async () => {
    try {
      const settings = await SettingsStorage.getFirst();
      const hasBiometric = !!settings.biometricPublicKey;
      hasBiometric && startBiometric();
      setHasBiometric(hasBiometric);
    } catch (e) {
      Log.warn(TAG, 'checkSettings', e);
    }
  };
  useEffect(() => {
    checkSettings();
  }, []);

  const startBiometric = async () => {
    try {
      const success = await Biometrics.simplePrompt('Login');
      if (success) {
        setError('');
        setIsLoading(true);
        requestAnimationFrame(() => {
          submitWithDevice();
        });
      }
    } catch (e) {
      Log.warn(TAG, 'startBiometric', e);
    }
  };

  const isValid = () => {
    const isValid = [!!username, !!password].every(value => value);
    if (!isValid) {
      setError('Complete missing fields');
    }
    return isValid;
  };

  const submitWithDevice = async () => {
    try {
      const settings = await SettingsStorage.getFirst();

      const request = new LoginDeviceRequest();
      request.setPublickey(settings.biometricPublicKey);

      const response = await Client.loginWithDevice(request);
      processAuthReponse(response);
      return;
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  const submit = async () => {
    try {
      const request = new LoginRequest();
      request.setUsername(username);
      request.setPassword(password);

      const response = await Client.login(request);
      processAuthReponse(response);
      return;
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  const processAuthReponse = (response: AuthResponse) => {
    Session.login(response);
    Session.setPassword(password);
    navigate('Accounts');
  };
  const tryToSubmit = () => {
    if (!isValid()) {
      return;
    }

    setError('');
    setIsLoading(true);
    requestAnimationFrame(() => {
      submit();
    });
  };

  const goToRegister = () => {
    navigate('Register');
  };

  return (
    <Container style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          minHeight: Size.getVisibleHeight()
        }}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            <KeyboardAvoidingView
              behavior={'padding'}
              enabled={Platform.OS === 'ios'}
            >
              <HeaderLanding style={styles.headerLanding} />
              <View style={styles.form}>
                {!!error && <AlertMessage message={error} />}
                <TextInput
                  icon={'user'}
                  placeholder={'Username'}
                  keyboardType={'default'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  autoCompleteType={'username'}
                  returnKeyType={'next'}
                  containerStyle={styles.textInputContainer}
                  style={styles.textInput}
                  ref={usernameRef}
                  onSubmitEditing={() => {
                    passwordRef.current && passwordRef.current.focus();
                  }}
                  {...usernameProps}
                />
                <TextInput
                  icon={'lock'}
                  placeholder={'Password'}
                  secureTextEntry
                  keyboardType={'default'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  autoCompleteType={'password'}
                  returnKeyType={'done'}
                  containerStyle={styles.textInputContainer}
                  style={styles.textInput}
                  ref={passwordRef}
                  blurOnSubmit
                  {...passwordProps}
                />

                {hasBiometric && (
                  <View style={[styles.button, styles.buttonRow]}>
                    <Button
                      typeColor={'accentDark'}
                      icon={'target'}
                      style={styles.buttonBiometric}
                      onPress={startBiometric}
                    />
                    <Button
                      style={styles.buttonLogin}
                      isLoading={isLoading}
                      typeColor={'primaryLight'}
                      title={'Sign In'}
                      onPress={tryToSubmit}
                    />
                  </View>
                )}
                {!hasBiometric && (
                  <Button
                    style={styles.button}
                    isLoading={isLoading}
                    typeColor={'primaryLight'}
                    title={'Sign In'}
                    onPress={tryToSubmit}
                  />
                )}
                <SplitText style={styles.splitText} title={'or'} />
                <Button
                  style={styles.button}
                  typeColor={'accentDark'}
                  title={'Create account'}
                  onPress={goToRegister}
                />
              </View>
            </KeyboardAvoidingView>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

LoginScreen.navigationOptions = {
  headerLeft: null,
  headerRight: null,
  title: null
};

export default LoginScreen;
