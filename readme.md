# Resolved-Graph-Query

_Cypher inspired query language for [Resolved Graph](https://github.com/StefanTerdell/resolved-graph). Currently supports standard and recursive matching. Stay tuned! :)_

![Node.js CI](https://github.com/StefanTerdell/resolved-graph-query/workflows/Node.js%20CI/badge.svg?branch=master)

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

```javascript
{ alias:"myStartNode", id:"A" }-{ recurse: 100 }>{alias:"myTargetNode", data: { mustHave: "this" } }
```