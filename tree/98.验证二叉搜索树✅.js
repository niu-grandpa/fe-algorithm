/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 中序遍历获得递增节点，然后每次和前一个节点值比较，如果大则说明无效
  // [1,2,3,4] √ [1,2,4,3] ×
  let prev = -Infinity;
  const dfs = root => {
    if (!root) return true;
    const left = dfs(root.left);
    if (prev >= root.val) return false;
    prev = root.val;
    const right = dfs(root.right);
    return left && right;
  };
  return dfs(root);
  // const ans = [];
  // const dfs = (root) => {
  //   if(!root) return true;
  //   root.left && dfs(root.left);
  //   ans.push(root.val)
  //   root.right && dfs(root.right);
  // }
  // dfs(root);
  // for(let i = 1; i < ans.length;i++) {
  //   if(ans[i] <= ans[i-1]) return false;
  // }
  // return true
};
// @lc code=end
