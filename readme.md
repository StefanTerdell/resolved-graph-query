# Resolved-Graph-Query

> Cypher inspired query language for [Resolved Graph](https://npmjs.org/package/resolved-graph). Currently supports standard and recursive matching. Stay tuned! :)

[![Build](https://img.shields.io/github/workflow/status/stefanterdell/resolved-graph-query/Tests)](https://github.com/StefanTerdell/resolved-graph-query)
[![NPM Version](https://img.shields.io/npm/v/resolved-graph-query.svg)](https://npmjs.org/package/resolved-graph-query)
[![NPM Downloads](https://img.shields.io/npm/dw/resolved-graph-query.svg)](https://npmjs.org/package/resolved-graph-query)

## Query Syntax

Nodes are always written as `{ ... }`, links always as `->`, `<-`, `-{ ... }>` or `<{ ... }-` where `...` is the requirements for that entity. For instance, to find a node with id "A" with a link with id "1" to any given node:

```javascript
{id:"A"}-{id:"1"}>{}
```

Since you may be using Resolved Graph in a way I could not have foreseen, you can chuck any old parameter in there, which will then be included in the deep match on that entity in the graph. However, there are some reserved keywords. These are
`{id, alias, data}` for nodes and `-{id, alias, data, recurse}>` for links.

## Simple Queries

For the moment, Resolved Graph Query only supports match queries. The syntax is not 1:1 with Cypher since Resolved Graph doesnt really care for types or labels, but close enough. For instance, given the graph:

```typescript
import { ResolvedGraph } from 'resolved-graph'

const resolvedGraph = new ResolvedGraph({
  nodes: [
    {
      id: 'A',
    },
    {
      id: 'B',
    },
  ],
  links: [
    {
      id: '1',
      from: 'A',
      to: 'B',
    },
  ],
})
```

You can perform the following query:

```javascript
{id: 'A'}->{alias: 'MyAlias'}
```

Using the matchQuery function:

```typescript
import { matchQuery } from 'resolved-graph-query'
//...
const records = matchQuery("{id: 'A'}->{alias: 'MyAlias'}", resolvedGraph)
```

...and expect the following result:

```typescript
[
  {
    MyAlias: [
      {
        id: 'B',
        to: [
          {
            id: '1',
            from: { id: 'A', to: [], from: [[Circular]] },
            to: [Circular],
          },
        ],
        from: [],
      },
    ],
  },
]
```

Where the contents ofin this case 'MyAlias' will always be an array of either ResolvedLinks or ResolvedNodes!

## Recursive queries

The following query will start at node A and check if it has any link from it to a node with data: { mustHave: "this" }. If it doesn't, it will check if any of the nodes it has links to has a link from them to a node matching the data. If they don't, we will go on from their links and look again, repeating the excercise for a maximum of 100 times or until we find a matching node. Recurse must be a number, but can be as high as you want it to. Careful though: recursive queries can quickly get heavy!

```javascript
{ alias:"myStartNode", id:"A" }-{ recurse: 100 }>{alias:"myTargetNode", data: { mustHave: "this" } }
```