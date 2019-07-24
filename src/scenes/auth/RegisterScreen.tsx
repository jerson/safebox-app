import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar,
  Alert
} from "react-native";
import {
  SafeAreaView,
  NavigationScreenComponent,
  NavigationScreenProp
} from "react-navigation";
import Colors from "../../modules/constants/Colors";
import HeaderLanding from "../../components/ui/HeaderLanding";
import TextInput from "../../components/ui/TextInput";
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
  } as ViewStyle
});

interface Props {
  navigation: NavigationScreenProp<any>;
}
interface Params {}

const RegisterScreen: React.FC<Props> & NavigationScreenComponent<Params> = ({
  navigation
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const [username, usernameProps] = useTextInput("");
  const [password, passwordProps] = useTextInput("");
  const [repeatPassword, repeatPasswordProps] = useTextInput("");

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
      navigation.navigate("Accounts");
    } catch (e) {
      const message = Strings.getError(e);
      Alert.alert("Something happen", message);
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
        keyboardShouldPersistTaps={"handled"}
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
                placeholder={"Username"}
                keyboardType={"default"}
                autoCapitalize={"none"}
                autoFocus
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
