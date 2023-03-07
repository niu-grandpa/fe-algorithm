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
var connect = function (root) {
  // [1,2,3,4]
  // [2,3,4] 1 -> 2
  // [3,4] 2 -> 3
  if (!root) return root;
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      // 除了队列最后一个节点不用next赋值
      // queue[0]就是前一个的右节点
      if (i < size - 1) n.next = queue[0];
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
  }
  return root;
};
// @lc code=end
