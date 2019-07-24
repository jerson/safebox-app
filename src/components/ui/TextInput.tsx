import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import ButtonImage from './ButtonImage';
import TextError from './TextError';
import TextInputBase, { TextInputBaseProps } from './TextInputBase';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';

const Sizes = {
  ClearButtonWidth: 30,
  Icon: 20
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 10
  } as ViewStyle,
  content: {
    position: 'relative'
  } as ViewStyle,
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    bottom: 1,
    justifyContent: 'center'
  } as ViewStyle,
  inputClearButton: {
    paddingRight: Sizes.ClearButtonWidth
  } as TextStyle,
  textErrorContainer: {
    marginTop: 10
  } as ViewStyle,
  image: {
    width: Sizes.Icon,
    height: Sizes.Icon,
    tintColor: Colors.grey4
  } as ImageStyle,
  imageError: {
    tintColor: Colors.danger
  } as ImageStyle,
  imageFocus: {
    tintColor: Colors.secondary
  } as ImageStyle,
  input: {
    ...Font(),
    color: Colors.grey6,
    borderColor: Colors.grey2,
    borderWidth: 1,
    backgroundColor: Colors.grey1,
    borderRadius: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 8,
    paddingTop: 10,
    fontSize: 15,
    lineHeight: 18,
    textDecorationLine: 'none'
  } as TextStyle,
  labelText: {
    ...Font(),
    lineHeight: 16,
    fontSize: 14,
    color: Colors.grey5
  } as TextStyle,
  labelErrorText: {
    color: Colors.danger
  } as TextStyle,
  labelFocusText: {
    color: Colors.secondary
  } as TextStyle,
  labelContainer: {
    flexDirection: 'row',
    paddingBottom: 4,
    alignItems: 'center'
  } as TextStyle,
  inputFocus: {
    borderColor: Colors.secondary
  } as TextStyle,
  inputImage: {
    paddingLeft: Sizes.Icon + 20
  } as TextStyle,
  inputError: {
    borderColor: Colors.danger,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.grey6,
    shadowRadius: 0,
    shadowOpacity: 0
  } as TextStyle,
  rightContainer: {
    position: 'absolute',
    right: -Sizes.ClearButtonWidth
  } as ViewStyle,
  clearButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 1,
    width: Sizes.ClearButtonWidth,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle,
  clearButtonIcon: {
    width: 18,
    height: 18,
    tintColor: Colors.accentDark
  } as ImageStyle
});

export interface TextInputProps extends TextInputBaseProps {
  help?: React.ReactNode[] | React.ReactNode;
  label?: string | React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  containerInputStyle?: StyleProp<ViewStyle>;
  imageSource?: ImageSourcePropType;
  rightContainer?: React.ReactNode[] | React.ReactNode;
  rightContainerStyle?: StyleProp<ViewStyle>;
  labelContainer?: React.ReactNode[] | React.ReactNode;
  labelContainerStyle?: StyleProp<ViewStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  showClearButton?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
}

export interface TextInputState {
  isFocused: boolean;
  isEmpty: boolean;
  errorMessage?: string | React.ReactNode;
}

export default class TextInput extends React.Component<
  TextInputProps,
  TextInputState
> {
  static defaultProps = {
    editable: true,
    showClearButton: true
  };
  state: TextInputState = {
    isFocused: false,
    isEmpty: true,
    errorMessage: ''
  };
  input!: TextInputBase | null;

  setValue = (value: string) => {
    this.input && this.input.setValue(value);
  };

  onEmptyState = (isEmpty: boolean) => {
    this.setState({ isEmpty });
  };
  getFormatValue = () => {
    if (!this.input) {
      return;
    }
    return this.input.getFormatValue();
  };
  getValue = () => {
    if (!this.input) {
      return '';
    }
    return this.input.getValue();
  };
  isValid = () => {
    if (!this.input) {
      return false;
    }
    return this.input.isValid();
  };
  setError = (errorMessage?: string | React.ReactNode) => {
    this.setState({ errorMessage });
  };
  clearError = () => {
    this.setError(undefined);
  };

  onClearAll = () => {
    this.input && this.input.setValue('');
    this.focus();
  };

  getInputRef = () => {
    return this.input;
  };
  focus = () => {
    this.input && this.input.focus();
  };
  blur = () => {
    this.input && this.input.blur();
  };
  onFocus = () => {
    const { onFocus } = this.props;
    this.setState({ isFocused: true });
    typeof onFocus === 'function' && onFocus();
  };

  onBlur = () => {
    const { onBlur } = this.props;
    this.setState({ isFocused: false });
    typeof onBlur === 'function' && onBlur();
  };

  onError = (message?: string) => {
    this.setError(message);
  };

  render() {
    const { errorMessage, isEmpty, isFocused } = this.state;
    const {
      style,
      children,
      help,
      containerStyle,
      containerInputStyle,
      imageSource,
      rightContainer,
      rightContainerStyle,
      showClearButton,
      label,
      labelContainer,
      labelContainerStyle,
      textErrorStyle,
      ...props
    } = this.props;

    const isInvalid = !!errorMessage;
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.labelContainer, labelContainerStyle]}>
          {!!label && (
            <Text
              style={[
                styles.labelText,
                isInvalid && styles.labelErrorText,
                isFocused && styles.labelFocusText
              ]}
            >
              {label}
            </Text>
          )}
          {labelContainer}
        </View>
        <View style={[styles.content, containerInputStyle]}>
          <TextInputBase
            selectionColor={Colors.secondary}
            {...props}
            style={[
              styles.input,
              !!imageSource && styles.inputImage,
              isInvalid && styles.inputError,
              isFocused && styles.inputFocus,
              showClearButton && styles.inputClearButton,
              style
            ]}
            onEmptyState={this.onEmptyState}
            onError={this.onError}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            ref={ref => {
              this.input = ref;
            }}
          />

          {imageSource && (
            <View style={styles.imageContainer}>
              <Image
                style={[
                  styles.image,
                  isInvalid && styles.imageError,
                  isFocused && styles.imageFocus
                ]}
                resizeMode={'contain'}
                source={imageSource}
              />
            </View>
          )}
          {showClearButton && !isEmpty && (
            <ButtonImage
              onPress={this.onClearAll}
              imageSource={require('../../assets/images/clear-input-icon.png')}
              imageStyle={styles.clearButtonIcon}
              style={styles.clearButton}
            />
          )}
          <View style={[styles.rightContainer, rightContainerStyle]}>
            {rightContainer}
          </View>
        </View>
        {children}
        {!isInvalid && help}
        {isInvalid && (
          <TextError style={[styles.textErrorContainer, textErrorStyle]}>
            {errorMessage}
          </TextError>
        )}
      </View>
    );
  }
}
