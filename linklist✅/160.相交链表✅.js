/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // if(headA===null || headB===null){
    //   return null
    // }
    let curA = headA,
        curB = headB;
    while (curA !== curB) {
        curA = !curA ? headB : curA.next;
        curB = !curB ? headA : curB.next;
    }
    return curA;
    // while(headA)
    // while(headB)

    // 1=>2=>3=>4
    // 5=>3=>4

    // 1=>2=>3=>4=>5=>3=>4 
    // 5=>3=>4=>1=>2=>3=>4

};
// @lc code=end