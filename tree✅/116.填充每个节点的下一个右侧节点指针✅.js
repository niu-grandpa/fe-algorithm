/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// [1]
// [2,3]
// 45,6,[,7]
var connect = function (root) {
  // 由于层序遍历存储的相对后一个节点必为右节点，那么当从队列取出一个节点时
  // 判断队列是否不为空，不为空则说明当前节点可以设置它的next节点为它在队列
  // 中的下一个节点
  if (!root) return root;
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const n = queue.shift();
      if (size > 0) n.next = queue[0];
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
  }
};
// @lc code=end
