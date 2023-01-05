/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    let slow = head,
        fast = head;
    while (fast) {
        slow = slow.next;
        // 快指针下一个节点不存在 结束循环
        if (!fast.next) return null;
        fast = fast.next.next;
        if (slow === fast) {
            let cur = head;
            while (cur !== slow) {
                cur = cur.next;
                slow = slow.next;
            }
            return cur;
        }
    }
    return null;
};
// @lc code=end