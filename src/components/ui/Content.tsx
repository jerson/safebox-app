import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20
  } as ViewStyle,
  center: {
    justifyContent: 'center'
  } as ViewStyle,
  vertical: {
    flex: 1,
    paddingTop: 20
  } as ViewStyle
});

export interface ContentProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  /**
   * Usa `center` para centrar el contenido con `justifyContent`
   * @default false
   * @
   */
  center?: boolean;
  /**
   * Usa `vertical` para agregar `flex` y un `paddingTop`
   * @default true
   */
  vertical?: boolean;
}

export interface ContentState {}

export default class Content extends React.Component<
  ContentProps,
  ContentState
> {
  static defaultProps = {
    center: false,
    vertical: true
  };

  render() {
    const { style, center, vertical, children, ...props } = this.props;
    return (
      <View
        style={[
          styles.content,
          center && styles.center,
          vertical && styles.vertical,
          style
        ]}
        {...props}
      >
        {children}
      </View>
    );
  }
}
