/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);
  // if (root.val > val) {
  //   root.left = insertIntoBST(root.left);
  // } else {
  //   root.right = insertIntoBST(root.right);
  // }
  // return root;
  if (root.val > val) {
    if (root.left === null) {
      root.left = new TreeNode(val);
    } else {
      insertIntoBST(root.left, val);
    }
    return root;
  }
  if (root.val < val) {
    if (root.right === null) {
      root.right = new TreeNode(val);
    } else {
      insertIntoBST(root.right, val);
    }
    return root;
  }
};
// @lc code=end
