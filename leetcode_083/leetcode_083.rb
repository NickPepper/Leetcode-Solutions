# Difficulty: Easy

=begin
83. Remove Duplicates from Sorted List (https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
=end


# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    if !head or !head.next then return head end
    cur = head
    while cur.next
        if cur.val == cur.next.val then cur.next = cur.next.next
        else cur = cur.next
        end
    end
    return head    
end

# Your runtime beats 25.00% of ruby submissions.
