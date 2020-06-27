/*
Given amount and denominations, in how many ways can we make the change?
*/
const coinChange = (amount, denominations) => {
  const f = (amount) => {
    if (amount == 0) return 0
    if (amount < 0) return 0
    let total = Infinity
    denominations.forEach((d) => {
      total = 1 + Math.min(total, f(amount - d))
    })
    return total
  }

  return f(amount)
}

console.log(coinChange(10, [1, 5, 2]))
