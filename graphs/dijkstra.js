/*
Single-Source-Shortest-Path Algorithm
Used to find shortest path sums from Source vertex to all other vertices of a graph.
Is a greedy algorithm
Works for both directed and undirected graphs, but not with negative edge weights


Terminology -
Relaxation - 
  if weight of edge (u,v) + distance from source to vertex (v) < distance from s to v 
  then distance from s to v = weight of edge(u,v) + distance from source to vertex (v)


Algorithm - 
* initialise a distArray of length = number of vertices, with all entries to be Infinity
  * make distArray[source] = 0

* for i = 0 to number of vertices
  * getVertexWithMinWeight from distArray and mark it as selected
  * for each neightbor of current vertex
    * perform relaxation
*/

const { WeightedGraph } = require('./graph')

const dijkstra_basic = (graph, source) => {
  const numVertices = graph.getVertices().length

  const selectedVertices = {}
  const distArray = Array.from({ length: numVertices }, () => Infinity)
  distArray[source] = 0

  for (let i = 0; i < numVertices; i++) {
    const { vertex } = getVertexWithMinWeight(
      distArray.map((el, i) => (i in selectedVertices ? null : el)),
    )
    if (vertex != -1) {
      const neighbors = graph.getNeighbors(vertex)
      selectedVertices[vertex] = true
      for (const neighbor of neighbors) {
        // for each neighbor perform relaxation
        const newDistance = distArray[vertex] + neighbor.edgeWeight
        distArray[neighbor.destination] = Math.min(
          newDistance,
          distArray[neighbor.destination],
        )
      }
    }
  }

  return distArray
}

function getVertexWithMinWeight(array) {
  let weight = Infinity
  let vertex = -1
  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (element != null) {
      if (element < weight) {
        weight = element
        vertex = i
      }
    }
  }
  return { vertex }
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

console.log(dijkstra_basic(graph, 0))
