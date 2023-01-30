/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // list1 = [0,1,2,3,4,5] a = 3, b = 4
    // list2 = [1000000,1000001,1000002]
    // ans = [0,1,2,1000000,1000001,1000002,5]

    let startNode = list1;
    // 取到[2,3,4,5] 直接.next将2后面的接上list2
    for (let i = 0; i < a - 1; i++) {
        startNode = startNode.next;
    }
    let endNode = startNode;
    // 取到b之后的节点
    for (let i = 0; i < b - a + 2; i++) {
        endNode = endNode.next;
    }
    startNode.next = list2;
    // 将剩余节点接到list2末尾
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = endNode;
    return list1;
};