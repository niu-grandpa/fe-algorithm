/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const ans = [];
  const dfs = (root, res) => {
    if (!root) return;
    res += `${root.val}->`;
    if (root && !root.left && !root.right) {
      ans.push(res.substring(0, res.length - 2));
      return;
    }
    dfs(root.left);
    dfs(root.right);
  };
  return ans;
};
// @lc code=end
