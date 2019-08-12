import React from "react";
import { ViewStyle, StyleProp } from "react-native";
import ItemPremium from "./ItemPremium";
import * as RNIap from "react-native-iap";

export interface WearableAccessPremiumProps {
  style?: StyleProp<ViewStyle>;
  product?: RNIap.Product<string>;
}

function WearableAccessPremium({ style, product }: WearableAccessPremiumProps) {
  return (
    <ItemPremium
      style={style}
      product={product}
      productId={"wearableaccess"}
      name={"Wearable Access"}
      icon={"watch"}
      key={"wearableaccess"}
      description={` If you have a device with WatchOS you can use the application to see information about your secret accounts.`}
    />
  );
}

export default WearableAccessPremium;
