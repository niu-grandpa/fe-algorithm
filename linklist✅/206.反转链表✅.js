/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// cur
// head-->b-->c

// b.next = c 取消
// b.next = head  (prev获取遍历的上一个节点)

// c-->b-->head

// prev->cur->next

var reverseList = function(head) {
    if (!head) return head;
    let cur = head,
        prev = null
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
// @lc code=end