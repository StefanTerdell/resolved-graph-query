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
    const query = '{}-10{}>{}'
    const result = getConditions(query)
    expect(result).toHaveLength(3)
    expect(result[1].recurse).toEqual(10)
  })
})
