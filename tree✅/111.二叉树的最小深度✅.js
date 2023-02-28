/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  // 递归
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

  // 层序遍历
  const queue = [root];
  let ans = 0;
  while (queue.length) {
    let size = queue.length;
    ans++;
    while (size--) {
      const n = queue.shift();
      if (!n.left && !n.right) return ans;
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
  }
};
// @lc code=end
