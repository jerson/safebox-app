import React, { useEffect, useState } from "react";
import { StyleSheet, ViewStyle, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import Colors from "../../modules/constants/Colors";
import Container from "../../components/ui/Container";
import Content from "../../components/ui/Content";
import Size from "../../modules/dimensions/Size";
import ShowPassPremium from "../../components/premium/ShowPassPremium";
import TrackPhonePremium from "../../components/premium/TrackPhonePremium";
import WearableAccessPremium from "../../components/premium/WearableAccessPremium";
import * as RNIap from "react-native-iap";
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
  block: {
    marginBottom: 40
  } as ViewStyle
});

interface ProductList {
  [key: string]: RNIap.Product<string>;
}
const TAG = "[PremiumScreen]";
function PremiumScreen() {
  const [products, setProducts] = useState<ProductList>({});

  const load = async () => {
    try {
      await RNIap.initConnection();
      const response = await RNIap.getProducts([
        "showpass",
        "trackphone",
        "wearableaccess"
      ]);
      const data: ProductList = {};
      for (const item of response) {
        data[item.productId as string] = item;
      }

      setProducts(data);
    } catch (e) {
      Log.warn(TAG, "load", e);
    }
  };

  useEffect(() => {
    load();
  });
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
          <Content>
            <TrackPhonePremium
              product={products["trackphone"]}
              style={styles.block}
            />
            <ShowPassPremium
              product={products["showpass"]}
              style={styles.block}
            />
            <WearableAccessPremium
              product={products["wearableaccess"]}
              style={styles.block}
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
