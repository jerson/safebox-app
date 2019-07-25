import Colors from '../../modules/constants/Colors';

function useIconTintLabel(value: string) {
  const labelLower = value.toLowerCase();
  let icon = 'tag';
  let tintColor = Colors.grey5;
  if (labelLower.includes('facebook')) {
    icon = 'facebook';
    tintColor = '#1774eb';
  } else if (labelLower.includes('github')) {
    tintColor = '#000000';
    icon = 'github';
  } else if (labelLower.includes('gitlab')) {
    tintColor = '#f56a25';
    icon = 'gitlab';
  } else if (labelLower.includes('instagram')) {
    tintColor = '#d72c73';
    icon = 'instagram';
  } else if (labelLower.includes('chrome')) {
    tintColor = '#fbbc05';
    icon = 'chrome';
  } else if (labelLower.includes('linkedin')) {
    tintColor = '#0075b0';
    icon = 'linkedin';
  } else if (labelLower.includes('slack')) {
    tintColor = '#30b47d';
    icon = 'slack';
  } else if (labelLower.includes('email')) {
    tintColor = '#88d3ee';
    icon = 'inbox';
  } else if (labelLower.includes('gmail') || labelLower.includes('outlook')) {
    tintColor = '#e73b33';
    icon = 'mail';
  }

  return {
    icon,
    tintColor
  };
}
export default useIconTintLabel;