/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    // [1,2,3,3,4,4,5]
    // [1,2,5]
    if (!head) return null;
    const dummy = {
        next: head,
    };
    let temp = dummy;
    while (temp.next && temp.next.next) {
        if (temp.next.val === temp.next.next.val) {
            const val = temp.next.val;
            // 取出相同的数，循环后续节点是否还有一样的
            while (temp.next && temp.next.val === val) {
                temp.next = temp.next.next;
            }
        } else {
            temp = temp.next;
        }
    }
    return dummy.next;
};