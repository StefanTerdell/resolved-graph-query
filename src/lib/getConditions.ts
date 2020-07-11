import { error } from '../utils/log'
import { parse } from 'json5'
import { Condition } from '../models/Condition'

const parseConditions = (query: string) => {
  const results: Condition[] = []
  let at = 0
  let ch = ''

  const next = (c?: string) => {
    ch = query.charAt(at)
    if (c && ch !== c) error(`Expected ${c} but found ${ch} at ${at}`)
    at++
    return ch
  }

  const white = () => {
    while (ch && ch === ' ') {
      next()
    }
  }

  const json = () => {
    const start = at
    let section = ch
    let depth = 1
    let ignoring = ''
    while (depth > 0 && next()) {
      section += ch
      ;({
        '"': () => (!ignoring && (ignoring = '"')) || (ignoring === '"' && (ignoring = '')),
        "'": () => (!ignoring && (ignoring = "'")) || (ignoring === "'" && (ignoring = '')),
        '{': () => !ignoring && ++depth,
        '}': () => !ignoring && --depth,
      }[ch]?.())
    }
    if (depth > 0) error(`Expected object closure } after ${start} but never found it`)
    return parse(section)
  }

  const node = () => {
    const data = json()
    const alias = data.alias || null
    delete data.alias
    results.push({
      type: 'node',
      alias,
      match: data,
    })
  }

  const link = (arrow: '->' | '<-') => {
    next()
    if (ch === arrow[1]) {
      results.push({
        type: arrow,
        alias: null,
        match: {},
      })
    } else if (ch === '{') {
      const data = json()
      const alias = data.alias || null
      delete data.alias
      const recurse = data.recurse || null
      delete data.recurse
      results.push({
        type: arrow,
        alias,
        recurse,
        match: data,
      })
      next(arrow[1])
    } else {
      error(`Expected { or ${arrow[1]} at ${at} but found ${ch}`)
    }
  }

  while (next()) {
    white()
    ;({
      '{': node,
      '-': () => link('->'),
      '<': () => link('<-'),
    }[ch]?.())
  }

  return results
}

const getVerifiedConditions = (conditions: Condition[]) => {
  for (let i = 0; i < conditions.length; i++) {
    if ((i % 2 === 1) === (conditions[i].type === 'node')) error(`Expected ${i % 2 === 1 ? 'Link' : 'Node'} @${i}`, conditions[i])
  }
  return conditions
}

export const getConditions = (query: string) => {
  return getVerifiedConditions(parseConditions(query))
}
