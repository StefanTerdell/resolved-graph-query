import { matchQuery } from './match'
import { linear4 } from './testGraphs/linear4'
import { circular3 } from './testGraphs/circular3'
import { movies } from './testGraphs/movies'

describe('When traversing a linear graph', () => {
  it('should be possible to do a simple match query', () => {
    const records = matchQuery('{alias: "A", id:"A"}->{id:"B"}', linear4())
    expect(records).toMatchObject([
      {
        A: [
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
        ],
      },
    ])

    expect(records[0]['A'][0].from[0].from).toBe(records[0]['A'][0])
  })

  it('circular relationships should be respected', () => {
    const records = matchQuery('{alias: "A", id:"A"}->{id:"B"}', linear4())

    const A = records[0]['A']?.[0]
    const R = records[0]['A']?.[0]?.from[0]
    const B = records[0]['A']?.[0]?.from[0]?.to

    expect(R.from).toBe(A)
    expect(R.to).toBe(B)
    expect(A.from).toHaveLength(1)
    expect(A.to).toHaveLength(0)
    expect(B.to).toHaveLength(1)
    expect(B.from).toHaveLength(0)
    expect(A.from).toMatchObject(B.to)
    expect(B.from).toMatchObject(A.to)
  })

  it('should be possible to perform a recursive query', () => {
    const records = matchQuery('{alias: "A", id:"A"}-{recurse:3}>{data:{hello: "world!"}}', linear4())

    expect(records[0]['A'][0].from[0].to.from[0].to.from[0].to).toMatchObject({
      data: { hello: 'world!' },
    })
  })
})

describe('When traversing a circular graph', () => {
  it('should recursively find its way trough a circular monodirectional graph', () => {
    const records = matchQuery('{alias: "A", id: "A"}-{recurse:2, data: {type: "clockwise"}}>{id: "A"}', circular3())
    expect(records[0]['A'][0]).toBe(records[0]['A'][0].from[0].to.from[0].to.from[0].to)
  })

  it('should find both ways around a bidirectional circular graph', () => {
    const records = matchQuery('{alias: "A", id: "A"}-{recurse:2}>{id: "A"}', circular3())
    expect(records[0]['A'][0].from).toHaveLength(2)
    expect(records[0]['A'][0].to).toHaveLength(2)
  })
})

describe('When traversing the movies graph', () => {
  test('The theory of "six degrees of kevin bacon"', () => {
    const records = matchQuery(
      '{data:{type:"Person"}}-{alias: "degree", recurse: 100}>{}<{alias: "degree"}-{data: { type: "Person", name: "Kevin Bacon"}}',
      movies(),
    )

    for (const record of records) {
      expect(record['degree'].length).toBeLessThan(6)
    }
  })
})
