/* 
Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.
*/

const Heap = require('collections/heap')
const { clear } = require('console')
const { default: getFMap } = require('../utils/getFMap')

clear()
/**
 * create a max heap using frequency map
 * using greedy approach, pop that top
 * now we dont immediately push it back to heap cuz if we do that then it may come back to the top
 * e.g for aappp, after popping `p` for the first time, if immediately put back in heap then we end up to p = 2 and a = 2 and no guarantee which character will become the top element of heap.
 * thus current element is pushed after 1 iteration
 */
// TODO: write a function to get "all" possible arrangements
// eg : "Programming" -> ["rgmrgmPiano", "gmringmrPoa", "gmrPagimnor"]
const rearrange = (S) => {
  const frequencyMap = getFMap(S)
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])

  for (const [char, frequency] of Object.entries(frequencyMap)) {
    maxHeap.push([char, +frequency])
  }

  const result = []
  let prevChar = null

  while (maxHeap.length) {
    const [char] = maxHeap.pop()
    result.push(char)
    frequencyMap[char]--

    if (prevChar && frequencyMap[prevChar] > 0) {
      maxHeap.push([prevChar, frequencyMap[prevChar]])
    }

    prevChar = char
  }

  if (result.length === S.length) {
    return result.join('')
  }
  return "can't do it bro"
}

/* 
Just like above but distance apart is not always 1
*/
const rearrangeKDistanceApart = (S, k) => {
  const frequencyMap = getFMap(S)
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1])

  for (const [char, frequency] of Object.entries(frequencyMap)) {
    maxHeap.push([char, +frequency])
  }

  const queue = []
  const result = []

  while (maxHeap.length) {
    const [char, frequency] = maxHeap.pop()
    result.push(char)

    queue.push([char, frequency - 1])
    if (queue.length === k) {
      const [char, frequency] = queue.shift()
      if (frequency > 0) {
        maxHeap.push([char, frequency])
      }
    }
    // TODO: whats the problem here?
    // if (queue.length < k - 1) {
    // queue.push([char, frequency - 1])
    // } else {
    //   maxHeap.push(queue.shift())
    // }
  }

  if (result.length === S.length) {
    return result.join('')
  }
  return "can't do it bro"
}

// console.log(rearrange('aaappp'))
// console.log(rearrange('Programming'))
console.log(rearrangeKDistanceApart('mmpp', 2))
console.log(rearrangeKDistanceApart('Programming', 3))
