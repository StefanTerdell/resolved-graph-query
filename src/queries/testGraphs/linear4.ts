import { ResolvedGraph } from 'resolved-graph'

/**
 * The graph contains 4 nodes with ids "A"-"D". The last node has data: { hello: "world!" }
 * They are linearly connected with 3 links with ids "1"-"3"
 */
export const linear4 = () =>
  new ResolvedGraph({
    nodes: [
      {
        id: 'A',
      },
      {
        id: 'B',
      },
      {
        id: 'C',
      },
      {
        id: 'D',
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
      {
        id: '3',
        from: 'C',
        to: 'D',
      },
    ],
  })
