/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 快慢指针找到中间节点
  // left = head -> slow, right = slow.next -> null
  const listDfs = (head, tail) => {
    // 走到了目标位置
    if (head === tail) return null;
    let slow = head,
      fast = head;
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return new TreeNode(slow.val, listDfs(head, slow), listDfs(slow.next, tail));
  };
  return listDfs(head, null);
  // 数组
  const nums = [];
  let cur = head;
  while (cur) {
    nums.push(cur.val);
    cur = cur.next;
  }
  const dfs = (nums, l, h) => {
    if (l > h) return nums;
    const m = l + ((h - l) >> 1);
    return new TreeNode(nums[m], dfs(nums, l, m - 1), dfs(nums, m + 1, h));
  };
  return dfs(nums, 0, nums.length - 1);
};
