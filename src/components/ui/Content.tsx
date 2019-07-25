import React from 'react';
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
  children: React.ReactNode | React.ReactNode[];
}

function Content(props: ContentProps) {
  const { style, center, vertical, children, ...extraProps } = props;
  return (
    <View
      style={[
        styles.content,
        center && styles.center,
        vertical && styles.vertical,
        style
      ]}
      {...extraProps}
    >
      {children}
    </View>
  );
}

Content.defaultProps = {
  center: false,
  vertical: true
};

export default Content;
