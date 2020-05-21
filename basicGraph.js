class LLNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = new LLNode("head");
    this.tail = new LLNode("tail");
    this.head.next = this.tail;
    this.length = 0;
  }
  prepend(value) {
    const newNode = new LLNode(value);
    newNode.next = this.head.next;
    this.head.next = newNode;

    this.length++;
    return this;
  }
  append(value) {
    const newNode = new LLNode(value);

    newNode.next = this.tail;
    this.tail = new LLNode("new tail");
    this.length++;
    return this;
  }
  toString() {
    return JSON.stringify(this, null, 2);
  }
}

const myLL = new LinkedList();
console.log(
  myLL
    .append(2)
    //.append(3).append(4)
    .toString()
);

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.list = [];
  }
}
