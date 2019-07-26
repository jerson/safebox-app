import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import TextInput, { TextInputRef } from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import useTextInput from '../../components/hooks/useTextInput';
import Client from '../../services/Client';
import {
  AddAccountRequest,
  Account,
  AccountSingle
} from '../../proto/services_pb';
import OpenPGP from 'react-native-fast-openpgp';

import Session from '../../services/Session';
import Strings from '../../modules/format/Strings';
import AlertMessage from '../../components/ui/AlertMessage';
import useAnimatedState from '../../components/hooks/useAnimatedState';
import SplitText from '../../components/ui/SplitText';
import useIconLabel from '../../components/hooks/useIconLabel';

import { useNavigation } from 'react-navigation-hooks';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1
  } as ViewStyle,
  scrollView: {
    flex: 1
  } as ViewStyle,
  safeArea: {
    flex: 1
  } as ViewStyle,
  textInput: {} as ViewStyle,
  textInputContainer: {
    marginBottom: 0
  } as ViewStyle,
  form: {
    width: 280,
    marginBottom: 60,
    alignSelf: 'center'
  } as ViewStyle,
  button: {
    marginTop: 20
  } as ViewStyle,
  splitView: {
    marginTop: 20
  } as ViewStyle
});

function AddAccountScreen() {
  const { replace } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState('');

  const labelRef = useRef<TextInputRef>(null);
  const hintRef = useRef<TextInputRef>(null);
  const usernameRef = useRef<TextInputRef>(null);
  const passwordRef = useRef<TextInputRef>(null);
  const repeatPasswordRef = useRef<TextInputRef>(null);

  const [label, labelProps] = useTextInput('');
  const [hint, hintProps] = useTextInput('');
  const [username, usernameProps] = useTextInput('');
  const [password, passwordProps] = useTextInput('');
  const [repeatPassword, repeatPasswordProps] = useTextInput('');

  const isValid = () => {
    const isValid = [!!label, !!username, !!password, !!repeatPassword].every(
      value => value
    );
    if (!isValid) {
      setError('Complete missing fields');
      return false;
    }
    if (password !== repeatPassword) {
      setError('Passwords must match');
      return false;
    }
    return isValid;
  };

  const encode = (input: string) => {
    return OpenPGP.encrypt(input, Session.getPublicKey());
  };

  const submit = async () => {
    try {
      const passwordEncoded = await encode(password);

      const account = new Account();
      account.setHint(hint);
      account.setUsername(username);
      account.setPassword(passwordEncoded);
      account.setLabel(label);

      const request = new AddAccountRequest();
      request.setAccount(account);

      const response = await Client.addAccount(request);

      const accountSingle = new AccountSingle();
      accountSingle.setId(response.getId());
      accountSingle.setHint(hint);
      accountSingle.setUsername(username);
      accountSingle.setLabel(label);

      replace('Account', { account: accountSingle });
      return;
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };
  const tryToSubmit = () => {
    if (!isValid()) {
      return;
    }

    setIsLoading(true);
    requestAnimationFrame(async () => {
      await submit();
    });
  };

  const labelExtraProps = useIconLabel(label);
  return (
    <Container style={styles.container}>
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={Colors.grey2}
      />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          minHeight: Size.getVisibleTabScreenHeight()
        }}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            <View style={styles.form}>
              {!!error && <AlertMessage message={error} />}
              <TextInput
                placeholder={'Label'}
                keyboardType={'default'}
                autoCapitalize={'sentences'}
                autoCorrect
                returnKeyType={'next'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                ref={labelRef}
                onSubmitEditing={() => {
                  hintRef.current && hintRef.current.focus();
                }}
                {...labelProps}
                {...labelExtraProps}
              />
              <TextInput
                icon={'feather'}
                placeholder={'Hint (optional)'}
                keyboardType={'default'}
                autoCapitalize={'sentences'}
                autoCorrect
                returnKeyType={'next'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                ref={hintRef}
                onSubmitEditing={() => {
                  usernameRef.current && usernameRef.current.focus();
                }}
                {...hintProps}
              />
              <SplitText
                type={'Default'}
                style={styles.splitView}
                title={'Sensitive credentials'}
              />
              <TextInput
                icon={'user'}
                placeholder={'Username'}
                keyboardType={'default'}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoCompleteType={'off'}
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
                autoCompleteType={'off'}
                returnKeyType={'next'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                ref={passwordRef}
                onSubmitEditing={() => {
                  repeatPasswordRef.current &&
                    repeatPasswordRef.current.focus();
                }}
                {...passwordProps}
              />
              <TextInput
                icon={'lock'}
                placeholder={'Repeat password'}
                secureTextEntry
                keyboardType={'default'}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoCompleteType={'off'}
                returnKeyType={'done'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                ref={repeatPasswordRef}
                blurOnSubmit
                {...repeatPasswordProps}
              />

              <Button
                isLoading={isLoading}
                style={styles.button}
                typeColor={'primaryLight'}
                title={'Add secret account'}
                onPress={tryToSubmit}
              />
            </View>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

AddAccountScreen.navigationOptions = () => ({
  title: 'Add secret account'
});

export default AddAccountScreen;
