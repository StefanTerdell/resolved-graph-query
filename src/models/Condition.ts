export interface Condition {
  type: 'node' | '<-' | '->'
  match: object
  recurse?: number
  alias: string
}
