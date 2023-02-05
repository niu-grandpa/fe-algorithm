/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const ans = [];
  // const dfs = root => {
  //   if (!root) return;
  //   dfs(root.left); // 左
  //   dfs(root.right); // 右
  //   ans.push(root.val); // 根
  // };
  // dfs(root);
  const stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    const n = stack.pop();
    if (!n) {
      ans.push(stack.pop().val);
      continue;
    }
    stack.push(n, null);
    n.right && stack.push(n.right);
    n.left && stack.push(n.left);
  }
  return ans;
};
// @lc code=end
