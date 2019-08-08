import React, { useState, useEffect } from 'react';
import { ViewStyle, View, StyleProp } from 'react-native';
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

export interface TrackPhonePremiumProps {
  style?: StyleProp<ViewStyle>;
}

function TrackPhonePremium({ style }: TrackPhonePremiumProps) {
  const [isPurchased, setIsPurchased] = useState(false);
  const [email, setEmail] = useState('');
  const [emailInput, emailInputProps] = useTextInput('');
  const [error, setError] = useState('');

  const onPurchase = (isPurchased: boolean) => {
    setIsPurchased(isPurchased);
  };

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
          message={error}
        />
      )}
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
    </ItemPremium>
  );
}

export default TrackPhonePremium;
