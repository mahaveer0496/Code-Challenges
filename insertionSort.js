// from current item compare to previous item, if current is less than previous then swap, else leave it be.

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
};

console.log(insertionSort([2, 1, 5, 4, 3, -1, 2, 0]));
console.log(insertionSort([31, 41, 59, 26, 41]));
