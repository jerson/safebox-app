import Font from './Font';

test('default', () => {
  const result = Font({weight: 'Regular'});
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontStyle: 'normal',
    }),
  );
});
