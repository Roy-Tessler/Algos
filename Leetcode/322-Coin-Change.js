// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

var coinChange = function(coins, amount) {
  const res = [0];
  coins.sort((a, b) => a - b);

  for (let i = 1; i <= amount; i++) {
    res[i] = Infinity;

    for (const coin of coins) {
      if (coin > i) break;
      res[i] = Math.min(res[i], res[i - coin] + 1);
    }
  }
  return res[amount] === Infinity ? -1 : res[amount];
};
