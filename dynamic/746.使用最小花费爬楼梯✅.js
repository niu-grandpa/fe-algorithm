/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 规划这个最小值
// dp 你到哪第一个台阶所需要的最小花费 是dp[i]
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const dp = Array(len + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[len];
};
// @lc code=end
