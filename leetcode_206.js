// Difficulty: Easy

/*
206. Reverse Linked List (https://leetcode.com/problems/reverse-linked-list/)

Reverse a singly linked list.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/


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
var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }

    var res = new ListNode(-1);
    res.next = head;
    head = head.next;
    res.next.next = null;
    while(head) {
        var tmp = head.next;
        head.next = res.next;
        res.next = head;
        head = tmp;
    }

    return res.next;
};
