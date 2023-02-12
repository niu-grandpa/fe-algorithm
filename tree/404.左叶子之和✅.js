/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let ans = 0;
  // 对两颗子树的左子树查找左子树
  const dfs = root => {
    if (!root) return;
    const left = root.left;
    // 找到没有叶子节点的左子节点
    if (left && !left.left && !left.right) {
      ans += left.val;
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
// @lc code=end
