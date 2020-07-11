import { ResolvedNode, ResolvedLink } from 'resolved-graph'
export class CloneGraph {
  nodes: { [id: string]: ResolvedNode }
  links: { [id: string]: ResolvedLink }
  constructor() {
    this.nodes = {}
    this.links = {}
  }
  getNode(node: ResolvedNode, spread = {}) {
    if (this.nodes[node.id]) return this.nodes[node.id]
    const clone = { ...node, ...spread }
    this.nodes[node.id] = clone
    return clone
  }
  getLink(link: ResolvedLink, spread = {}) {
    if (this.nodes[link.id]) return this.nodes[link.id]
    const clone = { ...link, ...spread }
    this.links[link.id] = clone
    return clone
  }
}
