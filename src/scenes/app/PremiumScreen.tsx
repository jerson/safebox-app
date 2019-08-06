import React, { useEffect } from 'react';
import { StyleSheet, ViewStyle, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../modules/constants/Colors';
import Container from '../../components/ui/Container';
import Content from '../../components/ui/Content';
import Size from '../../modules/dimensions/Size';
import * as RNIap from 'react-native-iap';
import ShowPassPremium from '../../components/premium/ShowPassPremium';
import TrackPhonePremium from '../../components/premium/TrackPhonePremium';
import WearableAccessPremium from '../../components/premium/WearableAccessPremium';

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

function PremiumScreen() {
  const itemSkus = [
    'dev.jerson.safebox.beta.showpass',
    'dev.jerson.safebox.beta.trackphone',
    'dev.jerson.safebox.beta.wearableaccess',
    'dev.jerson.safebox.showpass',
    'dev.jerson.safebox.trackphone',
    'dev.jerson.safebox.wearableaccess',
    'showpass',
    'trackphone',
    'wearableaccess'
  ];

  const loadProducts = async () => {
    try {
      const products: any = await RNIap.getProducts(itemSkus);
      console.log(products);
    } catch (err) {
      console.warn(err); // standardized err.code and err.message available
    }
  };

  useEffect(() => {
    loadProducts();
  });

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
            <ShowPassPremium style={styles.block} />
            <TrackPhonePremium style={styles.block} />
            <WearableAccessPremium style={styles.block} />
          </Content>
        </SafeAreaView>
      </ScrollView>
    </Container>
  );
}

PremiumScreen.navigationOptions = {
  title: 'Premium',
  headerLeft: null
};

export default PremiumScreen;
