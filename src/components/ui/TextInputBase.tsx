import React from 'react';
import {
  InteractionManager,
  MeasureLayoutOnSuccessCallback,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps as BaseTextInputProps
} from 'react-native';

import Colors from '../../modules/constants/Colors';
import Log from '../../modules/log/Log';

const TAG = '[TextInputBase]';

export interface TextInputBaseProps extends BaseTextInputProps {
  onError?: (error: string) => void;
  onEmptyState?: (isEmpty: boolean) => void;
  onFormatValue?: (value: string) => string;
  focusMode?: 'none' | 'top' | 'bottom' | 'center';
  focusOffset?: number;
}

export interface TextInputBaseState {
  value: string;
}

export default class TextInputBase extends React.Component<
  TextInputBaseProps,
  TextInputBaseState
> {
  static defaultProps = {};

  state: TextInputBaseState = {
    value: ''
  };
  private interaction: any;
  private input!: TextInput | null;

  setValue = (value: string) => {
    this.onChangeText(value);
  };
  onChangeText = (value: string) => {
    const { editable } = this.props;
    if (!editable) {
      return;
    }

    Log.silent(TAG, 'onChangeText', value);
    const { onError, onChangeText, onEmptyState, onFormatValue } = this.props;
    const isEmpty = !value;
    const error = '';

    if (typeof onFormatValue === 'function') {
      value = onFormatValue(value);
    }

    typeof onEmptyState === 'function' && onEmptyState(isEmpty);
    typeof onChangeText === 'function' && onChangeText(value);
    typeof onError === 'function' && onError(error);

    this.setState(() => ({ value }));
  };

  getFormatValue = () => {
    return this.state.value.trim();
  };
  getValue = () => {
    const { value } = this.state;
    return value.trim();
  };
  isValid = () => {
    return true;
  };
  focus = () => {
    const { editable } = this.props;
    if (!editable) {
      return;
    }
    Log.debug(TAG, 'focus', 'ok');
    this.interaction && this.interaction.cancel();
    this.interaction = InteractionManager.runAfterInteractions(() => {
      this.input && this.input.focus();
    });
  };
  getFocusMode = (): string => {
    return this.props.focusMode || '';
  };
  getFocusOffset = (): number => {
    return this.props.focusOffset || 0;
  };
  blur = () => {
    Log.debug(TAG, 'blur', 'ok');
    this.input && this.input.blur();
  };
  measureLayout = (
    relativeToNativeNode: number,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ) => {
    this.input &&
      this.input.measureLayout(
        relativeToNativeNode,
        onSuccess,
        typeof onFail === 'function'
          ? onFail
          : () => {
              return;
            }
      );
  };
  onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onFocus } = this.props;

    Log.debug(TAG, 'onFocus', 'ok');

    typeof onFocus === 'function' && onFocus(e);
  };
  onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onBlur } = this.props;

    Log.debug(TAG, 'onBlur', 'ok');

    typeof onBlur === 'function' && onBlur(e);
  };

  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      this.onChangeText(defaultValue);
    }
  }

  componentWillUnmount() {
    this.interaction && this.interaction.cancel();
  }

  getInputRef = () => {
    return this.input;
  };

  render() {
    const { ...props } = this.props;
    const { value } = this.state;
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        placeholderTextColor={Colors.grey5}
        value={value}
        {...props}
        onChangeText={this.onChangeText}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        ref={(ref: TextInput | null) => {
          this.input = ref;
        }}
      />
    );
  }
} /*

const TextInputBase: React.FC<TextInputBaseProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>sample</Text>
      </View>
    </SafeAreaView>
  );
};

export default TextInputBase*/
