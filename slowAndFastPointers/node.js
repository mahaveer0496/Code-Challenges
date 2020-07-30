export default class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
  inspect() {
    let temp = this
    while (temp !== null) {
      console.log(`${temp.value} `)
      temp = temp.next
    }
    console.log()
  }
}
