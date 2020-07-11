import { concatExclusive } from './concatExclusive'
export const concatExclusiveId = (a, b) => {
  return concatExclusive(a, b, (itemA, itemB) => itemA.id === itemB.id)
}
