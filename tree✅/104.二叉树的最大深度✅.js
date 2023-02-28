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
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  // 层序遍历
  const queue = [root];
  let ans = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    // 遍历完一层加一次
    ans++;
  }
};
