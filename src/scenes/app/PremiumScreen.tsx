import React from "react";
import { StyleSheet, ViewStyle, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import Colors from "../../modules/constants/Colors";
import HeaderLanding from "../../components/ui/HeaderLanding";
import Container from "../../components/ui/Container";
import Content from "../../components/ui/Content";
import Size from "../../modules/dimensions/Size";

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
  } as ViewStyle
});

function PremiumScreen() {
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
          minHeight: Size.getVisibleTabScreenHeight()
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
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

PremiumScreen.navigationOptions = {
  title: "Premium",
  headerLeft: null
};

export default PremiumScreen;
