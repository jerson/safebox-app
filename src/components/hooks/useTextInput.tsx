import { useState, Dispatch, SetStateAction } from 'react';

function useTextInput(
  initialValue: string
): [string, any, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return [value, { onChangeText }, setValue];
}
export default useTextInput;
