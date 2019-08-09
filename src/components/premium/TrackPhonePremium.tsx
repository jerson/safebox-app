import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  TextStyle
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text from '../ui/Text';
import Client from '../../services/Client';
import { EnableLocationRequest } from '../../proto/services_pb';
import Strings from '../../modules/format/Strings';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import useTextInput from '../hooks/useTextInput';
import ItemPremium from './ItemPremium';
import AlertMessage from '../ui/AlertMessage';
import Emitter from '../../modules/listener/Emitter';

const styles = StyleSheet.create({
  alertMessage: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 20
  } as ViewStyle,
  button: {
    height: 45,
    width: 45,
    paddingLeft: 15
  } as ViewStyle,
  buttonEnable: {
    height: 45,
    width: 45,
    paddingLeft: 15,
    marginTop: 5
  } as ViewStyle,
  label: { color: Colors.grey5 } as TextStyle,
  value: { color: Colors.grey6 } as TextStyle,
  purchasedContainer: {
    marginTop: 10,
    paddingLeft: 50,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'flex-start'
  } as ViewStyle,
  disableInfo: {
    flex: 1,
    paddingRight: 10,
    alignSelf: 'center'
  } as ViewStyle,
  disableContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  } as ViewStyle,
  enableContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  } as ViewStyle,
  textInputContainer: {
    flex: 1,
    marginBottom: 0,
    marginTop: 0,
    marginRight: 10
  } as ViewStyle
});

export interface TrackPhonePremiumProps {
  style?: StyleProp<ViewStyle>;
}

function TrackPhonePremium({ style }: TrackPhonePremiumProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailInput, emailInputProps] = useTextInput('');
  const [error, setError] = useState('');

  const onPurchase = (isPurchased: boolean) => {
    setIsPurchased(isPurchased);
  };

  useEffect(() => {
    Emitter.emit('onTrackPhoneEnabled', !!email);
  }, [email]);

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

  const disable = async () => {
    setIsLoading(true);
    try {
      await Client.disableLocation();
      setEmail('');
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };

  const enable = async () => {
    setIsLoading(true);
    try {
      const request = new EnableLocationRequest();
      request.setEmail(emailInput);
      await Client.enableLocation(request);
      setEmail(emailInput);
    } catch (e) {
      const message = Strings.getError(e);
      setError(message);
    }
    setIsLoading(false);
  };
  return (
    <ItemPremium
      style={style}
      onPurchase={onPurchase}
      productId={'trackphone'}
      name={'Track Phone'}
      icon={'map-pin'}
      description={`If you enable this option we will send you an email daily with the last location you used to connect to the application.`}
    >
      {!!error && (
        <AlertMessage
          onTimeout={() => {
            setError('');
          }}
          style={styles.alertMessage}
          message={error}
        />
      )}
      {isPurchased && (
        <View style={styles.purchasedContainer}>
          {!email && (
            <View style={styles.enableContainer}>
              <TextInput
                icon={'at-sign'}
                placeholder={'Insert you email'}
                defaultValue={''}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoCompleteType={'email'}
                returnKeyType={'done'}
                onSubmitEditing={enable}
                containerStyle={styles.textInputContainer}
                {...emailInputProps}
              />
              <Button
                style={styles.buttonEnable}
                onPress={enable}
                isLoading={isLoading}
                typeColor={'primaryLight'}
                icon={'save'}
              />
            </View>
          )}
          {!!email && (
            <View style={styles.disableContainer}>
              <View style={styles.disableInfo}>
                <Text style={styles.label}>We will send your location to:</Text>
                <Text style={styles.value}>{email}</Text>
              </View>
              <Button
                style={styles.button}
                onPress={disable}
                isLoading={isLoading}
                typeColor={'accentDark'}
                icon={'trash-2'}
              />
            </View>
          )}
        </View>
      )}
    </ItemPremium>
  );
}

export default TrackPhonePremium;
