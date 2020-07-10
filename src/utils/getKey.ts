import { Condition } from '../models/Condition'
export const getKey = (condition: Condition) =>
  condition.type === '->' ? { a: 'from', b: 'to' } : condition.type === '<-' ? { a: 'to', b: 'from' } : null
