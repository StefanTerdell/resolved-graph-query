import { condition } from './condition'
export const getKey = (condition: condition) => (condition.type === '->' ? { a: 'from', b: 'to' } : condition.type === '<-' ? { a: 'to', b: 'from' } : null)
