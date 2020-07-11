import { concatExclusive } from '../utils/concatExclusive'
export const concatExclusiveId = (a, b) => {
  return concatExclusive(a, b, (itemA, itemB) => itemA.id === itemB.id)
}
