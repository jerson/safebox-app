import { Platform } from 'react-native';

const font: any = {
  Nunito: {
    weights: {
      ExtraBold: '900',
      Black: '800',
      Bold: '700',
      Regular: '400',
      SemiBold: '600',
      Light: '300',
      ExtraLight: '200'
    },
    styles: {
      Italic: 'italic'
    }
  }
};

export interface FontStyle {
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
}

export type FontWeight =
  | 'Regular'
  | 'ExtraBold'
  | 'SemiBold'
  | 'Black'
  | 'Bold'
  | 'Light'
  | 'ExtraLight';

export type FontFamily = 'Nunito';
export type FontTypeStyle = 'Italic';

export interface FontProps {
  /**
   * `Regular` no está aquí porque es el valor por defecto
   */
  weight?: FontWeight;
  /**
   * `normal` no está aquí porque es el valor por defecto
   */
  style?: FontTypeStyle | '';
  /**
   * `Nunito` no está aquí porque es el valor por defecto
   */
  family?: FontFamily;
}

export default (options: FontProps = {}): FontStyle => {
  const { family = 'Nunito' } = options;
  let { weight = 'Regular', style } = options;

  if (!family || !font[family]) {
    return {};
  }
  const { weights, styles } = font[family];

  if (Platform.OS === 'android') {
    weight = weights[weight] ? weight : '';
    style = style && styles[style] ? style : '';

    const suffix = weight + style;

    return {
      fontFamily: family + (suffix.length ? `-${suffix}` : '')
    };
  }
  weight = weights[weight] || weights.Regular;
  style = (style && styles[style]) || 'normal';

  return {
    fontFamily: family,
    fontWeight: weight,
    fontStyle: style
  };
};
