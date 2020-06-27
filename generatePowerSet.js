/* 
Given a set generatePowerSet of given array
PowerSet is set containing all subsets of given arrray.
Number of elements in PowerSet = 2^n


Algorithm - 
* from 0 to 2^arr.length
  * start binary counting
  * for each bit in binary count
    * if ith bit in current binary count is set, include the array[currentIndex] in subset
  * push subset to powerSet


Example -
array = [1,2,3]
binary counting with 3 bits (Arr.length would be)
4 2 1
-----
0 0 0 ->  []
0 0 1 ->  [3]
0 1 0 ->  [2]
0 1 1 ->  [2,3]
1 0 0 ->  [1]
1 0 1 ->  [1,3]
1 1 0 ->  [1,2]
1 1 1 ->  [1,2,3]
*/
const generatePowerSet = (arr) => {
  const n = Math.pow(2, arr.length)
  const powerSet = []

  for (let i = 0; i < n; i++) {
    const binaryCount = i.toString(2) //convert i to binary
    const binaryArray = binaryCount.padStart(arr.length, '0').split('') //we need to pad so each bit representation have equal length
    const set = []
    binaryArray.forEach((bit, index) => {
      if (bit == 1) {
        set.push(arr[index])
      }
    })
    powerSet.push(set)
  }

  return powerSet
}

console.log(generatePowerSet([1, 2, 3]))
