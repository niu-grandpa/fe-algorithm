/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
// 更像前端的代码
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [];
  const ans = [];
  while (queue.length) {
    const temp = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      temp.push(n.val);
      // 只有children节点，还是个数组
      n.children.forEach(c => c && queue.push(c));
    }
    ans.push(temp);
  }
  return ans;
};
// @lc code=end
