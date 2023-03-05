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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  // 每层的节点值相加放进数组里，最后排序
  if (!root) return -1;
  const queue = [root];
  const ans = [];
  let level = 0;
  while (queue.length) {
    const size = queue.size;
    let sum = 0;
    level++;
    for (let i = 0; i < size; i++) {
      const n = queue.shift();
      sum += n.val;
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    ans.push(sum);
  }
  if (level < k) return -1;
  ans.sort((a, b) => a - b);
  return ans[level - k];
};
