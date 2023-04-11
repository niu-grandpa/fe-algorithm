/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const dp = Array(n + 1);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < n; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
// @lc code=end
