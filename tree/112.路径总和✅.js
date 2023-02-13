/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (root, res) => {
    if (!root) return false;
    res += root.val;
    if (!root.left && !root.right) {
      return res === targetSum;
    }
    return dfs(root.left, res) || dfs(root.right, res);
  };
  return dfs(root, 0);
};
// @lc code=end
