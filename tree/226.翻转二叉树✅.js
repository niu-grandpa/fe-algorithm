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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  root.left && invertTree(root.left);
  root.right && invertTree(root.right);
  return root;
  // BFS
  // const queue = [root];
  // while (queue.length) {
  //   const n = queue.shift();
  //   const temp = n.left;
  //   n.left = n.right;
  //   n.right = temp;
  // }
};
