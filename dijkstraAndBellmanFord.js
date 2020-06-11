class WeightedGraph {
  constructor() {
    this.adjacenyList = {}
  }
  addVertex(vertex) {
    this.adjacenyList[vertex] = []
    return this
  }
  addEdge(source, destination, edgeWeight) {
    this.adjacenyList[source].push({ destination, edgeWeight })
    return this
  }
  getVertices() {
    return Object.keys(this.adjacenyList)
  }
  getNeighbors(vertex) {
    return this.adjacenyList[vertex]
  }
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

// graph
//   .addVertex(0)
//   .addVertex(1)
//   .addVertex(2)
//   .addVertex(3)
//   .addEdge(0, 1, 1)
//   .addEdge(1, 2, 1)
//   .addEdge(3, 0, 1)

// very basic implementation as per algorithm
const dijkstra_basic = (graph, source) => {
  // doesn't work with negative edgeWeight

  const numVertices = graph.getVertices().length
  const sourceNeighbors = graph.getNeighbors(source)
  const weightsRow = Array.from({ length: numVertices }, () => Infinity)
  const selectedVertices = {}

  for (const sourceNeighbor of sourceNeighbors) {
    weightsRow[sourceNeighbor.destination] = sourceNeighbor.edgeWeight
  }

  for (let i = 0; i < numVertices; i++) {
    const { vertex } = getVertexWithMinWeight(
      weightsRow.map((el, i) => (i in selectedVertices ? null : el)),
    )
    if (vertex != -1) {
      const neighbors = graph.getNeighbors(vertex)
      selectedVertices[vertex] = true
      for (const neighbor of neighbors) {
        if (
          weightsRow[vertex] + neighbor.edgeWeight <
          weightsRow[neighbor.destination]
        ) {
          weightsRow[neighbor.destination] =
            weightsRow[vertex] + neighbor.edgeWeight
        }
      }
    }
  }
  return weightsRow.reduce(
    (acc, curr, index) => ({ ...acc, [index]: curr }),
    {},
  )
}
// log(dijkstra_basic(graph, 5))

const bellmanFord = (graph, source) => {}

log(bellmanFord(graph, 1))
function log(args) {
  console.log(JSON.stringify(args, null, 2))
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
  return { weight, vertex }
}
