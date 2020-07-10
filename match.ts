import { condition } from './condition'
import { ResolvedGraph, ResolvedNode, ResolvedLink } from 'resolved-graph'
import { matchDeepRight } from './utils/matchDeepRight'
import { getKey } from './getKey'
import { getConditions } from './getConditions'
import { tail } from './utils/tail'

const recurseLink = (conditions: condition[], node) => {
  if (!conditions[0].recurse) return null
  conditions = [{ ...conditions[0], recurse: conditions[0].recurse - 1 }, ...tail(conditions)]

  const { a } = getKey(conditions[0])

  const nodeClone = { ...node }
  const nextLinks = getLinks(conditions, node[a], { [a]: nodeClone })

  if (nextLinks.length === 0) return null
  nodeClone[a].push(...nextLinks)
  return nodeClone
}

const getLink = (conditions: condition[], link, lastNode) => {
  if (!matchDeepRight(link, conditions[0].match)) return null
  const { a, b } = getKey(conditions[0])
  const linkClone = { ...link, [a]: lastNode }
  linkClone[b] = getNode(tail(conditions), link[b], { [b]: [linkClone] }) || recurseLink(conditions, link[b])
  if (!linkClone[b]) return null
  return linkClone
}

const getLinks = (conditions: condition[], links: ResolvedLink[], lastNode) =>
  links.map((link) => getLink(conditions, link, lastNode)).filter((link) => link)

const getNode = (conditions: condition[], node: ResolvedNode, lastLink) => {
  if (!matchDeepRight(node, conditions[0].match)) return null
  const nodeClone = { ...node, to: [], from: [], ...lastLink }
  if (conditions.length === 1) return nodeClone
  const { a } = getKey(conditions[1])
  const nextLinks = getLinks(tail(conditions), node[a], { [a]: nodeClone })
  if (nextLinks.length === 0) return null
  nodeClone[a].push(...nextLinks)
  return nodeClone
}

const getNodes = (conditions: condition[], nodes: ResolvedNode[]): ResolvedNode[] =>
  nodes.map((node) => getNode(conditions, node, {})).filter((node) => node)

const launchQuery = (conditions: condition[], resolvedGraph: ResolvedGraph): ResolvedNode[] =>
  getNodes(conditions, resolvedGraph.nodes)

export const complexQuery = (query: string, resolvedGraph: ResolvedGraph) => launchQuery(getConditions(query), resolvedGraph)
