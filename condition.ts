export interface condition {
  type: 'node' | '<-' | '->'
  match: object
  recurse?: number
  alias: string
}
