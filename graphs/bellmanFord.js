/*
Single-Source-Shortest-Path Algorithm
Doesn't work with negative weight cycles, thus can be used to detect if there is a negative weight cycle 💡
Unlike Dijkstra' it does work with negative weights


Terminology -
Negative Weight cycles - Cycles with nett edge weight < 0
Relaxation - 
  if weight of edge (u,v) + distance from source to vertex (v) < distance from s to v 
  then distance from s to v = weight of edge(u,v) + distance from source to vertex (v)


Algorithm - 
* for i = 0 to V - 1
  * for each edge
    * relax edge 
    

To detect negative cycle simply perform relaxation once more after running the Algorithm.
If the result changes then there's a negative cycles
*/

const { WeightedGraph } = require('./graph')
const bellmanFord = (graph, source) => {
  const vertices = graph.getVertices()
  const edges = graph.getEdges()
  const distArray = Array.from({ length: vertices.length }, () => Infinity)
  distArray[source] = 0

  for (let i = 0; i < vertices.length - 1; i++) {
    for (const edge of edges) {
      const { source, destination, edgeWeight } = edge
      const newDistance = distArray[source] + edgeWeight
      distArray[destination] = Math.min(distArray[destination], newDistance)
    }
  }

  const newDistArray = [...distArray]
  for (const edge of edges) {
    const { source, destination, edgeWeight } = edge
    const newDistance = newDistArray[source] + edgeWeight
    newDistArray[destination] = Math.min(newDistArray[destination], newDistance)
  }
  const union = [...new Set([...newDistArray, distArray])]

  const hasNegativeCycle = union.length > distArray.length
  console.log({ hasNegativeCycle })
  return distArray
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

console.log(bellmanFord(graph, 0))
