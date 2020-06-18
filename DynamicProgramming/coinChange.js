/*
Given amount and denominations, in how many ways can we make the change?
*/
const coinChange = (amount, denominations) => {
  let foo = 0
  const f = (n) => {
    if (n == 0) return 1
    if (n < 0) return 0
    else {
      let totalWays = 0
      for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i]
        totalWays += f(n - denomination)
      }
      return totalWays
    }
  }

  return f(amount)
}

console.log(coinChange(10, [1, 2]))
