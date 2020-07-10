import { condition } from '../condition'
import { getConditions } from '../getConditions'
import { ResolvedGraph } from 'resolved-graph'
import { getKey } from '../getKey'

//this is simple and pretty but terrible. cant reuse conditions for recursion and cant return specific aliases. Should be fast though.

const buildNodeMatch = (conditions: condition[]) =>
  conditions.length > 1
    ? { ...conditions[0].match }
    : { ...conditions[0].match, [getKey(conditions[1]).a]: [buildLinkMatch(conditions.splice(1))] }

const buildLinkMatch = (conditions: condition[]) => ({
  ...conditions[0].match,
  [getKey(conditions[0]).b]: buildNodeMatch(conditions.splice(1)),
})

const launchQuery = (conditions: condition[], resolvedGraph: ResolvedGraph) =>
  conditions[0].type === 'node'
    ? resolvedGraph.findNodes(buildNodeMatch(conditions))
    : resolvedGraph.findLinks(buildLinkMatch(conditions))

export const simpleQuery = (query: string, resolvedGraph: ResolvedGraph) => launchQuery(getConditions(query), resolvedGraph)

console.log(JSON.stringify(buildNodeMatch(getConditions('{"id":"1"}->{"id":"2"}->{"id":"3"}')), null, 2))
