import { condition } from './condition'
import { equalsRight } from './equalsRight'
import { cleanObject } from './cleanObject'
import { ResolvedNode } from 'resolved-graph'

/**
 * @param conditions The query (in condition[] form) to evaluate
 * @param nodes The collection of ResolvedNode to perform the query on
 * @param safe If true, removes circular dependencies
 * @param clean If true, removes empty arrays and nulls
 */
export const match = (conditions: condition[], nodes: ResolvedNode[], safe: boolean = false, clean: boolean = false) => {
  const checkNode = (conditions: condition[], originalNode: ResolvedNode, lastLinks: { [x: string]: any[] }, safe: boolean, index, acc: { [alias: string]: any[] }) => {
    if (conditions.length === 0) {
      return acc
    }

    const [nodeConditions, linkConditions, ...nextConditions] = conditions

    if (nodeConditions.type !== 'node') throw `Expected type 'node' @${index + 1}: ${nodeConditions}`

    const nodeClone = equalsRight(originalNode, nodeConditions.data) ? { ...originalNode, ...lastLinks } : null

    if (conditions.length === 1) {
      if (nodeClone && nodeConditions.alias)
        acc[nodeConditions.alias] = acc[nodeConditions.alias] ? [...acc[nodeConditions.alias], { type: 'node', ...nodeClone }] : [{ type: 'node', ...nodeClone }]

      return nodeClone
    }

    if (linkConditions.type !== '<-' && linkConditions.type !== '->') throw `Expected type '->' or '<-' @${index + 1}: ${linkConditions}`

    const recurseConditions = linkConditions.recurse && conditions[2] ? [conditions[2], { ...linkConditions, recurse: linkConditions.recurse - 1 }].concat(nextConditions) : null

    const [a, b] = linkConditions.type === '->' ? ['from', 'to'] : ['to', 'from']

    const linkClones = originalNode[a]
      .filter((originalLink) => equalsRight(originalLink, linkConditions.data))
      .map((originalLink) => {
        let next = checkNode(nextConditions, originalLink[b], { [b]: [safe ? null : originalLink], [a]: [] }, safe, index + 2, acc)
        if (!next[b].length && recurseConditions) next = checkNode(recurseConditions, originalLink[b], { [b]: [safe ? null : originalLink], [a]: [] }, safe, index + 2, acc)

        return {
          ...originalLink,
          [a]: safe ? null : nodeClone,
          [b]: next,
        }
      })
      .filter((linkClone) => linkClone[b])

    if (linkConditions.alias) {
      acc[linkConditions.alias] = acc[linkConditions.alias]
        ? [...acc[linkConditions.alias], ...linkClones.map((l) => ({ type: 'link', ...l }))]
        : [...linkClones.map((l) => ({ type: 'link', ...l }))]
    }

    nodeClone[a] = linkClones
    if (nodeClone[a].length && nodeConditions.alias)
      acc[nodeConditions.alias] = acc[nodeConditions.alias] ? [...acc[nodeConditions.alias], { type: 'node', ...nodeClone }] : [{ type: 'node', ...nodeClone }]

    return nodeClone[a].length ? nodeClone : null
  }

  const result = {}
  nodes.map((n) => checkNode(conditions, n, { to: [], from: [] }, safe, 0, result)).filter((n) => n)
  return clean && safe ? cleanObject(result) : result
}
