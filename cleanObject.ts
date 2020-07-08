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
