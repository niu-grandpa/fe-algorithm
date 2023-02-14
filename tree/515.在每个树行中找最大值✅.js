/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const temp = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      temp.push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    ans.push(Math.max(...temp));
  }
  return ans;
};
// @lc code=end
