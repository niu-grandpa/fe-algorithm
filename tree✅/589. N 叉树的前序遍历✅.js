/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = [];
  const dfs = root => {
    if (!root) return;
    ans.push(root.val);
    root.children.forEach(c => c && ans.push(c));
  };
  dfs(root);
  return ans;
};
// @lc code=end
