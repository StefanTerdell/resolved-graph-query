import { linear4 } from './testGraphs/linear4'
import { matchQuery } from '..'
import { circular3 } from './testGraphs/circular3'

describe('When traversing a linear graph', () => {
  it('should be possible to do a simple match query', () => {
    const result = matchQuery('{id:"A"}->{id:"B"}', linear4)
    expect(result).toMatchObject([
      {
        id: 'A',
        from: [
          {
            id: '1',
            to: {
              id: 'B',
            },
          },
        ],
      },
    ])
  })

  it('should be possible to perform a recursive query', () => {
    const result = matchQuery('{id:"A"}-{recurse:3}>{data:{hello: "world!"}}', linear4)
    expect(result[0].from[0].to.from[0].to.from[0].to).toMatchObject({
      data: { hello: 'world!' },
    })
  })
})

describe('When traversing a circular graph', () => {
  it('should recursively find its way trough a circular monodirectional graph', () => {
    const result = matchQuery('{id: "A"}-{recurse:2, data: {type: "clockwise"}}>{id: "A"}', circular3)
    expect(result[0]).toBe(result[0].from[0].to.from[0].to.from[0].to)
  })
})
