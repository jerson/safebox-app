import { useState } from 'react';

const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return [value, { onChangeText }, setValue];
};
export default useTextInput;
