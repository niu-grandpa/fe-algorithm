/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree1 = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return isSameTree1(p.left, q.left) && isSameTree1(p.right, q.right);

  // 层序遍历
  const queueP = [p];
  const queueQ = [q];
  while (queueP.length && queueQ.length) {
    const nodeP = queueP.shift();
    const nodeQ = queueQ.shift();
    if (nodeP.val !== nodeQ.val) return false;
    if (nodeP.left && nodeQ.left) {
      queueP.push(nodeP);
      queueQ.push(nodeQ);
    } else if (nodeP.left || nodeQ.left) {
      return false;
    }
    if (nodeP.right && nodeQ.right) {
      queueP.push(nodeP);
      queueQ.push(nodeQ);
    } else if (nodeP.right || nodeQ.right) {
      return false;
    }
  }
  return true;
};
// @lc code=end
