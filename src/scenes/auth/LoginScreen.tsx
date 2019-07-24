import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  StatusBar
} from 'react-native';
import {
  SafeAreaView,
  NavigationScreenComponent,
  NavigationInjectedProps,
  NavigationScreenProp
} from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import HeaderLanding from '../../components/ui/HeaderLanding';
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import SplitText from '../../components/ui/SplitText';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';

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

interface Props {
  navigation: NavigationScreenProp<any>;
}
interface Params {}

const LoginScreen: React.FC<Props> & NavigationScreenComponent<Params> = ({
  navigation
}) => {
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
                placeholder={'Usuario'}
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
              />
              <TextInput
                placeholder={'Contraseña'}
                secureTextEntry
                containerStyle={styles.textInputContainer}
                style={styles.textInput}
              />

              <Button
                loading
                style={styles.button}
                typeColor={'primaryLight'}
                title={'Iniciar sesión'}
              />
              <SplitText style={styles.splitText} title={'o'} />
              <Button
                style={styles.button}
                typeColor={'accentDark'}
                title={'Crear cuenta'}
                onPress={() => {
                  navigation.navigate('Register');
                }}
              />
            </View>
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
};

LoginScreen.navigationOptions = {
  headerLeft: null,
  headerRight: null,
  title: null
};

export default LoginScreen;
