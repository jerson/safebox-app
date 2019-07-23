import { Platform } from 'react-native';

const font: any = {
  Brevia: {
    weights: {
      ExtraBlack: '900',
      Black: '800',
      Bold: '700',
      SemiBold: '600',
      Medium: '500',
      Regular: '400',
      Light: '300'
    },
    styles: {
      Italic: 'italic'
    }
  },
  Roboto: {
    weights: {
      Black: '900',
      Bold: '700',
      Medium: '500',
      Regular: '400'
    },
    styles: {}
  }
};

export interface FontStyle {
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
}

type FontWeight =
  | 'ExtraBlack'
  | 'Black'
  | 'Bold'
  | 'SemiBold'
  | 'Medium'
  | 'Light';

type FontFamily = 'Roboto';
type FontTypeStyle = 'Italic';

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
   * `Roboto` no está aquí porque es el valor por defecto
   */
  family?: FontFamily;
}

export default (options: FontProps = {}): FontStyle => {
  const finalOptions = {
    weight: 'Regular',
    family: 'Brevia',
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
