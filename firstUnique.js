// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.

var FirstUnique = function (nums) {
  this.queue = nums;
  this.linkedList = new DoublyLinkedList();
  this.linkedListSize = 0;
  this.hash = {};
  for (const num of nums) {
    // console.log(this.hash);
    if (num in this.hash) {
      this.hash[num].remove();
      this.linkedListSize--;
    } else {
      this.hash[num] = this.linkedList.append(num);
      this.linkedListSize++;
    }
  }
};

FirstUnique.prototype.showFirstUnique = function () {
  if (this.linkedListSize === 0) return -1;
  return this.linkedList.head.next.val;
};

FirstUnique.prototype.add = function (value) {
  if (value in this.hash) {
    this.hash[value].remove();
    this.hash[value] = null;
    this.linkedListSize--;
  } else {
    this.hash[value] = this.linkedList.append(value);
    this.linkedListSize++;
  }
};

const ListNode = function (val = null) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

ListNode.prototype.remove = function () {
  this.prev.next = this.next;
  this.next.prev = this.prev;
  this.prev = null;
  this.next = null;
};

function DoublyLinkedList() {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

DoublyLinkedList.prototype.append = function (val) {
  const newNode = new ListNode(val);
  const lastNode = this.tail.prev;

  lastNode.next = newNode;
  newNode.prev = lastNode;

  this.tail.prev = newNode;
  newNode.next = this.tail;

  return newNode;
};

const obj = new FirstUnique([2, 2, 2]);
// obj.add(3);
console.log(obj.linkedList);
console.log(obj.showFirstUnique());

// console.log(new DoublyLinkedList());
