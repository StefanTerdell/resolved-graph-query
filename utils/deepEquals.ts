export const deepEquals = (left, right) =>
  typeof right === 'object'
    ? Object.keys(right).reduce((match, k) => match && deepEquals(left[k], right[k]), true)
    : left === right
