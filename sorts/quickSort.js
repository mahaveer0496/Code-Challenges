const quickSort = (A) => {
  const f = (arr) => {
    if (arr.length < 2) return arr
    const pivot = arr[parseInt((arr.length - 1) / 2)]
    const greater = arr.filter((x) => x > pivot)
    const smaller = arr.filter((x) => x < pivot)
    return [...f(smaller), pivot, ...f(greater)]
  }
  return f(A)
}

console.log(quickSort([8, 5, 1, 2, 6, 4, 3]))
