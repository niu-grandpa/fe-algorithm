/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = Array(n + 1);
  dp[0] = 0;
  let min = prices[0];
  for (let i = 1; i < n; i++) {
    const p = prices[i];
    min = Math.min(min, p);
    dp[i] = Math.max(dp[i - 1], p - min);
  }
  return dp[n - 1];
};
// @lc code=end
