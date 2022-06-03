const isArray = (arr) => Array.isArray(arr);
const isPositiveNumbers = (arr) => arr.some((e) => typeof e !== 'number' || e <= 0);
const hasDuplicates = (arr) => (new Set(arr)).size !== arr.length;
const sortAsc = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;

  return 0;
};
const formatRange = (arr) => {
  if (arr.length === 0) return '';
  if (arr.length === 1) return `${arr[0]}`;

  return `${arr[0]} - ${arr[arr.length - 1]}`;
};

export const getRanges = (arr) => {
  if (!isArray(arr) || !isPositiveNumbers(arr) || hasDuplicates(arr)) return '';

  const sorted = arr.sort(sortAsc);

  // probably we can use two start and end variables instead array
  let range = [];
  let result = '';

  for (let i = 0; i <= sorted.length; i++) {
    const current = sorted[i];
    const previous = sorted[i - 1];

    if (i === 0) {
      range.push(current);
    }

    if (current - previous > 1) {
      result += `${formatRange(range)}, `;
      range = [current];
    }

    if (current - previous === 1) {
      range.push(current);
    }

    if (i === sorted.length - 1) {
      result += `${formatRange(range)}`;
    }
  }

  return result;
}
