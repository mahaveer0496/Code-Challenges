/* 
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
*/
// reread the explanation for this
const isHappyNumber = (N) => {
  let slow = N
  let fast = N

  while (true) {
    slow = getSumOfSquareOfDigits(slow)
    fast = getSumOfSquareOfDigits(getSumOfSquareOfDigits(fast))
    if (slow == fast) {
      break
    }
  }

  return slow == 1
}

const isHappyNumberHash = (N, map = {}) => {
  const sum = getSumOfSquareOfDigits(N)
  if (sum === 1) return true

  if (sum in map) return false
  else map[sum] = true

  return isHappyNumberHash(sum, map)
}

function getSumOfSquareOfDigits(N) {
  return [...String(N)].reduce((acc, digit) => acc + Math.pow(+digit, 2), 0);
}

console.log(isHappyNumber(23))
console.log(isHappyNumberHash(23))
console.log(isHappyNumber(12))
console.log(isHappyNumberHash(12))
