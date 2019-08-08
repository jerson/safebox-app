import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import ItemPremium from './ItemPremium';

export interface ShowPassPremiumProps {
  style?: StyleProp<ViewStyle>;
}

function ShowPassPremium({ style }: ShowPassPremiumProps) {
  return (
    <ItemPremium
      style={style}
      productId={'showpass'}
      name={'Show Password'}
      icon={'eye'}
      description={`With this option add additional security to your account and enable the option to see the passwords your secret accounts.`}
    />
  );
}

export default ShowPassPremium;
