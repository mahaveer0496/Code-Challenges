/*
Single-Source-Shortest-Path Algorithm


Terminology -
Relaxation - 
  if weight of edge (u,v) + distance from source to vertex (v) < distance from s to v 
  then distance from s to v = weight of edge(u,v) + distance from source to vertex (v)


Algorithm - 

*/

const { WeightedGraph } = require('./graph')
const bellmanFord = (graph, source) => {}

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
