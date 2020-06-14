class Graph {
  constructor(isDirected = false) {
    this.adjacenyList = {}
    this.indexMap = {}
    this.counter = 0
    this.transpose = {}
    this.isDirected = isDirected
  }

  addVertex(vertex) {
    this.adjacenyList[vertex] = []
    return this
  }

  addEdge(source, destination) {
    this.adjacenyList[source].push(destination)
    if (!this.isDirected) {
      this.adjacenyList[destination].push(source)
    }
    return this
  }

  getVertices() {
    return Object.keys(this.adjacenyList)
  }
  getEdges() {
    const edges = []
    for (const [source, neighbors] of Object.entries(this.adjacenyList)) {
      for (const neighbor of neighbors) {
        edges.push({ source, destination: neighbor })
      }
    }
    return edges
  }
  getNeighbors(vertex) {
    return this.adjacenyList[vertex]
  }
  getTranspose() {
    let allEdges = []
    for (const [vertex, neighbors] of Object.entries(this.adjacenyList)) {
      for (const neighbor of neighbors) {
        allEdges.push([+vertex, +neighbor])
      }
    }
    allEdges = allEdges.map(([source, destination]) => [destination, source])
    allEdges.forEach(([source, destination]) => {
      if (this.transpose[source]) {
        this.transpose[source].push(destination)
      } else {
        this.transpose[source] = [destination]
      }
    })

    this.adjacenyList = this.transpose
    return this
  }
  inspect() {
    return JSON.stringify(this, null, 2)
  }
}

export class WeightedGraph extends Graph {
  constructor() {
    super()
    this.adjacenyList = {}
  }
  addEdge(source, destination, edgeWeight) {
    this.adjacenyList[source].push({ destination, edgeWeight })
    return this
  }
  getEdges() {
    const edges = []
    for (const [source, neighbors] of Object.entries(this.adjacenyList)) {
      for (const neighbor of neighbors) {
        edges.push({ source, ...neighbor })
      }
    }
    return edges
  }
}

// const graph = new WeightedGraph()

// graph
//   .addVertex(0)
//   .addVertex(1)
//   .addVertex(2)
//   .addVertex(3)
//   .addVertex(4)
//   .addVertex(5)
//   .addEdge(0, 1, 50)
//   .addEdge(0, 2, 45)
//   .addEdge(0, 3, 10)
//   .addEdge(1, 2, 10)
//   .addEdge(1, 3, 15)
//   .addEdge(3, 0, 10)
//   .addEdge(3, 4, 15)
//   .addEdge(4, 1, 20)
//   .addEdge(4, 2, 35)
//   .addEdge(5, 4, 3)

export default Graph
