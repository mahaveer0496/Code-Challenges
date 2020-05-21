// redo this
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const leaderNode = this.getNodeAtIndex(index - 1);
    newNode.next = leaderNode.next;
    leaderNode.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return;
    const leaderNode = this.getNodeAtIndex(index - 1);
    const nodeToRemove = leaderNode.next;
    leaderNode.next = nodeToRemove.next;
    this.length--;
    return this;
  }
  getNodeAtIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if (this.length === 1) return this.head;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
  toString() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLL = new LinkedList(10);

myLL
  .prepend(1)
  .append(2)
  .append(4)
  .append(5)
  .insert(6, 3)
  .insert(1, 9)
  .insert(1, 99)
  .remove(1)
  .reverse()
  .reverse()
  .toString();
