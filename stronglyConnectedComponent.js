/*
  Sub Graphs in which each vertex can be visited from any other vertex in that sub graph
  Kosaraju's Algorithm -
  * Initialise Visited Set and a Stack 
  * For each vertex
    * if visited -> do nothing  
    * else Start DFS with that vertex
      * When entering a vertex put it into Visited 
    * Once a vertex's DFS is done, put it into Stack
  * Generate Graph's Transpose (GT) (Reverse all edges)
  * Initialise SCC = []
  * For each Item in stack
    * Pop Stack's item
      * if item in visited -> do nothing
      * else Do DFS for that vertex 
        * When entering a vertex put it into Visited and SCC array       
    
*/

const { default: Graph } = require('./basicGraph')
const graph = new Graph(true)

const dfsUtil1 = (graph, vertex, visited, stack) => {
  visited.add(vertex)
  const neighbors = graph.getNeighbors(vertex)
  for (const neighbor of neighbors) {
    if (!visited.has(+neighbor)) {
      dfsUtil1(graph, +neighbor, visited, stack)
    }
  }
  stack.push(vertex)
}

const dfsUtil2 = (graph, vertex, visited, subSCC) => {
  visited.add(vertex)
  subSCC.push(vertex)
  const neighbors = graph.getNeighbors(vertex)
  for (const neighbor of neighbors) {
    if (!visited.has(+neighbor)) {
      dfsUtil1(graph, +neighbor, visited, subSCC)
    }
  }
}

const getSCC = (graph) => {
  const sccs = []
  let visited = new Set()
  const stack = []
  const vertices = graph.getVertices()
  for (const vertex of vertices) {
    if (!visited.has(+vertex)) {
      dfsUtil1(graph, +vertex, visited, stack)
    }
  }

  visited = new Set()
  const graphTranspose = graph.getTranspose()
  while (stack.length) {
    const vertex = stack.pop()
    const subSCC = []
    if (!visited.has(vertex)) {
      dfsUtil2(graphTranspose, vertex, visited, subSCC)
    }
    if (subSCC.length) {
      sccs.push(subSCC)
    }
  }

  return sccs
}
graph
  .addVertex(0)
  .addVertex(1)
  .addVertex(2)
  .addVertex(3)
  .addVertex(4)
  .addVertex(5)
  .addVertex(6)
  .addEdge(0, 1)
  .addEdge(1, 2)
  .addEdge(2, 0)
  .addEdge(1, 3)
  .addEdge(3, 4)
  .addEdge(4, 5)
  .addEdge(5, 3)
  .addEdge(5, 6)

console.log(getSCC(graph))
