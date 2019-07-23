import Font from './Font';

it('default', () => {
  const result = Font({ weight: 'Regular' });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      fontFamily: 'Lato',
      fontWeight: '400',
      fontStyle: 'normal'
    })
  );
});
