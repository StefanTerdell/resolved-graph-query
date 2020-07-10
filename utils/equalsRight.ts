export const equalsRight = (left, right) =>
  Object.keys(right).reduce((match, key) => {
    return (
      match &&
      (right[key] === undefined ||
        (left[key] !== undefined && typeof right[key] === 'object'
          ? equalsRight(left[key], right[key])
          : left[key] === right[key]))
    )
  }, true)
