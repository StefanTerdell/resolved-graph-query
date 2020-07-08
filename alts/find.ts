import { condition } from '../condition'
import { equalsRight } from '../equalsRight'
import { ResolvedNode } from 'resolved-graph'

export const traverse = (conditions: condition[], nodes) => {
  const getLink = (link, lastNode, index) => {
    if (!equalsRight(conditions[index], link)) {
      return null
    }
    const { a, b } = getAB(conditions[index])
    const newLink = { ...link, [a]: lastNode, [b]: getNode(link.to, link, index + 1) }
    return newLink[b] ? newLink : null
  }

  const getNode = (node, lastLink, index) => {
    if (!equalsRight(conditions[index], node)) {
      return null
    }
    const newNode = { ...node, from: [], to: [] }
    if (lastLink) {
      const { b } = getAB(conditions[index - 1])
      newNode[b].push(lastLink)
    }
    if (index < conditions.length - 1) {
      const { a, b } = getAB(conditions[index + 1])
      newNode[a].push(...node[a].map((l) => getLink(l, node, index + 1)).filter((l) => l))
      return newNode[b].length ? newNode : null
    } else {
      return newNode
    }
  }

  return nodes.map((n) => getNode(n, null, 0)).filter((n) => n)
}

const getAB = (link: condition): { a: string; b: string } => {
  switch (link.type) {
    case '->':
      return { a: 'from', b: 'to' }
    case '<-':
      return { a: 'to', b: 'from' }
  }
  throw link
}
