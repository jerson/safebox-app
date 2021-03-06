import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Platform,
  InteractionManager,
  Keyboard
} from "react-native";
import { SafeAreaView } from "react-navigation";
import Colors from "../../modules/constants/Colors";
import HeaderLanding from "../../components/ui/HeaderLanding";
import TextInput, { TextInputRef } from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Content from "../../components/ui/Content";
import Size from "../../modules/dimensions/Size";
import useTextInput from "../../components/hooks/useTextInput";
import Client from "../../services/Client";
import { RegisterRequest } from "../../proto/services_pb";
import OpenPGP, { KeyOptions } from "react-native-fast-openpgp";
import Config from "../../Config";
import Session from "../../services/Session";
import Strings from "../../modules/format/Strings";
import AlertMessage from "../../components/ui/AlertMessage";
import ButtonLink from "../../components/ui/ButtonLink";
import useAnimatedState from "../../components/hooks/useAnimatedState";
import { useNavigation } from "react-navigation-hooks";
import Log from "../../modules/log/Log";

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
    alignSelf: "center"
  } as ViewStyle,
  button: {
    marginTop: 20
  } as ViewStyle,
  buttonLink: {
    marginTop: 40
  } as ViewStyle
});

const TAG = "[RegisterScreen]";
function RegisterScreen() {
  const { navigate } = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useAnimatedState("");

  const usernameRef = useRef<TextInputRef>(null);
  const passwordRef = useRef<TextInputRef>(null);
  const repeatPasswordRef = useRef<TextInputRef>(null);

  const [username, usernameProps] = useTextInput("");
  const [password, passwordProps] = useTextInput("");
  const [repeatPassword, repeatPasswordProps] = useTextInput("");

  const goToLogin = () => {
    navigate("Login");
  };

  const isValid = () => {
    const isValid = [!!username, !!password, !!repeatPassword].every(
      value => value
    );
    if (!isValid) {
      setError("Complete missing fields");
      return false;
    }
    if (password !== repeatPassword) {
      setError("Passwords must match");
      return false;
    }
    return isValid;
  };

  const generateKeyPair = async () => {
    try {
      return await OpenPGP.generate({
        passphrase: password,
        name: username,
        keyOptions: Config.settings.keyOptions as KeyOptions
      });
    } catch (e) {
      Log.warn(TAG, "generateKeyPair", e);
      throw new Error("error generating your credentials, try again later");
    }
  };

  const submit = async () => {
    try {
      const keyPair = await generateKeyPair();

      const request = new RegisterRequest();
      request.setUsername(username);
      request.setPrivatekey(keyPair.privateKey);
      request.setPublickey(keyPair.publicKey);

      const response = await Client.register(request);

      Session.login(response);
      Session.setPassword(password);

      navigate("Accounts");
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
  };
  const tryToSubmit = () => {
    if (!isValid()) {
      return;
    }

    Keyboard.dismiss();
    setIsLoading(true);
    InteractionManager.runAfterInteractions(() => {
      setTimeout(async () => {
        await submit();
        setIsLoading(false);
      }, 2000);
    });
  };

  return (
    <Container style={styles.container}>
      <StatusBar
        animated
        barStyle={"dark-content"}
        backgroundColor={Colors.grey2}
      />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{
          minHeight: Size.getVisibleHeight()
        }}
        style={styles.scrollView}
      >
        <SafeAreaView style={styles.safeArea}>
          <Content center>
            <KeyboardAvoidingView
              behavior={"padding"}
              enabled={Platform.OS === "ios"}
            >
              <HeaderLanding
                titleStyle={{ color: Colors.primary }}
                subtitleStyle={{ color: Colors.primary }}
                style={styles.headerLanding}
              />
              <View style={styles.form}>
                {!!error && (
                  <AlertMessage
                    onTimeout={() => {
                      setError("");
                    }}
                    message={error}
                  />
                )}
                <TextInput
                  icon={"user"}
                  placeholder={"Username"}
                  keyboardType={"default"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  autoCompleteType={"username"}
                  returnKeyType={"next"}
                  containerStyle={styles.textInputContainer}
                  style={styles.textInput}
                  ref={usernameRef}
                  onSubmitEditing={() => {
                    passwordRef.current && passwordRef.current.focus();
                  }}
                  {...usernameProps}
                />
                <TextInput
                  icon={"lock"}
                  placeholder={"Password"}
                  secureTextEntry
                  keyboardType={"default"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  autoCompleteType={"password"}
                  returnKeyType={"next"}
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
                  icon={"lock"}
                  placeholder={"Repeat password"}
                  secureTextEntry
                  keyboardType={"default"}
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  autoCompleteType={"password"}
                  returnKeyType={"done"}
                  containerStyle={styles.textInputContainer}
                  style={styles.textInput}
                  ref={repeatPasswordRef}
                  blurOnSubmit
                  onSubmitEditing={tryToSubmit}
                  {...repeatPasswordProps}
                />

                <Button
                  isLoading={isLoading}
                  style={styles.button}
                  typeColor={"primaryLight"}
                  title={"Create account"}
                  onPress={tryToSubmit}
                />

                <ButtonLink
                  style={styles.buttonLink}
                  title={"Back to Sign In"}
                  onPress={goToLogin}
                />
              </View>
            </KeyboardAvoidingView>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

RegisterScreen.navigationOptions = {
  headerLeft: null,
  headerRight: null,
  title: null
};

export default RegisterScreen;
