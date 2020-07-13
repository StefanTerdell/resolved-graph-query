import { ResolvedGraph } from 'resolved-graph'

/**
 * This graph contains three nodes (A, B, C) six links (1-6)
 * The nodes are first linked A to B, B to C and C back to A, creating a circular structure. These links have data: { type: "clockwise"}
 * THe nodes are then linked A to C, C to B and B back to A. These links have data: { type: "counter-clockwise" }
 */
export const circular3 = () =>
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
    ],
    links: [
      {
        id: '1',
        from: 'A',
        to: 'B',
        data: {
          type: 'clockwise',
        },
      },
      {
        id: '2',
        from: 'B',
        to: 'C',
        data: {
          type: 'clockwise',
        },
      },
      {
        id: '3',
        from: 'C',
        to: 'A',
        data: {
          type: 'clockwise',
        },
      },
      {
        id: '4',
        from: 'A',
        to: 'C',
        data: {
          type: 'counter-clockwise',
        },
      },
      {
        id: '5',
        from: 'C',
        to: 'B',
        data: {
          type: 'counter-clockwise',
        },
      },
      {
        id: '6',
        from: 'B',
        to: 'A',
        data: {
          type: 'counter-clockwise',
        },
      },
    ],
  })
