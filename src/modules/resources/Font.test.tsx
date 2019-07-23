import Font from './Font';

it('default', () => {
  const result = Font({ weight: 'Medium' });
  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      fontFamily: 'Brevia',
      fontWeight: '500',
      fontStyle: 'normal'
    })
  );
});
