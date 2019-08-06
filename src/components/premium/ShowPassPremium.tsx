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

export interface ShowPassPremiumProps {
  style?: StyleProp<ViewStyle>;
}

function ShowPassPremium({ style }: ShowPassPremiumProps) {
  return (
    <View style={[styles.container, style]}>
      <SplitText title={'Show Password Premium'} type={'PrimaryLight'} />
      <View style={styles.content}>
        <Icon name={'eye'} style={styles.icon} />
        <View style={styles.info}>
          <Text style={styles.description}>
            With this option add additional security to your account and enable
            the option to see the passwords your secret accounts.
          </Text>
        </View>
        <Switch value={false} />
      </View>
    </View>
  );
}

export default ShowPassPremium;
