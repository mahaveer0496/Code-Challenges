/*
All-Source-Shortest-Path Algorithm
Used to find shortest path sum between each node of a graph
Works on AdjacenyMatrx, thus is more useful for Dense graphs
Can be used for both weighted/unweighted and directed/undirected graphs
The diagonals of Adjaceny Matrix are assigned to `0` to show no edge from the node to itself
When there is no edge that cell is assigned to Infinity

For each source,destination pairs `(u,v)`, we compare the path sum from `u->v` or `u->k->v`, `k` being an intermediate vertex. And update the path sum in the matrix using the formula
* matrix[u][v] = Math.min(matrix[u][v], matrix[u][k]+matrix[k][v]) 💡
Which means the path sum from `u->v` is minimum of either `u->v` or from `u->k + k->v`


Algorithm - 
* intialise distMatrix of VxV with elements = Infinity
  for each edge distMatix[edge.source][edge.destination] = 
  * if diagonal then 0 
  * else edgeWeight
* for 0 to V.length
  * relax each element of Matrix

*/

const { WeightedGraph, default: Graph } = require('./graph')
const floydWarshall = (graph) => {
  const vertices = graph.getVertices()
  const edges = graph.getEdges()
  const distMatrix = Array.from({ length: vertices.length }, () =>
    Array.from({ length: vertices.length }, () => Infinity),
  )
  for (const i in distMatrix) {
    distMatrix[i][i] = 0
  }
  for (const edge of edges) {
    const { source, destination, edgeWeight } = edge
    distMatrix[source][destination] = edgeWeight
  }

  for (let k = 0; k < vertices.length; k++) {
    for (let i = 0; i < vertices.length; i++) {
      for (let j = 0; j < vertices.length; j++) {
        distMatrix[i][j] = Math.min(
          distMatrix[i][j],
          distMatrix[i][k] + distMatrix[k][j],
        )
      }
    }
  }

  return distMatrix
}

const graph = new WeightedGraph()
graph
  .addVertex(0)
  .addVertex(1)
  .addVertex(2)
  .addVertex(3)
  .addVertex(4)
  .addVertex(5)
  .addEdge(0, 1, 50)
  .addEdge(0, 2, 45)
  .addEdge(0, 3, 10)
  .addEdge(1, 2, 10)
  .addEdge(1, 3, 15)
  .addEdge(3, 0, 10)
  .addEdge(3, 4, 15)
  .addEdge(4, 1, 20)
  .addEdge(4, 2, 35)
  .addEdge(5, 4, 3)

console.log(floydWarshall(graph))
