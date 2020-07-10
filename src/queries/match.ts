import { Condition } from '../models/Condition'
import { ResolvedNode, ResolvedLink, ResolvedGraph } from 'resolved-graph'
import { matchDeepRight } from '../utils/matchDeepRight'
import { getKey } from '../utils/getKey'
import { tail } from '../utils/tail'

const recurseLink = (conditions: Condition[], node) => {
  if (!conditions[0].recurse) return null
  conditions = [{ ...conditions[0], recurse: conditions[0].recurse - 1 }, ...tail(conditions)]
  const { a } = getKey(conditions[0])
  const nodeClone = { ...node }
  nodeClone[a] = getLinks(conditions, node[a], { [a]: nodeClone })
  if (nodeClone[a].length === 0) return null
  return nodeClone
}

const getLink = (conditions: Condition[], link, lastNode) => {
  if (!matchDeepRight(link, conditions[0].match)) return null
  const { a, b } = getKey(conditions[0])
  const linkClone = { ...link, [a]: lastNode }
  linkClone[b] = getNode(tail(conditions), link[b], { [b]: [linkClone] }) || recurseLink(conditions, link[b])
  if (!linkClone[b]) return null
  return linkClone
}

const getLinks = (conditions: Condition[], links: ResolvedLink[], lastNode) => {
  return links.map((link) => getLink(conditions, link, lastNode)).filter((link) => link)
}

const getNode = (conditions: Condition[], node: ResolvedNode, lastLink) => {
  if (!matchDeepRight(node, conditions[0].match)) return null
  const nodeClone = { ...node, to: [], from: [], ...lastLink }
  if (conditions.length === 1) return nodeClone
  const { a } = getKey(conditions[1])
  const nextLinks = getLinks(tail(conditions), node[a], { [a]: nodeClone })
  if (nextLinks.length === 0) return null
  nodeClone[a].push(...nextLinks)
  return nodeClone
}

const getNodes = (conditions: Condition[], nodes: ResolvedNode[]): ResolvedNode[] => {
  return nodes.map((node) => getNode(conditions, node, {})).filter((node) => node)
}

export const match = (conditions: Condition[], resolvedGraph: ResolvedGraph): ResolvedNode[] => {
  return getNodes(conditions, resolvedGraph.nodes)
}
