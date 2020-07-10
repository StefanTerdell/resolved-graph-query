import { Condition } from '../models/Condition'
import { error } from './log'
import * as JSON5 from 'json5'
import { Section } from '../models/Section'

const extractNode = (query, acc = '', depth = undefined): Section => {
  if (!query[0]) return null
  if (query[0] === '{') {
    depth = depth === undefined ? 1 : depth + 1
  } else if (query[0] === '}') {
    depth = depth - 1
  }
  if (depth === 0) {
    const json = JSON5.parse(acc + query[0])
    const alias = json.alias || null
    delete json.alias
    return { condition: { type: 'node', alias, match: json }, rest: query.substr(1) }
  } else {
    return extractNode(query.substr(1), depth === undefined ? acc : acc + query[0], depth)
  }
}

const extractLink = (query: string): Section => {
  let arrow = query.substr(0, 2)

  if (arrow === '->' || arrow === '<-') {
    return {
      rest: query.substring(2),
      condition: {
        type: arrow,
        alias: null,
        match: {},
      },
    }
  }

  const jsonSection = extractNode(query.substring(query.indexOf('{')))

  return {
    rest: jsonSection.rest.substr(1),
    condition: {
      type: query[0] + jsonSection.rest[0] === '<-' ? '<-' : '->',
      match: jsonSection.condition.match,
      alias: jsonSection.condition.alias,
      recurse: Number.parseInt(query.substr(1, query.indexOf('{') - 1)) || 0,
    },
  }
}

const getConditionsTailRec = (query: string, conditions = []) => {
  if (!query) return conditions
  if (conditions[conditions.length - 1]?.type !== 'node') {
    const section = extractNode(query)
    return getConditionsTailRec(section.rest, [...conditions, section.condition])
  } else {
    const section = extractLink(query)
    return getConditionsTailRec(section.rest, [...conditions, section.condition])
  }
}

const getVerifiedConditions = (conditions: Condition[]) => {
  for (let i = 0; i < conditions.length; i++) {
    if ((i % 2 === 1) === (conditions[i].type === 'node')) error(`Expected ${i % 2 === 1 ? 'Link' : 'Node'} @${i}`, conditions[i])
  }
  return conditions
}

export const getConditions = (query: string) => {
  return getVerifiedConditions(getConditionsTailRec(query))
}
