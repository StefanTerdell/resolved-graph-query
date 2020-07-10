const util = require('util')

const out = (t: 'log' | 'error' | 'warning', label, obj?) => {
  console[t](label)
  if (obj) console[t](util.inspect(obj, { depth: null, color: true }))
}

export const warn = (label, obj?: object) => out('warning', label, obj)

export const log = (label, obj?: object) => out('log', label, obj)

export const error = (label, obj?: object) => {
  out('error', label, obj)
  throw label
}
