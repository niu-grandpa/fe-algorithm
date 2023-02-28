/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  // 每一层最右边的一个值
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    const size = queue.length;
    let right = 0;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      // 右节点总是在最后一个被弹出，因此利用这个特性
      right = n.val;
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    ans.push(right);
  }
  return ans;
};
// @lc code=end
