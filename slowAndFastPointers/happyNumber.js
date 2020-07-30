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

const getSumOfSquareOfDigits = (N) =>
  [...String(N)].reduce((acc, digit) => acc + Math.pow(+digit, 2), 0)

console.log(isHappyNumber(12))
