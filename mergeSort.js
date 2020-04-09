const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const leftSubArray = mergeSort(array.slice(0, (array.length - 1) / 2));
  const rightSubArray = mergeSort(array.slice((array.length - 1) / 2));
};

console.log(mergeSort([2, 1, 5, 4, 3, -1, 2, 0]));
console.log(mergeSort([31, 41, 59, 26, 41]));
