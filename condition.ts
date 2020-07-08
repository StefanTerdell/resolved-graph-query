export interface condition {
  type: 'node' | '<-' | '->'
  data: object
  recurse?: number
  alias?: string
}
