/*
Used to find dependency ordering 
if A -> B -> C then in Topological order C must come after B which should come after A

only works with acyclic graphs, cuz in cyclic graph we cant find dependency, thus is final Topological sort doesn't have all vertices then there was a cycle 😏


Terminology - 
inDegree - Number of incident arrows
outDegree - Number of arrows going out 
sourceNode - Node with inDegree = 0
sinkNode - Node with outDegree = 0


Algorithm - 
* create a graph if not given 😄
* Create an object with every vertex's inDegree
* Get all source nodes
* For each source node, push it into sorted array
  * Get all neighbors of current source node
  * decrement inDegree of each neighbor
  * push all neighbors with 0 inDegree to sorted array
  * repeat as long as there is a source node


*/
function topological_sort(vertices, edges) {
  const sortedOrder = []
  const graph = {}
  const inDegrees = {}
  const vs = [...new Set(edges.flat())]

  vs.forEach((v) => {
    inDegrees[v] = 0
    graph[v] = []
  })

  edges.forEach(([s, d]) => {
    graph[s].push(d)
    inDegrees[d]++
  })

  const sources = []
  for (const [key, values] of Object.entries(inDegrees)) {
    if (inDegrees[key] === 0) {
      sources.push(+key)
    }
  }

  while (sources.length) {
    const node = sources.shift()
    sortedOrder.push(node)
    const neighbors = graph[node]

    neighbors.forEach((n) => {
      inDegrees[n]--
      if (inDegrees[n] === 0) {
        sources.push(n)
      }
    })
  }
  return sortedOrder
}

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`,
)

console.log(
  `Topological sort: ${topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ])}`,
)
console.log(
  `Topological sort: ${topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ])}`,
)
