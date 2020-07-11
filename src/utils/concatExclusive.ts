export const concatExclusive = (a, b, comparator: { (itemA, itemB): boolean } = (itemA, itemB) => itemA === itemB) =>
  b.reduce((acc, itemB) => (acc.find((itemA) => comparator(itemA, itemB)) === undefined ? [...acc, itemB] : acc), [...a])
