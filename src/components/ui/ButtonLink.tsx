import * as React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle
} from 'react-native';
import Touchable, { TouchableProps } from './Touchable';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    padding: 6
  } as ViewStyle,
  strong: {
    ...Font({ weight: 'Bold' })
  } as TextStyle,
  title: {
    color: Colors.grey5,
    fontSize: 13
  } as TextStyle,
  accent: {
    color: Colors.primary
  } as TextStyle
});

export interface ButtonLinkProps extends TouchableProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  title?: string;
  strong?: boolean;
  accent?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}

export interface ButtonLinkState {}

function ButtonLink(props: ButtonLinkProps) {
  const {
    onPress,
    isLoading,
    isDisabled,
    title,
    strong,
    accent,
    style,
    titleStyle,
    ...extraProps
  } = props;

  const onPressCallback = (event: GestureResponderEvent) => {
    if (isDisabled || isLoading) {
      return;
    }
    if (typeof onPress === 'function') {
      onPress(event);
    }
  };

  return (
    <Touchable
      style={[styles.container, style]}
      {...extraProps}
      onPress={onPress ? onPressCallback : undefined}
    >
      {title && (
        <Text
          style={[
            styles.title,
            strong && styles.strong,
            accent && styles.accent,
            titleStyle
          ]}
        >
          {title}
        </Text>
      )}
    </Touchable>
  );
}

export default ButtonLink;
