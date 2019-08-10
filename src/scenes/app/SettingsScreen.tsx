import React from 'react';
import { StyleSheet, ViewStyle, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import DeviceSettings from '../../components/settings/DeviceSettings';
import SessionSettings from '../../components/settings/SessionSettings';
import PremiumSettings from '../../components/settings/PremiumSettings';

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
  block: {
    marginBottom: 40
  } as ViewStyle
});

function SettingsScreen() {
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
          <Content>
            <DeviceSettings style={styles.block} />
            <PremiumSettings style={styles.block} />
            <SessionSettings style={styles.block} />
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerLeft: null
};

export default SettingsScreen;
