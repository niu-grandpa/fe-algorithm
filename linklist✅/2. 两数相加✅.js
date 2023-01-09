/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    // 9  9  9  9  9  9  9
    // +  +  +  +  +  +  +
    // 9  9  9  9
    //    空位补0   0  0  0

    let head = null,
        temp = null,
        carry = 0;

    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        const node = new ListNode(sum % 10);
        carry = ~~(sum / 10);
        if (!head) {
            head = temp = node;
        } else {
            temp.next = node;
            temp = temp.next;
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (carry) temp = new ListNode(carry % 10);
    }
    return head;
}