/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const dummy = new TreeNode();
  const dfs = root => {
    if (!root) return null;
    //需要保存一下root.right，否则链式结构变了就没办法用回之前的root.right了(指针破坏)
    const temp = root.right;
    dummy.left = null; // 左子树要保持空状态
    dummy.right = root;
    dummy = dummy.right;
    dfs(root.left);
    dfs(temp);
  };
  dfs(root);
  root = dummy.right;

  // const list = [];
  // const dfs = root => {
  //   if (!root) return;
  //   list.push(root);
  //   dfs(root.left);
  //   dfs(root.right);
  // };
  // dfs(root);
  // for (let i = 1; i < list.length; i++) {
  //   const prev = list[i - 1]; // prev 就是 root
  //   const cur = list[i];
  //   prev.left = null;
  //   prev.right = cur;
  // }
};
// @lc code=end
