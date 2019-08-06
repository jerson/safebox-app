import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  StyleProp,
  TextStyle,
  Switch
} from 'react-native';
import Colors from '../../modules/constants/Colors';
import SplitText from '../ui/SplitText';
import Text from '../ui/Text';
import Icon from 'react-native-vector-icons/Feather';

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
    fontSize: 13,
    color: Colors.grey5
  } as TextStyle,
  icon: {
    fontSize: 28,
    marginRight: 15,
    marginLeft: 10,
    color: Colors.grey5
  } as TextStyle
});

export interface WearableAccessPremiumProps {
  style?: StyleProp<ViewStyle>;
}

function WearableAccessPremium({ style }: WearableAccessPremiumProps) {
  return (
    <View style={[styles.container, style]}>
      <SplitText title={'Wearable Access Premium'} type={'PrimaryLight'} />
      <View style={styles.content}>
        <Icon name={'watch'} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.description}>
            If you have a device with WatchOS you can use the application to see
            information about your secret accounts.
          </Text>
        </View>
        <Switch value={true} />
      </View>
    </View>
  );
}

export default WearableAccessPremium;
