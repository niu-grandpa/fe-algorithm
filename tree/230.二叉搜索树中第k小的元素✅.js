/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 中序遍历，获得有序节点，然后k递减到0的位置就是答案
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (!k) return root.val;
    root = root.right;
  }
  // const ans = [];
  // const dfs = root => {
  //   if (!root) return;
  //   root.left && dfs(root.left);
  //   ans.push(root.val);
  //   root.right && dfs(root.right);
  // };
  // dfs(root);
  // return ans[k - 1];
};
// @lc code=end
