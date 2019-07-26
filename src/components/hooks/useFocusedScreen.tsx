import { NavigationScreenProp } from 'react-navigation';
import { useState, useEffect } from 'react';

function useFocusedScreen(navigation: NavigationScreenProp<any>) {
  const [focused, setFocused] = useState(navigation.isFocused);
  useEffect(() => {
    const didFocus = () => {
      setFocused(true);
    };
    const willBlur = () => {
      setFocused(false);
    };
    const didFocusListener = navigation.addListener('didFocus', didFocus);
    const willBlurListener = navigation.addListener('willBlur', willBlur);

    return () => {
      willBlurListener.remove();
      didFocusListener.remove();
    };
  }, []);

  return [focused];
}
export default useFocusedScreen;
