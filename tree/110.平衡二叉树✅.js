/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// -1
var isBalanced = function (root) {
  // 左子树深度不能比右子树超出1，只能相等或小于1个度
  const dfs = root => {
    if (!root) return 0;
    const left = dfs(root.left);
    if (left === -1) return -1;
    const right = dfs(root.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  };
  return dfs(root) !== -1;
};
// @lc code=end
