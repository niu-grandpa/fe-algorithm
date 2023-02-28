/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 思考题： 有没有优化空间
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  // 分治
  const dfs = (l, h, nums) => {
    if (l > h) return null;
    let max = -1,
      idx = -1;
    for (let i = l; i <= h; i++) {
      if (max < nums[i]) {
        max = nums[i];
        idx = i;
      }
    }
    const root = new TreeNode(max);
    root.left = dfs(l, idx - 1);
    root.right = dfs(idx + 1, h);
    return root;
  };
  return dfs(0, nums.length - 1, nums);
  // 以最大值为原点，向左构建左子树，反之
  // const max = Math.max(...nums);
  // const idx = nums.indexOf(max);
  // const root = new TreeNode(max);
  // root.left = constructMaximumBinaryTree(nums.slice(0, idx));
  // root.root = constructMaximumBinaryTree(nums.slice(idx + 1));
  // return root;
};
// @lc code=end
