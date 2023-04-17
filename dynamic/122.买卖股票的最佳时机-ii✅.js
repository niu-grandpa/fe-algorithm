/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  // 与第一版不同，不能买入最低点等到最高点那天再卖出
  // 最多只能持有一股股票，即每一天都要卖出前一天的股票
  // 所有大于0的利润都相加起来
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1];
    }
  }
  return ans;
};
// @lc code=end
