/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 二分查找
  const min = Math.min(p.val, q.val);
  const max = Math.max(p.val, q.val);
  while (root) {
    // 介于p q区间的节点值便是答案
    if (root.val >= min && root.val <= max) {
      return root;
    } else if (root.val > max) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
  // if (!root || root === p || root === q) return root;
  // const left = lowestCommonAncestor(root.left, p, q);
  // const right = lowestCommonAncestor(root.right, p, q);
  // if (left && right) return root;
  // return left ?? right;
};
// @lc code=end
