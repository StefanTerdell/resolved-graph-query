/**
 * Returns true if the left argument has the same type and value as the right argument or the right argument is null or undefined
 *
 * If the arguments are objects, returns true if the left object contains properties matching the type and value of all of the right objects properties
 *
 * If the arguments are arrays, returns true if the left array contains items matching the type and value of all of the items in the right array
 *
 * If any of the properties or items are objects or arrays, the function will run recursively through their propertierties or items
 */
export const matchDeepRight = (left, right): boolean =>
  right == null ||
  left === right ||
  (typeof right === 'object' && right instanceof Date
    ? left <= right && left >= right
    : Array.isArray(right)
    ? Array.isArray(left) &&
      right.reduce(
        (match, rightValue) => match && left.find((leftValue) => matchDeepRight(leftValue, rightValue)) !== undefined,
        true,
      )
    : typeof left === 'object' &&
      Object.keys(right).reduce((match, key) => match && matchDeepRight(left[key], right[key]), true)) ||
  (typeof right === 'function' && left.toString() === right.toString())
