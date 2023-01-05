/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//  head.next
var removeElements = function(head, val) {
    const dummy = {
        next: head
    }
    let temp = dummy;
    while (temp.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return dummy.next;
    // if (!head) return head;
    // removeElements(head.next, val);
    // return head.val === val ? head.next : head;
};