const reverse = (head) => {
  let prev = null
  while (head !== null) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

export default reverse
