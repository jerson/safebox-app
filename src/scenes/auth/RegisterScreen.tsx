import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Alert,
  InteractionManager
} from 'react-native';
import { SafeAreaView, NavigationScreenComponent } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import HeaderLanding from '../../components/ui/HeaderLanding';
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import SplitText from '../../components/ui/SplitText';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import useTextInput from '../../components/hooks/useTextInput';
import Client from '../../services/Client';
import { RegisterRequest } from '../../proto/services_pb';
import Log from '../../modules/log/Log';
import OpenPGP, { KeyOptions } from 'react-native-fast-openpgp';
import Config from '../../Config';
import Session from '../../services/Session';

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
  headerLanding: {
    marginTop: 20,
    marginBottom: 20
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
  } as ViewStyle
});

const TAG = '[RegisterScreen]';
const RegisterScreen: React.FC & NavigationScreenComponent<any> = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [username, usernameProps] = useTextInput('');
  const [password, passwordProps] = useTextInput('');
  const [repeatPassword, repeatPasswordProps] = useTextInput('');

  const isValid = () => {
    return [!!username, !!password, password === repeatPassword].every(
      value => value
    );
  };

  const generateKeyPair = () => {
    return OpenPGP.generate({
      passphrase: password as string,
      name: username as string,
      keyOptions: Config.settings.keyOptions as KeyOptions
    });
  };

  const submit = async () => {
    try {
      const keyPair = await generateKeyPair();

      const request = new RegisterRequest();
      request.setUsername(username as string);
      request.setPrivatekey(keyPair.privateKey);
      request.setPublickey(keyPair.publicKey);

      const response = await Client.register(request);

      Session.login(response.getAccesstoken());
      Log.info(TAG, 'submit', response.getAccesstoken());
    } catch (e) {
      Alert.alert('Ha ocurrido un error', e.message);
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

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.grey2} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{
          minHeight: Size.getVisibleHeight()
        }}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            <HeaderLanding
              titleStyle={{ color: Colors.primary }}
              subtitleStyle={{ color: Colors.primary }}
              style={styles.headerLanding}
            />
            <View style={styles.form}>
              <TextInput
                placeholder={'Usuario'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                {...usernameProps}
              />
              <TextInput
                placeholder={'Contraseña'}
                secureTextEntry
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                {...passwordProps}
              />
              <TextInput
                placeholder={'Repite tu contraseña'}
                secureTextEntry
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
                {...repeatPasswordProps}
              />

              <Button
                loading={isLoading}
                style={styles.button}
                typeColor={'primaryLight'}
                title={'Registrate'}
                onPress={tryToSubmit}
              />
            </View>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
};

RegisterScreen.navigationOptions = {
  headerLeft: null,
  headerRight: null,
  title: null
};

export default RegisterScreen;
