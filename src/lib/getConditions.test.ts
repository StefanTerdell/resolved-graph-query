import { getConditions } from './getConditions'

describe('When parsing conditions', () => {
  it('should be possible to parse a simple query with node properties', () => {
    const query = "{id:'A'}->{id:'B'}"
    const result = getConditions(query)
    expect(result).toHaveLength(3)
    expect(result).toMatchObject([{ type: 'node', match: { id: 'A' } }, { type: '->' }, { type: 'node', match: { id: 'B' } }])
  })

  it('should be possible to parse a query with link properties', () => {
    const query = '{}-{data: { myProp: true } }>{}'
    const result = getConditions(query)

    expect(result[1].match).toMatchObject({ data: { myProp: true } })
  })

  it('should be possible to parse a query with a recursive link', () => {
    const query = '{}-{recurse: 10}>{}'
    const result = getConditions(query)
    expect(result).toHaveLength(3)
    expect(result[1].recurse).toEqual(10)
  })

  it('should not keep alias and recurse in match object of condition', () => {
    const query = '{id: "1", alias: "nodeA", data: { myProp: true }}-{alias: "link", recurse: 10}>{alias: "nodeB"}'
    const result = getConditions(query)
    expect(result[0]).toHaveProperty('match.id')
    expect(result[0]).toHaveProperty('match.data.myProp')
    result.forEach((r) => expect(r.match).not.toHaveProperty('alias'))
    result.forEach((r) => expect(r).toHaveProperty('alias'))
    expect(result[1].match).not.toHaveProperty('recurse')
    expect(result[1]).toHaveProperty('recurse')
  })
})
