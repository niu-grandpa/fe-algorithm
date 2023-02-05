/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  // 二叉搜索树的特点：根节点比左子树都要大，比右子树都要小
  // 将有序数组中间元素作为根，左边区间构建左子树，右边区间右子树
  const m = ~~(nums.length / 2);
  const root = new TreeNode(nums[m]);
  root.left = sortedArrayToBST(nums.slice(0, m));
  root.right = sortedArrayToBST(nums.slice(m + 1));
  return root;

  // 二分查找+递归
  const dfs = (l, h, nums) => {
    const m = l + ((h - l) >> 1);
    const root = new TreeNode(nums[m]);
    root.left = dfs(l, m - 1, nums);
    root.right = dfs(m + 1, h, nums);
    return root;
  };
  return dfs(0, nums.length - 1, nums);
};
// @lc code=end
