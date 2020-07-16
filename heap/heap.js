/* 
The __percolateUp() function is meant to restore the heap property going up from a node to the root.

The __maxHeapify() function restores the heap property starting from a given node down to the leaves.

*/
const swap = (A, i, j) => {
  ;[A[i], A[j]] = [A[j], A[i]]
}
class MaxHeap {
  constructor() {
    this.heap = []
    this.length = 0
  }

  insert(val) {
    if (this.length >= this.heap.length) {
      this.length += 1
      this.heap.push(val)
      this.percolateUp(this.heap.length - 1)
    }
  }

  getMax() {
    if (this.length != 0) {
      return this.heap[0]
    }
    return null
  }

  removeMax() {
    if (this.length > 1) {
      const max = this.heap[0]
      this.heap[0] = this.heap[this.length - 1]
      this.length -= 1
      this.maxHeapify(0)
      return max
    } else if (this.length == 1) {
      const max = this.heap[0]
      this.length -= 1
      return max
    } else {
      return null
    }
  }

  percolateUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (index <= 0) {
      return
    } else if (this.heap[parentIndex] < this.heap[index]) {
      swap(this.heap, parentIndex, index)
      this.percolateUp(parentIndex)
    }
  }

  maxHeapify(index) {
    const lIndex = index * 2 + 1
    const rIndex = index * 2 + 2
    let largest = index
    if (this.length > lIndex && this.heap[largest] < this.heap[lIndex]) {
      largest = lIndex
    }
    if (this.length > rIndex && this.heap[largest] < this.heap[rIndex])
      largest = rIndex
    if (largest != index) {
      swap(this.heap, largest, index)
      this.maxHeapify(largest)
    }
  }
  buildHeap(arr) {
    this.heap = arr
    this.length = this.heap.length
    for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
      this.maxHeapify(i)
    }
  }
}

class MinHeap {
  constructor() {
    this.heap = []
    this.length = 0
  }

  insert(val) {
    if (this.length >= this.heap.length) {
      this.length += 1
      this.heap.push(val)
      this.percolateUp(this.heap.length - 1)
    }
  }

  getMin() {
    if (this.length != 0) {
      return this.heap[0]
    }
    return null
  }

  removeMax() {
    if (this.length > 1) {
      const min = this.heap[0]
      this.heap[0] = this.heap[this.length - 1]
      this.length -= 1
      this.minHeapify(0)
      return min
    } else if (this.length == 1) {
      const min = this.heap[0]
      this.length -= 1
      return min
    } else {
      return null
    }
  }

  percolateUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (index <= 0) {
      return
    } else if (this.heap[parentIndex] > this.heap[index]) {
      swap(this.heap, parentIndex, index)
      this.percolateUp(parentIndex)
    }
  }

  minHeapify(index) {
    const lIndex = index * 2 + 1
    const rIndex = index * 2 + 2
    let smallest = index
    if (this.length > lIndex && this.heap[smallest] > this.heap[lIndex]) {
      smallest = lIndex
    }
    if (this.length > rIndex && this.heap[smallest] > this.heap[rIndex])
      smallest = rIndex
    if (smallest != index) {
      swap(this.heap, smallest, index)
      this.minHeapify(smallest)
    }
  }
  buildHeap(arr) {
    this.heap = arr
    this.length = this.heap.length
    for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
      this.minHeapify(i)
    }
  }
}
const maxHeap = new MaxHeap()
const minHeap = new MinHeap()

const arr = [6, 9, 3, 4, 13, 22, 1, 30, 17]
maxHeap.buildHeap([...arr])
minHeap.buildHeap([...arr])

console.log(minHeap.getMin())
console.log(maxHeap.getMax())
