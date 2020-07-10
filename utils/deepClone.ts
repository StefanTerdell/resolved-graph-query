// import { deepEquals } from './deepEquals'

export const deepClone = (o) => {
  if (typeof o === 'object') {
    if (Array.isArray(o)) {
      return o.map((i) => deepClone(i))
    } else {
      return Object.fromEntries(Object.entries(o).map(([k, v]) => [k, deepClone(v)]))
    }
  } else {
    return o
  }
}

// const test = {
//   a: [
//     {
//       b: [
//         {
//           c: 'yo',
//         },
//       ],
//     },
//   ],
// }

// const res = deepClone(test)
// console.log(deepEquals(res, test))
// const notSame =
//   test.a[0].b[0].c === res.a[0].b[0].c &&
//   !Object.is(test.a[0].b[0], res.a[0].b[0]) &&
//   (test.a[0].b[0].c = 'watup') &&
//   res.a[0].b[0].c === 'yo'

// console.log(notSame)
