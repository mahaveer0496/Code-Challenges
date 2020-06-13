/*
  
      1
    / | \
   2--3--4
    \
     6


  BFS
  // 1 
  // 2 3 4
  // 6
  // 1 2 3 4 6

  // 2 1 3 6 4
  
  DFS
  // 1
  // 2 3 4
  // 6

  // 1 2 6 3 4






*/

/* 
{
  1: [],
  2: [],
  3: [],
  4: []
}
*/

/*
    9000
    
    [undefs]
    
    counter = 0
    indexMap = {}

    indexMap[vertex] = counter
    counter++
  
    // counter 5

    indexMap[1] = 0
    indexMap[2] = 1
    indexMap[3] = 2
    indexMap[4] = 3

    sourceVertex, destinationVertex

    const row = this.indexMap[sourceVertex]
    const column = this.indexMap[destinationVertex]

    1, 4 -> 0, 3

    this.adjacenyMatrix[0][3] = 1

      1 2 3 4 
    1
    2
    3
    4
    indexMap 
      {
        vertex: index 
        vertex: nextIndex
      }
    adjacenyMatrix[row][column]

    [
      [0],
      [1],
      [2],
      [3]
    ]
    index++
*/

export default class Graph {
  constructor(isDirected = false, numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    this.adjacenyList = {}
    this.indexMap = {}
    this.counter = 0
    this.transpose = {}
    // this.adjacenyMatrix = Array.from({ length: numberOfVertices }, () =>
    //   Array.from({ length: numberOfVertices }, () => 0),
    // );

    // console.log(this.adjacenyMatrix)
    this.isDirected = isDirected
  }

  addVertex(vertex) {
    this.adjacenyList[vertex] = []
    // this.indexMap[vertex] = this.counter;
    // this.counter++;
    return this
  }

  addEdge(source, destination) {
    this.adjacenyList[source].push(destination)
    if (!this.isDirected) {
      this.adjacenyList[destination].push(source)
    }
    // const column = this.indexMap[source];
    // const row = this.indexMap[destination];
    // console.log(source, column);
    // this.adjacenyMatrix[row][column] = 1;

    // if (!this.isDirected) {
    //   this.adjacenyMatrix[column][row] = 1;
    // }

    return this
  }

  getVertices() {
    return Object.keys(this.adjacenyList)
  }
  getEdges() {
    return Object.values(this.adjacenyList)
  }
  getNeighbors(vertex) {
    // const column = this.indexMap(vertex);
    // return this.adjacenyMatrix[column];
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
}

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
    const neighbors = graph.getNeighbors(queue.shift()) //
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

const bfs2 = (graph, s) => {
  const vertices = graph
    .getVertices()
    .map((v) => ({
      value: v,
      color: v == s ? 'gray' : 'white',
      distance: v == s ? 0 : Infinity,
      parent: null,
    }))
    .reduce((acc, curr) => ({ ...acc, [curr.value]: curr }), {})

  const queue = [vertices[s]]
  while (queue.length) {
    const u = queue.shift()

    const neighbors = graph.getNeighbors(u.value)
    for (const n of neighbors) {
      const v = vertices[n]

      if (v.color === 'white') {
        v.color = 'gray'
        v.distance = u.distance + 1
        v.parent = u
        queue.push(v)
      }
    }
    u.color = 'black'
  }

  return vertices
}

const detectCycle = (graph) => {
  let hasCycle = false
  for (const vertex of graph.getVertices()) {
    const output = bfs2(graph, vertex)

    for (const i in output) {
      const containsSource = (obj, i) => {
        if (obj) {
          if (obj.value == i) {
            return true
          } else {
            return containsSource(obj.parent, i)
          }
        }
      }
      if (containsSource(output[i], i)) {
        hasCycle = true
      }
    }
  }
  hasCycle
  return hasCycle
}
const printPath = (g, source, destination) => {
  const bfsOutput = bfs2(g, source)
  const pathObject = bfsOutput[destination]
  const path = []
  if (source == destination) {
    return source
  }
  if (!pathObject) {
    return `No node for ${destination}`
  }
  if (!pathObject.parent) {
    return `No Path between ${source} and ${destination}`
  }
  if (pathObject.parent) {
    const helper = (obj) => {
      if (obj) {
        path.push(obj.value)
        helper(obj.parent)
      }
    }
    helper(pathObject)
  }
  return path.reverse().join('->')
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

/*

{ 
  1: [ 2, 3, 4 ], 
  2: [ 3, 6, 4 ], 
  3: [ 4 ], 
  4: [], 
  6: [] 
}
*/
/*
  adjencyList = {
    1: [2,3,4],
    2: [],
    3: [4],
    4: [],
    6: []
  }
*/
/*

  
      1
    / | \
   2--3--4
    \
     6

  vertex = 1. 
  visited = {1: true };
  neighbors = [2,3,4]

  const helper = (vertex, visited) => {
    visited.set(vertex, true);
    const neighbors = graph.getNeighbors(vertex);
    for (const neighbor of neighbors) { 
      if (!visited.get(neighbor)) { // visited[2]
        helper(neighbor, visited); // helper(2, {1: true })
      }
    }
  }
    

      vertex = 2. 
      visited = {1: true, 2: true };
      neighbors = [1,6, 3]

      const helper = (vertex, visited) => {
        visited.set(vertex, true);
        const neighbors = graph.getNeighbors(vertex);
        for (const neighbor of neighbors) { 
          if (!visited.get(neighbor)) { // visited[3], 
            helper(neighbor, visited); // 3, {1: true, 2: true }
          }
        }
      }

            vertex = 3. 
            visited = {1: true, 2: true, 3: true };
            neighbors = [2,1,4]

            const helper = (vertex, visited) => {
              visited.set(vertex, true);
              const neighbors = graph.getNeighbors(vertex);
              for (const neighbor of neighbors) { 
                if (!visited.get(neighbor)) { // visited[4], 
                  helper(neighbor, visited); //  helper(4, {1: true, 2: true, 3: true })
                }
              }
            }

                  vertex = 4. 
                  visited = {1: true, 2: true, 3: true, 4 true };
                  neighbors = [1,3]

                  const helper = (vertex, visited) => {
                    visited.set(vertex, true);
                    const neighbors = graph.getNeighbors(vertex);
                    for (const neighbor of neighbors) { 
                      if (!visited.get(neighbor)) {
                        helper(neighbor, visited); 
                      }
                    }
                  }

              vertex = 6. 
              visited = {1: true, 2: true, 3: true, 4 true, 6: true };
              neighbors = [6]

              const helper = (vertex, visited) => {
                visited.set(vertex, true);
                const neighbors = graph.getNeighbors(vertex);
                for (const neighbor of neighbors) { 
                  if (!visited.get(neighbor)) { // visited[2], 
                    helper(neighbor, visited); // 3, {1: true, 2: true }
                  }
                }
              }

                visited = {1: true, 2: true, 3: true, 4 true, 6: true };
*/
// console.log(graph.adjacenyList)
// console.log(dfs(graph, 1))
// console.log(detectCycle(graph));

/*
adjacenyList = 
{
  vertext[key] : [n1, n2, n3]
}

{
  1: [
      [2,6], 3, 4
    ]
  2: [1, 3, 6],
  3: [1, 2, 6, 4],
  4: [1, 3],
  6: [2, 3],
}

O(1)
adjacenyMatrix 
       1 3 4
       0 1 2
 
1 0    1 0 0  
3 1    1 0 1
4 2    1 0 0

1 => 3

col = 0 
row = 1

1. [1][0] = 1


max number of edge 
O(v(v-1)/2)
edge list 
[
  [1, 2], [1,3], [1,4],
  [2, 1], [2, 3]
]



*/

// let matrix = Array.from({length: 3})(3).fill(Array(3).fill(0));
const matrix = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => 0),
)
// console.log(matrix);
/*
[ 
  [ 0, 0, 0 ], 
  [ 1, 0, 0 ], 
  [ 0, 0, 0 ] 
]
*/
// matrix[0][1] = 1;
// console.log(matrix);
// console.log(matrix[0][0])
