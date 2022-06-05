const getRanges = require('./index.js');

test('getRanges should return empty string if param is not a array', () => {
  expect(getRanges(5)).toBe('');
  expect(getRanges('abc')).toBe('');
  expect(getRanges({})).toBe('');
  expect(getRanges()).toBe('');
});

test('getRanges should return empty string if array length === 0', () => {
  expect(getRanges([])).toBe('');
});

test(`getRanges should return empty string if some element of
  array is not a number or bigger than Number.MAX_SAFE_INTEGER`, () => {
  expect(getRanges([9999999999999999999])).toBe('');
});

test(`getRanges should return empty string if some element of
  array less than zero`, () => {
  expect(getRanges([0, 555, -623])).toBe('');
});

test(`getRanges should return empty string if array have duplicates values`, () => {
  expect(getRanges([0, 1, 1, 78])).toBe('');
});

test('getRanges should work', () => {
  expect(getRanges([10, 635, 634, 3, 2, 0])).toBe('0, 2 - 3, 10, 634 - 635');
});
