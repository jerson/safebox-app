import React, { useState, useRef } from 'react';
import { StyleSheet, View, ViewStyle, ScrollView, Alert } from 'react-native';
import { SafeAreaView, NavigationScreenProp } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import HeaderLanding from '../../components/ui/HeaderLanding';
import TextInput, { TextInputRef } from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import SplitText from '../../components/ui/SplitText';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import useTextInput from '../../components/hooks/useTextInput';
import { LoginRequest } from '../../proto/services_pb';
import Client from '../../services/Client';
import Session from '../../services/Session';
import Strings from '../../modules/format/Strings';

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
  } as ViewStyle
});

interface Params {}
interface Props {
  navigation: NavigationScreenProp<Params>;
}

function LoginScreen({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef<TextInputRef>(null);
  const passwordRef = useRef<TextInputRef>(null);

  const [username, usernameProps] = useTextInput('');
  const [password, passwordProps] = useTextInput('');

  const isValid = () => {
    return [!!username, !!password].every(value => value);
  };

  const submit = async () => {
    try {
      const request = new LoginRequest();
      request.setUsername(username as string);
      request.setPassword(password as string);

      const response = await Client.login(request);

      Session.login(response.getAccesstoken());
      navigation.navigate('Accounts');
    } catch (e) {
      const message = Strings.getError(e);
      Alert.alert('Something happen', message);
    }
  };
  const tryToSubmit = () => {
    if (!isValid()) {
      return;
    }

    setIsLoading(true);
    requestAnimationFrame(async () => {
      await submit();
      setIsLoading(false);
    });
  };

  const goToRegister = () => {
    navigation.navigate('Register');
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
            <HeaderLanding style={styles.headerLanding} />
            <View style={styles.form}>
              <TextInput
                placeholder={'Username'}
                keyboardType={'default'}
                autoCapitalize={'none'}
                autoFocus
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
                onSubmitEditing={tryToSubmit}
                {...passwordProps}
              />

              <Button
                isLoading={isLoading}
                style={styles.button}
                typeColor={'primaryLight'}
                title={'Sign In'}
                onPress={tryToSubmit}
              />
              <SplitText style={styles.splitText} title={'or'} />
              <Button
                style={styles.button}
                typeColor={'accentDark'}
                title={'Create account'}
                onPress={goToRegister}
              />
            </View>
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
