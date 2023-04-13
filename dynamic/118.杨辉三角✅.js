/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = Array(numRows);
  for (let i = 0; i < numRows; i++) {
    const rows = Array(i + 1).fill(1);
    // 第一个1和最后一个1不需要被相加
    for (let j = 1; j < rows.length - 1; j++) {
      rows[j] = ans[i - 1][j] + ans[i - 1][j - 1];
    }
    ans[i] = rows;
  }
  return ans;
};
// @lc code=end
