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
import {
  HasProductRequest,
  BuyProductRequest,
  EnableLocationRequest
} from '../../proto/services_pb';
import Strings from '../../modules/format/Strings';
import AlertMessage from '../ui/AlertMessage';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import { useNavigation } from 'react-navigation-hooks';
import useFocusedScreen from '../hooks/useFocusedScreen';
import useTextInput from '../hooks/useTextInput';

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

export interface TrackPhonePremiumProps {
  style?: StyleProp<ViewStyle>;
}

const productId = 'trackphone';

function TrackPhonePremium({ style }: TrackPhonePremiumProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [emailInput, emailInputProps] = useTextInput('');

  const navigation = useNavigation();
  const [focused] = useFocusedScreen(navigation);

  useEffect(() => {
    focused && check();
  }, [focused]);

  const loadEmail = async () => {
    try {
      const response = await Client.getEmail();
      setEmail(response.getEmail());
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
  };

  useEffect(() => {
    if (!isPurchased) {
      setEmail('');
      return;
    }
    loadEmail();
  }, [isPurchased]);

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

  const disable = async () => {
    const tmpEmail = email;
    setEmail('');
    try {
      await Client.disableLocation();
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
      setEmail(tmpEmail);
    }
  };

  const enable = async () => {
    setEmail(emailInput);
    try {
      const request = new EnableLocationRequest();
      request.setEmail(emailInput);
      await Client.enableLocation(request);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
      setEmail('');
    }
  };
  const price = 'S/ 1.00';
  const buttonTitle = isPurchased ? 'Purchased' : `Purchase Now - ${price}`;
  return (
    <View style={[styles.container, style]}>
      <SplitText
        style={styles.splitText}
        title={'Track Phone - Premium'}
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
        <Icon name={'map-pin'} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.description}>
            If you enable this option we will send you an email daily with the
            last location you used to connect to the application.
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

      {isPurchased && (
        <View
          style={{
            marginTop: 10,
            paddingLeft: 50,
            paddingRight: 20,
            flexDirection: 'row',
            alignItems: 'flex-start'
          }}
        >
          {!email && (
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row'
              }}
            >
              <TextInput
                icon={'at-sign'}
                placeholder={'Insert you email'}
                style={{ marginRight: 10 }}
                defaultValue={''}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoCompleteType={'email'}
                returnKeyType={'done'}
                onSubmitEditing={enable}
                containerStyle={{ flex: 1, marginBottom: 0, marginTop: 0 }}
                {...emailInputProps}
              />
              <Button
                style={{
                  height: 45,
                  width: 45,
                  marginTop: 5
                }}
                onPress={enable}
                typeColor={'primaryLight'}
                icon={'save'}
              />
            </View>
          )}
          {!!email && (
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingRight: 10,
                  alignSelf: 'center'
                }}
              >
                <Text style={{ color: Colors.grey5 }}>
                  We will send your location to:
                </Text>
                <Text style={{ color: Colors.grey6 }}>{email}</Text>
              </View>
              <Button
                style={{
                  height: 45,
                  width: 45
                }}
                onPress={disable}
                typeColor={'accentDark'}
                icon={'trash'}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default TrackPhonePremium;
