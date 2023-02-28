/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const size = queue.length;
    let res = 0;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      res += n.val;
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    ans.push(res / size);
  }
  return ans;
};
// @lc code=end
