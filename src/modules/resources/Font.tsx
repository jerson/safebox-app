import { Platform } from 'react-native';

const font: any = {
  Lato: {
    weights: {
      Black: '800',
      Bold: '700',
      Regular: '400',
      Light: '300',
      Thin: '300'
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

export type FontWeight = 'Regular' | 'Black' | 'Bold' | 'Light' | 'Thin';

export type FontFamily = 'Lato';
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
   * `Lato` no está aquí porque es el valor por defecto
   */
  family?: FontFamily;
}

export default (options: FontProps = {}): FontStyle => {
  const finalOptions = {
    weight: 'Regular',
    family: 'Lato',
    ...options
  };
  const { family } = finalOptions;
  let { weight, style } = finalOptions;

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
