import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import ItemPremium from './ItemPremium';

export interface WearableAccessPremiumProps {
  style?: StyleProp<ViewStyle>;
}

function WearableAccessPremium({ style }: WearableAccessPremiumProps) {
  return (
    <ItemPremium
      style={style}
      productId={'wearableaccess'}
      name={'Wearable Access'}
      icon={'watch'}
      description={` If you have a device with WatchOS you can use the application to see information about your secret accounts.`}
    />
  );
}

export default WearableAccessPremium;
