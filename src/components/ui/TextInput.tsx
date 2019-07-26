import React, { useState, useRef } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  TextInput as TextInputOriginal
} from 'react-native';
import TextError from './TextError';
import TextInputBase, {
  TextInputBaseProps,
  TextInputBaseRef
} from './TextInputBase';
import Colors from '../../modules/constants/Colors';
import Font from '../../modules/resources/Font';
import Text from './Text';
import Icon from 'react-native-vector-icons/Feather';
import ButtonIcon from './ButtonIcon';

const Sizes = {
  ClearButtonWidth: 40,
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
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 12,
    bottom: 1,
    justifyContent: 'center'
  } as ViewStyle,
  inputClearButton: {
    paddingRight: Sizes.ClearButtonWidth
  } as TextStyle,
  textErrorContainer: {
    marginTop: 10
  } as ViewStyle,
  icon: {
    fontSize: Sizes.Icon,
    color: Colors.grey5
  } as TextStyle,
  iconError: {
    color: Colors.danger
  } as TextStyle,
  iconFocus: {
    color: Colors.secondary
  } as TextStyle,
  input: {
    ...Font(),
    color: Colors.grey6,
    borderColor: Colors.grey2,
    borderWidth: 1,
    backgroundColor: Colors.white,
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
    right: -60
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
    fontSize: 22,
    color: Colors.accentDark
  } as TextStyle
});

export interface TextInputProps extends TextInputBaseProps {
  help?: React.ReactNode[] | React.ReactNode;
  label?: string | React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  containerInputStyle?: StyleProp<ViewStyle>;
  icon?: string;
  rightContainer?: React.ReactNode[] | React.ReactNode;
  rightContainerStyle?: StyleProp<ViewStyle>;
  labelContainer?: React.ReactNode[] | React.ReactNode;
  labelContainerStyle?: StyleProp<ViewStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  showClearButton?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export interface TextInputRef {
  setValue: (value: string) => void;
  getValue: () => string;
  getFormatValue: () => string;
  isValid: () => boolean;
  setError: (errorMessage?: string | React.ReactNode) => void;
  clearError: () => void;
  getInputRef: () => React.RefObject<TextInputOriginal>;
  focus: () => void;
  blur: () => void;
}

function TextInputWrapper(props: TextInputProps, ref: React.Ref<TextInputRef>) {
  const {
    style,
    children,
    help,
    containerStyle,
    containerInputStyle,
    icon,
    rightContainer,
    rightContainerStyle,
    showClearButton,
    label,
    labelContainer,
    labelContainerStyle,
    textErrorStyle,
    onBlur,
    onFocus,
    iconStyle,
    ...extraProps
  } = props;

  const inputRef = useRef<TextInputBaseRef>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | React.ReactNode>(
    ''
  );

  React.useImperativeHandle(ref, () => ({
    setValue: (value: string) => {
      inputRef.current && inputRef.current.setValue(value);
    },
    getValue: () => {
      if (!inputRef.current) {
        return '';
      }
      return inputRef.current.getValue();
    },
    getFormatValue: () => {
      if (!inputRef.current) {
        return '';
      }
      return inputRef.current.getFormatValue();
    },
    isValid: () => {
      if (!inputRef.current) {
        return false;
      }
      return inputRef.current.isValid();
    },
    setError: (errorMessage?: string | React.ReactNode) => {
      setErrorMessage(errorMessage);
    },
    clearError: () => {
      setErrorMessage(undefined);
    },
    getInputRef: () => {
      if (!inputRef.current) {
        return { current: null };
      }
      return inputRef.current && inputRef.current.getInputRef();
    },
    focus,
    blur
  }));

  const onClearAll = () => {
    inputRef.current && inputRef.current.setValue('');
    focus();
  };

  const focus = () => {
    inputRef.current && inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current && inputRef.current.blur();
  };

  const onFocusCallback = () => {
    setIsFocused(true);
    typeof onFocus === 'function' && onFocus();
  };

  const onBlurCallback = () => {
    setIsFocused(false);
    typeof onBlur === 'function' && onBlur();
  };

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
          {...extraProps}
          style={[
            styles.input,
            !!icon && styles.inputImage,
            isInvalid && styles.inputError,
            isFocused && styles.inputFocus,
            showClearButton && styles.inputClearButton,
            style
          ]}
          onEmptyState={setIsEmpty}
          onError={setErrorMessage}
          onBlur={onBlurCallback}
          onFocus={onFocusCallback}
          ref={inputRef}
        />

        {!!icon && (
          <View style={styles.iconContainer}>
            <Icon
              style={[
                styles.icon,
                isInvalid && styles.iconError,
                isFocused && styles.iconFocus,
                iconStyle
              ]}
              name={icon}
            />
          </View>
        )}
        {showClearButton && !isEmpty && (
          <ButtonIcon
            onPress={onClearAll}
            name={'x'}
            iconStyle={styles.clearButtonIcon}
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

const TextInput = React.forwardRef(TextInputWrapper);
TextInput.defaultProps = {
  editable: true,
  showClearButton: true
};
export default TextInput;
