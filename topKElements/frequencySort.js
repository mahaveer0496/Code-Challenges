/* 
Given a string, sort it based on the decreasing frequency of its characters.
*/

const Heap = require('collections/heap')
const { default: getFMap } = require('../utils/getFMap')

const fSort = (S) => {
  const fMap = getFMap(S)
  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0])

  Object.keys(fMap).forEach((x) => {
    maxHeap.push([fMap[x], x])
  })

  const result = []

  while (maxHeap.length) {
    const [frequency, element] = maxHeap.pop()
    for (let i = 0; i < frequency; i++) {
      result.push(element)
    }
  }

  return result.join('')
}

console.log(fSort('Programming'))
