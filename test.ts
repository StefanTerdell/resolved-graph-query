import { Graph, ResolvedGraph } from 'resolved-graph'
import { simpleQuery } from './old/simpleQuery'
import { complexQuery } from './match'
import { log } from './utils/log'
import { getConditions } from './getConditions'

// const graph: Graph = {
//   nodes: [
//     {
//       id: 'A',
//     },
//     {
//       id: 'B',
//     },
//     {
//       id: 'C',
//       data: {
//         hello: 'world!',
//       },
//     },
//   ],
//   links: [
//     {
//       id: '1',
//       from: 'A',
//       to: 'B',
//     },
//     {
//       id: '2',
//       from: 'C',
//       to: 'B',
//     },
//   ],
// }

// const result: any = complexQuery('{"id":"A"}-{"id":"1"}>{"id":"B"}<{"id":"2"}-{"id":"C"}', new ResolvedGraph(graph))
// log('result', result)

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
}

const result: any = complexQuery('{id:"A", alias: "alle"}->{}->{id:"C"}', new ResolvedGraph(graph))
// log('result', result)

//find A
//a.to: links = null,so from link.to, check that for link condition

const a = result[0]

console.log(a.from[0].to) //.from[0].to.from[0].to)

// console.log(Object.is(a.from[0].to.from[0], a.from[0].to.from[1]))

console.log(getConditions('{id:"A", alias: "alle"}->{}->{id:"C"}'))
