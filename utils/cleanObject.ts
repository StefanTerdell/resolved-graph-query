/**
 * Returns a deep clone of an object with any empty arrays or null values omitted
 * @param o The object to clone
 */
export const cleanObject = (o) => {
  if (Array.isArray(o)) {
    const n = []
    for (const v of o) {
      if (v !== null && v !== undefined) n.push(typeof v === 'object' ? cleanObject(v) : v)
    }
    return n.length ? n : undefined
  } else {
    const n = {}
    for (const k of Object.keys(o)) {
      n[k] = o[k] === null ? undefined : typeof o[k] === 'object' ? cleanObject(o[k]) : o[k]
    }
    return n
  }
}

const nco = (o) =>
  Array.isArray(o)
    ? o.length
      ? o.reduce((acc, v) => (v == null ? acc : [...acc, typeof v === 'object' ? nco(v) : v]), [])
      : undefined
    : Object.keys(o).length
    ? Object.keys(o).reduce((acc, k) => (o[k] == null ? o[k] : { ...acc, [k]: typeof o[k] === 'object' ? nco(o[k]) : o[k] }), {})
    : undefined

const testObj = {
  emptyProp: undefined,
  nullProp: null,
  valProp: 'something',
  otherValProp: false,
  emptyArray: [],
  emptyObject: {},
  arrayWithValues: [1, 2, 3],
  objectWithValues: { a: 'b', c: 'd' },
  deepArray: [[1, 2, 3], [3, 2, 1], []],
  deepObject: {
    value: 123,
    emptyString: '',
    innerObject: {
      value: 'pelle',
      arr: [[5, 5, 5], []],
    },
  },
}

const expect = {
  valProp: 'something',
  otherValProp: false,
  arrayWithValues: [1, 2, 3],
  objectWithValues: { a: 'b', c: 'd' },
  deepArray: [
    [1, 2, 3],
    [3, 2, 1],
  ],
  deepObject: {
    value: 123,
    innerObject: {
      value: 'pelle',
      arr: [[5, 5, 5]],
    },
  },
}
