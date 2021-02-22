/* 
You are given a list of tasks that need to be run, in any order, on a server. Each task will take one CPU interval to execute but once a task has finished, it has a cooling period during which it can’t be run again. If the cooling period for all tasks is ‘K’ intervals, find the minimum number of CPU intervals that the server needs to finish all tasks.

If at any time the server can’t execute any task then it must stay idle.
*/

const Heap = require('collections/heap')
const { clear } = require('console')
const { default: getFMap } = require('../utils/getFMap')

clear()
const sched = (A, k) => {
  const frequencyMap = getFMap(A)
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])
  for (const [char, frequency] of Object.entries(frequencyMap)) {
    maxHeap.push([char, +frequency])
  }

  let count = 0
  const queue = []
  const result = []
  while (maxHeap.length) {
    const [task, frequency] = maxHeap.pop()
    count++
    result.push(task)
    queue.push([task, frequency - 1])
    // console.log(result)

    if (queue.length > k) {
      console.log(queue)
      const [task, frequency] = queue.shift()
      if (frequency > 0) {
        maxHeap.push([task, frequency])
      }
    }
  }

  return count
}

console.log(sched(['a', 'a', 'a', 'b', 'c', 'c'], 2))
