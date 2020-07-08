import { condition } from './condition'

type section = {
  rest: string
  condition: condition
}

const extractNode = (query, acc = '', depth = undefined): section => {
  if (!query[0]) return null
  if (query[0] === '{') {
    depth = depth === undefined ? 1 : depth + 1
  } else if (query[0] === '}') {
    depth = depth - 1
  }
  if (depth === 0) {
    const json = JSON.parse(acc + query[0])
    return { condition: { type: 'node', alias: json.alias, data: { ...json, alias: undefined } }, rest: query.substr(1) }
  } else {
    return extractNode(query.substr(1), depth === undefined ? acc : acc + query[0], depth)
  }
}

const extractLink = (query: string): section => {
  let arrow = query.substr(0, 2)

  if (arrow === '->' || arrow === '<-') {
    return {
      rest: query.substring(2),
      condition: {
        type: arrow,
        data: {},
      },
    }
  }

  const jsonSection = extractNode(query.substring(query.indexOf('{')))

  return {
    rest: jsonSection.rest.substr(1),
    condition: {
      type: query[0] + jsonSection.rest[0] === '<-' ? '<-' : '->',
      data: jsonSection.condition.data,
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

export const getConditions = (query: string) => {
  return getConditionsTailRec(query)
}
