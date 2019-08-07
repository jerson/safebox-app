import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  TextStyle,
  Platform
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Text from '../ui/Text';
import Icon from 'react-native-vector-icons/Feather';
import Client from '../../services/Client';
import { HasProductRequest, BuyProductRequest } from '../../proto/services_pb';
import Strings from '../../modules/format/Strings';
import AlertMessage from '../ui/AlertMessage';
import Button from '../ui/Button';
import { useNavigation } from 'react-navigation-hooks';
import useFocusedScreen from '../hooks/useFocusedScreen';

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
    paddingRight: 20
  } as ViewStyle,
  description: {
    marginBottom: 10,
    fontSize: 13,
    color: Colors.grey5
  } as TextStyle,
  icon: {
    fontSize: 28,
    marginRight: 15,
    marginLeft: 10,
    color: Colors.grey5
  } as TextStyle,
  splitText: {
    marginBottom: 5
  } as ViewStyle
});

export interface ShowPassPremiumProps {
  style?: StyleProp<ViewStyle>;
}

const productId = 'showpass';

function ShowPassPremium({ style }: ShowPassPremiumProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const [focused] = useFocusedScreen(navigation);

  useEffect(() => {
    focused && check();
  }, [focused]);

  const check = async () => {
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
    if (isPurchased) {
      return;
    }
    setIsLoading(true);
    try {
      const request = new BuyProductRequest();
      request.setSlug(productId);
      request.setPayload('sample');
      request.setType(Platform.OS);
      await Client.buyProduct(request);
      setIsPurchased(true);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
      check();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    check();
  }, []);

  const price = 'S/ 1.00';
  const buttonTitle = isPurchased ? 'Purchased' : `Purchase Now - ${price}`;
  return (
    <View style={[styles.container, style]}>
      <SplitText
        style={styles.splitText}
        title={'Show Password - Premium'}
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
        <Icon name={'eye'} style={[styles.icon]} />
        <View style={styles.info}>
          <Text style={styles.description}>
            With this option add additional security to your account and enable
            the option to see the passwords your secret accounts.
          </Text>
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
    </View>
  );
}

export default ShowPassPremium;
