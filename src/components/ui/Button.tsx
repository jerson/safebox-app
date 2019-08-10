import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import Touchable, { TouchableProps } from './Touchable';
import Colors from '../../modules/constants/Colors';
import Loading from './Loading';
import Text from './Text';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    margin: 0,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  } as ViewStyle,
  containerDisabled: {
    backgroundColor: Colors.grey3,
    borderColor: Colors.grey3
  } as ViewStyle,
  loading: {
    marginRight: 4
  } as ViewStyle,
  icon: {
    fontSize: 14,
    top: 3,
    color: Colors.white,
    marginRight: 4
  } as TextStyle,
  title: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14
  } as TextStyle,
  containerLoading: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  } as ViewStyle,
  containerLoadingSmall: {
    left: 4
  } as ViewStyle,
  containerLoadingCenter: {
    position: 'relative',
    left: 0
  } as ViewStyle,
  light: {
    backgroundColor: Colors.white
  } as ViewStyle,
  primaryLight: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primaryLight
  } as ViewStyle,
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary
  } as ViewStyle,
  secondary: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary
  } as ViewStyle,
  accent: {
    backgroundColor: Colors.accent,
    borderColor: Colors.accent
  } as ViewStyle,
  accentDark: {
    backgroundColor: Colors.accentDark,
    borderColor: Colors.accentDark
  } as ViewStyle,
  danger: {
    backgroundColor: Colors.danger,
    borderColor: Colors.danger
  } as ViewStyle,
  disabled: {
    backgroundColor: Colors.grey4,
    borderColor: Colors.grey4
  } as ViewStyle,
  small: {
    padding: 4,
    paddingHorizontal: 12
  } as ViewStyle,
  center: {
    minHeight: 30,
    justifyContent: 'center'
  } as ViewStyle
});

export interface ButtonProps extends TouchableProps {
  isLoading?: boolean;
  disabled?: boolean;
  allowOnPress?: boolean;
  /**
   * cuando `title` es undefined el loading se centra en el boton
   */
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  icon?: string;
  iconStyle?: StyleProp<TextStyle>;
  light?: boolean;
  small?: boolean;
  typeColor?:
    | 'primaryLight'
    | 'primary'
    | 'secondary'
    | 'accentDark'
    | 'accent'
    | 'danger';
}

function Button(props: ButtonProps) {
  const {
    style,
    disabled,
    title,
    textStyle,
    icon,
    iconStyle,
    isLoading,
    onPress,
    light,
    typeColor,
    small,
    allowOnPress,
    ...extraProps
  } = props;

  const onPressCallback = (event: GestureResponderEvent) => {
    if ((disabled && !allowOnPress) || isLoading) {
      return;
    }
    if (typeof onPress === 'function') {
      onPress(event);
    }
  };

  const stylesButton = [];
  let color;

  switch (typeColor) {
    case 'primaryLight':
      stylesButton.push(styles.primaryLight);
      color = Colors.white;
      break;
    case 'primary':
      stylesButton.push(styles.primary);
      color = Colors.white;
      break;
    case 'secondary':
      stylesButton.push(styles.secondary);
      color = Colors.white;
      break;
    case 'accentDark':
      stylesButton.push(styles.accentDark);
      color = Colors.white;
      break;
    case 'accent':
      stylesButton.push(styles.accent);
      color = Colors.white;
      break;
    case 'danger':
      stylesButton.push(styles.danger);
      color = Colors.white;
      break;
    default:
      break;
  }

  if (disabled) {
    stylesButton.push(styles.disabled);
    color = Colors.grey5;
  }
  if (small) {
    stylesButton.push(styles.small);
  }

  return (
    <Touchable
      activeOpacity={disabled ? 1 : 0.2}
      style={[
        styles.container,
        stylesButton,
        disabled && styles.containerDisabled,
        light && styles.light,
        style,
        !title && styles.center
      ]}
      testID={'button_touchable'}
      {...extraProps}
      onPress={onPress ? onPressCallback : undefined}
    >
      {!!icon && !isLoading && (
        <Icon style={[styles.icon, { color }, iconStyle]} name={icon} />
      )}
      {isLoading && (
        <View
          style={[
            styles.containerLoading,
            small && styles.containerLoadingSmall,
            !title && styles.containerLoadingCenter
          ]}
        >
          <Loading style={styles.loading} size={'small'} color={color} />
        </View>
      )}
      {!!title && (
        <Text style={[styles.title, { color }, textStyle]}>{title}</Text>
      )}
    </Touchable>
  );
}

Button.defaultProps = {
  typeColor: 'primary'
};
export default Button;
