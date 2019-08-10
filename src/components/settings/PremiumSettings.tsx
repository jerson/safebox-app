import React, { useState } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  Alert,
  TextStyle,
  Platform
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import Text from '../ui/Text';
import * as RNIap from 'react-native-iap';
import Log from '../../modules/log/Log';
import Client from '../../services/Client';
import Strings from '../../modules/format/Strings';
import { HasProductRequest, BuyProductRequest } from '../../proto/services_pb';
import AlertMessage from '../ui/AlertMessage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1
  } as ViewStyle,
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  info: {
    flex: 1,
    paddingRight: 10
  } as ViewStyle,
  description: {
    fontSize: 12,
    color: Colors.grey5
  } as TextStyle,
  button: {
    minWidth: 160
  } as ViewStyle,
  splitText: {
    marginBottom: 5
  } as ViewStyle
});

export interface PremiumSettingsProps {
  style?: StyleProp<ViewStyle>;
}

const TAG = '[PremiumSettings]';
function PremiumSettings({ style }: PremiumSettingsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const hasProduct = async (productId: string) => {
    try {
      const request = new HasProductRequest();
      request.setSlug(productId);
      const response = await Client.hasProduct(request);
      return response.getPurchased();
    } catch (e) {
      return false;
    }
  };

  const sendPurchase = async (purchase: RNIap.ProductPurchase) => {
    const payload = purchase.purchaseToken || purchase.transactionReceipt || '';
    try {
      const request = new BuyProductRequest();
      request.setSlug(purchase.productId);
      request.setPayload(payload);
      request.setType(Platform.OS);
      await Client.buyProduct(request);
      return true;
    } catch (e) {
      Log.warn(TAG, 'sendPurchase', e);
      return false;
    }
  };

  const restore = async () => {
    setIsLoading(true);
    let totalRestored = 0;
    try {
      const purchases = await RNIap.getAvailablePurchases();

      for (const purchase of purchases) {
        const hasProductValidation = await hasProduct(purchase.productId);
        if (!hasProductValidation) {
          const isValid = await sendPurchase(purchase);
          isValid && totalRestored++;
        }
      }
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);

    if (totalRestored > 0) {
      Alert.alert(`${totalRestored} products restored`);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <SplitText
        style={styles.splitText}
        title={'Premium settings'}
        type={'Default'}
      />
      {!!error && (
        <AlertMessage
          onTimeout={() => {
            setError('');
          }}
          message={error}
        />
      )}
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.description}>
            If you made a purchase before and do not see it in the premium
            section, you can restore it here.
          </Text>
        </View>
        <Button
          style={styles.button}
          isLoading={isLoading}
          title={'Restore purchases'}
          typeColor={'accentDark'}
          onPress={restore}
        />
      </View>
    </View>
  );
}

export default PremiumSettings;
