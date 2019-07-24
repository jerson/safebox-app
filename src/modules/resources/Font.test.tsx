import Font from './Font';

it('default', () => {
  const result = Font({ weight: 'Regular' });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontStyle: 'normal'
    })
  );
});
