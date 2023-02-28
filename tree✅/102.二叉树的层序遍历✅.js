/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    let size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      temp.push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    ans.push(temp);
  }
  return ans;
};
// @lc code=end
