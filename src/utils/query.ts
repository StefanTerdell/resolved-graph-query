import { ResolvedGraph } from 'resolved-graph'
import { Condition } from '../models/Condition'
import { getConditions } from './getConditions'

export const query = (
  func: { (conditions: Condition[], resolvedGraph: ResolvedGraph) },
  queryString: string,
  resolvedGraph: ResolvedGraph,
) => {
  return func(getConditions(queryString), resolvedGraph)
}
