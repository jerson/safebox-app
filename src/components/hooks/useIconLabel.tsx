import useIconTintLabel from './useIconTintLabel';

function useIconLabel(value: string) {
  const result = useIconTintLabel(value);
  return {
    icon: result.icon,
    iconStyle: { color: result.tintColor }
  };
}
export default useIconLabel;
