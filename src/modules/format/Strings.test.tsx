import Strings from './Strings';

test('getError', () => {
  expect(Strings.getError({ message: 'sample' })).toBe('Sample');
});

test('capitalizeFirstLetter', () => {
  expect(Strings.capitalizeFirstLetter('sample')).toBe('Sample');
});
