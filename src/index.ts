import { ResolvedGraph, ResolvedNode } from 'resolved-graph'
import { query } from './utils/query'
import { match } from './queries/match'

export const matchQuery = (queryString: string, resolvedGraph: ResolvedGraph): ResolvedNode[] =>
  query(match, queryString, resolvedGraph)
