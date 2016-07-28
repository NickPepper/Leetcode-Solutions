// Difficulty: Easy

/*
83. Remove Duplicates from Sorted List (https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    if(!head || !head->next) return head;
    struct ListNode* cur = head;
    while(cur->next) {
        if(cur->val == cur->next->val) cur->next = cur->next->next;
        else cur = cur->next;
    }
    return head;
}
// Your runtime beats 20.00% of c submissions.
