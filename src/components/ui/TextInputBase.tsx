import React, { useState, useEffect, useRef } from 'react';
import {
  InteractionManager,
  MeasureLayoutOnSuccessCallback,
  TextInput,
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

export interface TextInputBaseRef {
  setValue: (value: string) => void;
  getValue: () => string;
  getFormatValue: () => string;
  isValid: () => boolean;
  getInputRef: () => React.RefObject<TextInput>;
  getFocusMode: () => string;
  getFocusOffset: () => number;
  measureLayout: (
    relativeToNativeNode: number,
    onSuccess: MeasureLayoutOnSuccessCallback,
    onFail?: () => void
  ) => void;
  focus: () => void;
  blur: () => void;
}

function TextInputBaseWrapper(
  props: TextInputBaseProps,
  ref: React.Ref<TextInputBaseRef>
) {
  const {
    defaultValue,
    focusMode,
    focusOffset,
    onError,
    onChangeText,
    onEmptyState,
    onFormatValue,
    editable,
    value: valueDefault,
    ...extraProps
  } = props;

  const [value, setValue] = useState(valueDefault || '');
  const inputRef = useRef<TextInput>(null);
  let interaction: any;

  React.useImperativeHandle(ref, () => ({
    setValue: (value: string) => {
      onChangeTextCallback(value);
    },
    getValue: () => {
      return value.trim();
    },
    getFormatValue: () => {
      return value.trim();
    },
    isValid: () => {
      return true;
    },
    getInputRef: () => {
      return inputRef;
    },
    getFocusMode: () => {
      return focusMode || '';
    },
    getFocusOffset: () => {
      return focusOffset || 0;
    },
    measureLayout: (
      relativeToNativeNode: number,
      onSuccess: MeasureLayoutOnSuccessCallback,
      onFail?: () => void
    ) => {
      inputRef.current &&
        inputRef.current.measureLayout(
          relativeToNativeNode,
          onSuccess,
          typeof onFail === 'function'
            ? onFail
            : () => {
                return;
              }
        );
    },
    focus,
    blur
  }));

  const onChangeTextCallback = (value: string) => {
    Log.silent(TAG, 'onChangeTexteditable', editable, value);
    if (!editable) {
      return;
    }

    Log.silent(TAG, 'onChangeText', value);
    const isEmpty = !value;
    const error = '';

    if (typeof onFormatValue === 'function') {
      value = onFormatValue(value);
    }

    typeof onEmptyState === 'function' && onEmptyState(isEmpty);
    typeof onChangeText === 'function' && onChangeText(value);
    typeof onError === 'function' && onError(error);

    setValue(value);
  };

  const focus = () => {
    if (!editable) {
      return;
    }
    Log.debug(TAG, 'focus', 'ok');
    interaction && interaction.cancel();
    interaction = InteractionManager.runAfterInteractions(() => {
      inputRef.current && inputRef.current.focus();
    });
  };

  useEffect(() => {
    return () => {
      interaction && interaction.cancel();
    };
  }, []);

  const blur = () => {
    Log.debug(TAG, 'blur', 'ok');
    inputRef.current && inputRef.current.blur();
  };

  useEffect(() => {
    if (defaultValue) {
      onChangeTextCallback(defaultValue);
    }
  }, []);

  return (
    <TextInput
      underlineColorAndroid={'transparent'}
      placeholderTextColor={Colors.grey5}
      {...extraProps}
      value={value}
      editable={editable}
      onChangeText={onChangeTextCallback}
      ref={inputRef}
    />
  );
}

const TextInputBase = React.forwardRef(TextInputBaseWrapper);
TextInputBase.defaultProps = {
  editable: true
};

export default TextInputBase;
