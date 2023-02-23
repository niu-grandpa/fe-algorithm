/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// react的虚拟dom，树平级对比

var isSubtree = function (root, subRoot) {
  // 不停地比较， 某一个子树，是不是和subRoot一样
  if (!root || !subRoot) return false;
  const isSameTree = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  };
  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end
