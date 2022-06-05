const getRanges = require('./index.js');

test('get ranges works', () => {
  expect(getRanges([1, 2, 3])).toBe('1 - 3');
});
