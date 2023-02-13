/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [617] 两数之和 IV - 输入二叉搜索树
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  // 3种解法 1.利用Set储存k-root.val差值 2.双指针 3.层序遍历
  const set = new Set();
  const dfs = root => {
    if (!root) return false;
    if (set.has(k - root.val)) return true;
    set.add(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  return dfs(root);
};
// @lc code=end
