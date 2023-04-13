/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {rowIndex} number
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const ans = Array(rowIndex);
  for (let i = 0; i <= rowIndex; i++) {
    const rows = Array(i + 1).fill(1);
    // 第一个1和最后一个1不需要被相加
    for (let j = 1; j < rows.length - 1; j++) {
      rows[j] = ans[i - 1][j] + ans[i - 1][j - 1];
    }
    ans[i] = rows;
    if (i === rowIndex) return ans[rowIndex];
  }
};
// @lc code=end
