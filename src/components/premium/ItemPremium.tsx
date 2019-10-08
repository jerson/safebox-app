import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  TextStyle,
  Platform,
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Text from '../ui/Text';
import Icon from 'react-native-vector-icons/Feather';
import Client from '../../services/Client';
import {HasProductRequest, BuyProductRequest} from '../../proto/services_pb';
import Strings from '../../modules/format/Strings';
import AlertMessage from '../ui/AlertMessage';
import Button from '../ui/Button';
import {useNavigation} from 'react-navigation-hooks';
import useFocusedScreen from '../hooks/useFocusedScreen';
import * as RNIap from 'react-native-iap';
import Log from '../../modules/log/Log';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey1,
  } as ViewStyle,
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  info: {
    flex: 1,
    paddingRight: 20,
  } as ViewStyle,
  description: {
    marginBottom: 10,
    fontSize: 13,
    color: Colors.grey5,
  } as TextStyle,
  icon: {
    fontSize: 28,
    marginRight: 15,
    marginLeft: 10,
    color: Colors.grey5,
  } as TextStyle,
  splitText: {
    marginBottom: 5,
  } as ViewStyle,
});

export interface ItemPremiumProps {
  style?: StyleProp<ViewStyle>;
  productId: string;
  icon: string;
  description: string;
  name: string;
  children?: React.ReactNode | React.ReactNode[];
  onPurchase?: (isPurchased: boolean) => void;
  product?: RNIap.Product;
}

const TAG = '[ItemPremium]';
function ItemPremium({
  style,
  icon,
  productId,
  description,
  name,
  onPurchase,
  product,
  children,
}: ItemPremiumProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [waitForPurchase, setWaitForPurchase] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const [focused] = useFocusedScreen(navigation);

  useEffect(() => {
    focused && checkPurchase();
  }, [focused]);

  useEffect(() => {
    typeof onPurchase === 'function' && onPurchase(isPurchased);
  }, [isPurchased]);

  const checkPurchase = async () => {
    try {
      const request = new HasProductRequest();
      request.setSlug(productId);
      const response = await Client.hasProduct(request);
      setIsPurchased(response.getPurchased());
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }

    setIsLoading(false);
  };

  const purchase = async () => {
    setWaitForPurchase(true);
  };

  useEffect(() => {
    if (!waitForPurchase) {
      setIsLoading(false);
      return;
    }

    const purchaseUpdateSubscription = RNIap.purchaseUpdatedListener(
      async (purchase: RNIap.ProductPurchase) => {
        if (purchase.productId !== productId) {
          Log.warn(
            TAG,
            'purchaseUpdatedListener',
            'not this product',
            purchase.productId,
          );
          return;
        }
        const payload =
          purchase.purchaseToken || purchase.transactionReceipt || '';
        if (!payload) {
          setError('Try again later');
          setWaitForPurchase(false);
          Log.warn(TAG, 'purchaseUpdatedListener', 'canceled');
          return;
        }
        Log.debug(TAG, 'purchaseUpdatedListener', purchase);
        try {
          const request = new BuyProductRequest();
          request.setSlug(productId);
          request.setPayload(payload);
          request.setType(Platform.OS);
          await Client.buyProduct(request);
          setIsPurchased(true);

          if (Platform.OS === 'ios') {
            RNIap.finishTransactionIOS(purchase.transactionId || '');
          } else if (Platform.OS === 'android') {
            RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken || '');
          }
        } catch (e) {
          const message = Strings.getError(e);
          setError(message);
          Log.warn(TAG, 'purchaseUpdatedListener', e);
        }

        setWaitForPurchase(false);
      },
    );

    const purchaseErrorSubscription = RNIap.purchaseErrorListener(
      (e: RNIap.PurchaseError) => {
        setError(e.debugMessage || 'Error validating purchase');
        setWaitForPurchase(false);
      },
    );
    RNIap.requestPurchase(productId, false);

    setIsLoading(true);

    const timeout = setTimeout(() => {
      setWaitForPurchase(false);
    }, 10 * 1000);
    return () => {
      purchaseErrorSubscription.remove();
      purchaseUpdateSubscription.remove();
      timeout && clearTimeout(timeout);
    };
  }, [waitForPurchase]);

  const price = product ? `- ${product.localizedPrice}` : '';
  const buttonTitle = isPurchased ? 'Purchased' : `Purchase Now ${price}`;
  return (
    <View style={[styles.container, style]}>
      <SplitText
        style={styles.splitText}
        title={`${name} - Premium`}
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
        <Icon name={icon} style={[styles.icon]} />
        <View style={styles.info}>
          <Text style={styles.description}>{description}</Text>
          <Button
            icon={isPurchased ? undefined : 'star'}
            typeColor={'primaryLight'}
            onPress={purchase}
            disabled={isPurchased}
            isLoading={isLoading}
            title={isLoading ? undefined : buttonTitle}
          />
        </View>
      </View>
      {children}
    </View>
  );
}

export default ItemPremium;
