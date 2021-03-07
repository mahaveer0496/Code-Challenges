class Q {
  enqueueStack = []
  dequeueStack = []
  enqueue = (x) => {
    this.enqueueStack.push(x)
    return this
  }

  dequeue = () => {
    // transfer all elements to dequeueStack stack
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length)
        this.dequeueStack.push(this.enqueueStack.pop())
    }
    // if dequeueStack still empty means enqueueStack was empty too
    if (this.dequeueStack.length === 0) return null

    return this.dequeueStack.pop()
  }
}

const q = new Q().enqueue(2).enqueue(3).enqueue(4)

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
