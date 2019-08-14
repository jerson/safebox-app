import { useState } from 'react';
import { LayoutAnimation } from 'react-native';

function useAnimatedState<T>(initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState(initialValue);

  const setAnimatedValue = (newValue: T) => {
    LayoutAnimation.spring();
    setValue(newValue);
  };

  return [value, setAnimatedValue];
}
export default useAnimatedState;
