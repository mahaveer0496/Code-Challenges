/*
Used to find dependency ordering 
if A -> B -> C then in Topological order C must come after B which should come after A

only works with acyclic graphs, cuz in cyclic graph we cant find dependency, thus is final Topological sort doesn't have all vertices then there was a cycle 😏


Terminology - 
inDegree - Number of incident arrows
outDegree - Number of arrows going out 
sourceNode - Node with inDegree = 0
sinkNode - Node with outDegree = 0


Algorithm - (Kahn's Algorithm)
* create a graph if not given 😄
* Create an object with every vertex's inDegree
* Get all source nodes
* For each source node, push it into sorted array
  * Get first source node and Get all neighbors of current source node
  * decrement inDegree of each neighbor
  * push all neighbors with 0 inDegree to sorted array
  * repeat as long as there is a source node


*/

function topological_sort(numberOfVertices, edges) {
  const sortedOrder = []
  const graph = {}
  const inDegrees = {}
  const verticesArray = Array.from({ length: numberOfVertices }, (_, i) => i)

  // Create an object with every vertex's inDegree
  verticesArray.forEach((v) => {
    inDegrees[v] = 0
    graph[v] = []
  })

  edges.forEach(([source, destination]) => {
    graph[source].push(destination)
    inDegrees[destination]++
  })

  const sources = []
  for (const [key, _] of Object.entries(inDegrees)) {
    // Get all source nodes
    if (inDegrees[key] === 0) {
      // For each source node, push it into sorted array
      sources.push(+key)
    }
  }

  while (sources.length) {
    // Get first source node and Get all neighbors of current source node
    const node = sources.shift()
    sortedOrder.push(node)
    const neighbors = graph[node]

    neighbors.forEach((neighbor) => {
      // decrement inDegree of each neighbor
      inDegrees[neighbor]--
      // push all neighbors with 0 inDegree to sorted array
      if (inDegrees[neighbor] === 0) {
        sources.push(neighbor)
      }
    })
  }
  return sortedOrder
}

// console.log(
//   `Topological sort: ${topological_sort(4, [
//     [3, 2],
//     [3, 0],
//     [2, 0],
//     [2, 1],
//   ])}`,
// )

// console.log(
//   `Topological sort: ${topological_sort(5, [
//     [4, 2],
//     [4, 3],
//     [2, 0],
//     [2, 1],
//     [3, 1],
//   ])}`,
// )
// console.log(
//   `Topological sort: ${topological_sort(7, [
//     [6, 4],
//     [6, 2],
//     [5, 3],
//     [5, 4],
//     [3, 0],
//     [3, 1],
//     [3, 2],
//     [4, 1],
//   ])}`,
// )

function print_orders(tasks, prerequisites) {
  const sortedOrder = []
  const allOrders = []
  if (tasks <= 0) {
    return sortedOrder
  }

  // a. Initialize the graph
  const inDegree = Array(tasks).fill(0) // count of incoming edges
  const graph = Array(tasks)
    .fill(0)
    .map(() => Array()) // adjacency list graph

  // b. Build the graph
  prerequisites.forEach((prerequisite) => {
    const parent = prerequisite[0],
      child = prerequisite[1]
    graph[parent].push(child) // put the child into it's parent's list
    inDegree[child]++ // increment child's inDegree
  })

  // c. Find all sources i.e., all vertices with 0 in-degrees
  const sources = []
  for (i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i)
    }
  }

  print_all_topological_sorts(graph, inDegree, sources, sortedOrder, allOrders)
  return allOrders
}

function print_all_topological_sorts(
  graph,
  inDegree,
  sources,
  sortedOrder,
  allOrders,
) {
  const all = []
  for (let i = 0; i < sources.length; i++) {
    const subSortedOrder = []
    const queue = [...sources]
    while (queue.length) {
      const vertex = queue.shift()
      subSortedOrder.push(vertex)
      graph[vertex].forEach((child) => {
        inDegree[child]--
        if (inDegree[child] === 0) {
          queue.push(child)
        }
      })
    }
    all.push(subSortedOrder)
  }

  all
  // for (let i = 0; i < sources.length; i++) {
  //   const vertex = sources[i]
  //   order.push(vertex)
  //   graph[vertex].forEach((child) => {
  //     inDegree[child]--
  //     if (inDegree[child] === 0) {
  //       order.push(child)
  //     }
  //   })

  //   // sortedOrder.splice(sortedOrder.indexOf(vertex), 1)
  //   for (let p = 0; p < graph[vertex].length; p++) {
  //     inDegree[graph[vertex][p]] += 1
  //   }

  // }
}
function print_all_topological_sorts_(
  graph,
  inDegree,
  sources,
  sortedOrder,
  allOrders,
) {
  if (sources.length > 0) {
    for (let i = 0; i < sources.length; i++) {
      const vertex = sources[i]
      sortedOrder.push(vertex)
      const sourcesForNextCall = sources.slice(0) // clone current sources
      // only remove the current source, all other sources should remain in the queue for the next call
      sourcesForNextCall.splice(sourcesForNextCall.indexOf(vertex), 1)
      // get the node's children to decrement their in-degrees
      graph[vertex].forEach((child) => {
        // get the node's children to decrement their in-degrees
        inDegree[child]--
        if (inDegree[child] === 0) {
          sourcesForNextCall.push(child)
        }
      })

      // recursive call to print other orderings from the remaining (and new) sources
      print_all_topological_sorts(
        graph,
        inDegree,
        sourcesForNextCall,
        sortedOrder,
        allOrders,
      )

      // backtrack, remove the vertex from the sorted order and put all of its children back to consider
      // the next source instead of the current vertex
      sortedOrder.splice(sortedOrder.indexOf(vertex), 1)
      for (p = 0; p < graph[vertex].length; p++) {
        inDegree[graph[vertex][p]] += 1
      }
    }
  }

  // if sortedOrder doesn't contain all tasks, either we've a cyclic dependency between tasks, or
  // we have not processed all the tasks in this recursive call
  if (sortedOrder.length === inDegree.length) {
    allOrders.push([...sortedOrder])
  }
}

// console.log(
//   print_orders(3, [
//     [0, 1],
//     [1, 2],
//   ]),
// )

// console.log(
//   print_orders(4, [
//     [3, 2],
//     [3, 0],
//     [2, 0],
//     [2, 1],
//   ]),
// )

console.log(
  print_orders(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ]),
)
