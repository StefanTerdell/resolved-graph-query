import { ResolvedGraph } from 'resolved-graph'
import { query } from './utils/query'
import { match } from './queries/match'

export const matchQuery = (queryString: string, resolvedGraph: ResolvedGraph) => query(match, queryString, resolvedGraph)
