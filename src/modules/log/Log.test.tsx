import Log from './Log';

test('exception', () => {
  Log.exception('sample', 'sample', {message: 'sample'});
});

test('debug', () => {
  Log.debug('sample');
});

test('log', () => {
  Log.log('sample');
});

test('info', () => {
  Log.info('sample');
});

test('warn', () => {
  Log.warn('sample');
});

test('error', () => {
  Log.error('sample');
});
