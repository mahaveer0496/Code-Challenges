const { default: Graph } = require('./graph')

const bfs = (graph, source) => {
  /*
      1
    / | \
   2--3--4
    \
     6
  */
  const visited = new Map() //[1, 2, 3, 4, 6]
  visited.set(source, true)
  const queue = [source] //
  while (queue.length) {
    const neighbors = graph.getNeighbors(queue.shift()) // {value, left: {value, value, right}, right}
    for (const neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        visited.set(neighbor, true)
        queue.push(neighbor)
      }
    }
  }
  return [...visited.keys()]
}

const dfs = (graph, source) => {
  /*
      1
    / | \
   2--3--4
    \
     6

  */
  const visited = new Map()

  const helper = (vertex, visited) => {
    visited.set(vertex, true)
    const neighbors = graph.getNeighbors(vertex)
    for (const neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        helper(neighbor, visited)
      }
    }
  }

  helper(source, visited)
  return [...visited.keys()]
}

const graph = new Graph(false, 3)

graph
  .addVertex(1)
  .addVertex(2)
  .addVertex(3)
  .addVertex(4)
  .addVertex(6)
  .addEdge(1, 2)
  .addEdge(1, 3)
  .addEdge(1, 4)
  .addEdge(2, 6)
  .addEdge(2, 3)
  .addEdge(3, 4)

console.log(dfs(graph, 1))
console.log(bfs(graph, 1))
