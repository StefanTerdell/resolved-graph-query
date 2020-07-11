import { Condition } from '../models/Condition'
import { ResolvedNode, ResolvedLink, ResolvedGraph } from 'resolved-graph'
import { matchDeepRight } from '../utils/matchDeepRight'
import { getKey } from '../utils/getKey'
import { tail } from '../utils/tail'
import { getConditions } from '../utils/getConditions'
import { concatExclusiveId } from '../utils/concatExclusiveId'
import { CloneGraph } from '../models/CloneGraph'
import { RecordCollector } from '../models/RecordCollector'
import { Record } from '../models/Record'
import { linear4 } from './testGraphs/linear4'
import { log } from '../utils/log'
import { circular3 } from './testGraphs/circular3'

const recurseLink = (
  returns: RecordCollector,
  map: CloneGraph,
  conditions: Condition[],
  nodeOriginal: ResolvedNode,
  lastLink,
) => {
  if (!conditions[0].recurse) return null
  conditions = [{ ...conditions[0], recurse: conditions[0].recurse - 1 }, ...tail(conditions)]
  const nodeClone = map.getNode(nodeOriginal, { from: [], to: [] })
  if (lastLink.to) nodeClone.to = concatExclusiveId(nodeClone.to, lastLink.to)
  if (lastLink.from) nodeClone.from = concatExclusiveId(nodeClone.from, lastLink.from)
  const { a } = getKey(conditions[0])
  const nextLinks = getLinks(returns, map, conditions, nodeOriginal[a], { [a]: nodeClone })
  if (!nextLinks.length) return null
  nodeClone[a] = nextLinks
  return nodeClone
}

const getLink = (returns: RecordCollector, map: CloneGraph, conditions: Condition[], linkOriginal, lastNode) => {
  if (!matchDeepRight(linkOriginal, conditions[0].match)) return null
  const linkClone = map.getLink(linkOriginal, lastNode)
  const { b } = getKey(conditions[0])
  linkClone[b] =
    getNode(returns, map, tail(conditions), linkOriginal[b], { [b]: [linkClone] }) ||
    recurseLink(returns, map, conditions, linkOriginal[b], { [b]: [linkClone] })
  if (!linkClone[b]) return null
  returns.save(conditions[0].alias, linkClone)
  return linkClone
}

const getLinks = (
  returns: RecordCollector,
  map: CloneGraph,
  conditions: Condition[],
  linkOriginals: ResolvedLink[],
  lastNode,
) => {
  return linkOriginals.map((linkOriginal) => getLink(returns, map, conditions, linkOriginal, lastNode)).filter((link) => link)
}

const getNode = (returns: RecordCollector, map: CloneGraph, conditions: Condition[], nodeOriginal: ResolvedNode, lastLink) => {
  if (!matchDeepRight(nodeOriginal, conditions[0].match)) return null
  const nodeClone = map.getNode(nodeOriginal, { from: [], to: [] })
  if (lastLink.to) nodeClone.to = concatExclusiveId(nodeClone.to, lastLink.to)
  if (lastLink.from) nodeClone.from = concatExclusiveId(nodeClone.from, lastLink.from)
  if (conditions.length === 1) {
    returns.save(conditions[0].alias, nodeClone)
    return nodeClone
  }
  const { a } = getKey(conditions[1])
  const nexLinks = getLinks(returns, map, tail(conditions), nodeOriginal[a], { [a]: nodeClone })
  if (!nexLinks.length) return null
  nodeClone[a] = concatExclusiveId(nodeClone[a], nexLinks)
  returns.save(conditions[0].alias, nodeClone)
  return nodeClone
}

const getNodes = (conditions: Condition[], nodeOriginals: ResolvedNode[]): Record[] => {
  const map = new CloneGraph()

  return nodeOriginals
    .map((nodeOriginal) => {
      const record = new RecordCollector()
      return { node: getNode(record, map, conditions, nodeOriginal, {}), record }
    })
    .filter(({ node }) => node)
    .map(({ record }) => record.record)
}

export const matchConditions = (conditions: Condition[], resolvedGraph: ResolvedGraph): Record[] => {
  return getNodes(conditions, resolvedGraph.nodes)
}

export const matchQuery = (query: string, resolvedGraph: ResolvedGraph): Record[] => {
  return getNodes(getConditions(query), resolvedGraph.nodes)
}

const records = matchQuery('{alias: "A", id: "A"}-{recurse:2}>{id: "A"}', circular3)
log('result', records)
