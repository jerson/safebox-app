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

export interface TrackPhonePremiumProps {
  style?: StyleProp<ViewStyle>;
}

function TrackPhonePremium({ style }: TrackPhonePremiumProps) {
  return (
    <View style={[styles.container, style]}>
      <SplitText title={'Track Phone Premium'} type={'PrimaryLight'} />
      <View style={styles.content}>
        <Icon name={'map-pin'} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.description}>
            If you enable this option we will send you an email daily with the
            last location you used to connect to the application.
          </Text>
        </View>
        <Switch value={false} />
      </View>
    </View>
  );
}

export default TrackPhonePremium;
