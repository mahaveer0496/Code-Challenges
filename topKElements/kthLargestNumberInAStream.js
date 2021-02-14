const Heap = require('collections/heap')

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([], null, (a, b) => b - a)
    this.k = k

    nums.forEach((num) => {
      this.add(num)
    })
  }

  add(num) {
    // add the new number in the min heap
    this.minHeap.push(num)

    // if heap has more than 'k' numbers, remove one number
    if (this.minHeap.length > this.k) {
      this.minHeap.pop()
    }

    // return the 'Kth largest number
    return this.minHeap.peek()
  }
}

const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4)

console.log(kthLargestNumber.add(6))
console.log(kthLargestNumber.add(13))
console.log(kthLargestNumber.add(4))
