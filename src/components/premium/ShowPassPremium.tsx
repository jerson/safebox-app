import React from "react";
import { ViewStyle, StyleProp } from "react-native";
import ItemPremium from "./ItemPremium";
import * as RNIap from "react-native-iap";

export interface ShowPassPremiumProps {
  style?: StyleProp<ViewStyle>;
  product?: RNIap.Product<string>;
}

function ShowPassPremium({ style, product }: ShowPassPremiumProps) {
  return (
    <ItemPremium
      style={style}
      product={product}
      productId={"showpass"}
      name={"Show Password"}
      icon={"eye"}
      key={"showpass"}
      description={`With this option add additional security to your account and enable the option to see the passwords your secret accounts.`}
    />
  );
}

export default ShowPassPremium;
