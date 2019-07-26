import React from 'react';
import { StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import Colors from '../../modules/constants/Colors';
import Text from '../ui/Text';
import { AccountSingle } from '../../proto/services_pb';
import Icon from 'react-native-vector-icons/Feather';
import useIconTintLabel from '../hooks/useIconTintLabel';
import Touchable from '../ui/Touchable';
import { useNavigation } from 'react-navigation-hooks';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30
  } as TextStyle,
  shadow: {
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowColor: Colors.grey6,
    shadowOffset: { height: 4, width: 0 },
    elevation: 4
  } as ViewStyle,
  container: {
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'visible',
    flexDirection: 'row',
    alignItems: 'center'
  } as ViewStyle,
  label: {
    color: Colors.grey6,
    fontSize: 14
  } as TextStyle,
  info: {
    paddingLeft: 10
  } as ViewStyle
});

export interface AccountItemProps {
  item: AccountSingle;
}

function AccountItem({ item }: AccountItemProps) {
  const label = useIconTintLabel(item.getLabel());
  const { navigate } = useNavigation();
  const goToAccount = () => {
    navigate('Account', { account: item });
  };

  return (
    <Touchable onPress={goToAccount} style={[styles.container, styles.shadow]}>
      <Icon
        name={label.icon}
        style={[styles.icon, { color: label.tintColor }]}
      />
      <View style={styles.info}>
        <Text style={styles.label}>{item.getLabel()}</Text>
      </View>
    </Touchable>
  );
}

export default AccountItem;
