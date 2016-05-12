// Difficulty: Medium

/*
328. Odd Even Linked List (https://github.com/NickPepper/Leetcode-Solutions.git)

Given a singly linked list, group all odd nodes together followed by the even nodes.
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place.
The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
    if(head === null) {
        return head;
    }
    
    var n = 1,
        pre = head,
        cur = pre.next,
        tail = head;
    while(tail.next !== null) {
        n++;
        tail = tail.next;
    }
    if(n < 3) {
        return head;
    }
    for(var i = 0; i < n >> 1; i++) {
        pre.next = cur.next;
        tail.next = cur;
        cur.next = null;
        pre = pre.next;
        cur = pre.next;
        tail = tail.next;
    }
    return head;
};
