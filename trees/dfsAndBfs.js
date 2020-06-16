export const bfs = (root, onEnter = () => {}) => {
  const result = []
  let node = root
  const queue = [node]
  while (queue.length) {
    node = queue.shift()
    onEnter(node)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    result.push(node.value)
  }
  return result
}
