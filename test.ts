import { Graph, ResolvedGraph } from 'resolved-graph'
import { matchQuery } from '.'

const graph: Graph = {
  nodes: [
    {
      id: 'A',
    },
    {
      id: 'B',
    },
    {
      id: 'C',
      data: {
        hello: 'world!',
      },
    },
  ],
  links: [
    {
      id: '1',
      from: 'A',
      to: 'B',
    },
    {
      id: '2',
      from: 'B',
      to: 'C',
    },
  ],
}

const result: any = matchQuery('{"alias":"n"}->{}<-{"alias":"m"}', new ResolvedGraph(graph), true, true)
console.log(JSON.stringify(result.n, null, 2))
