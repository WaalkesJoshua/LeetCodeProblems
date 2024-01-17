/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode reverseList(ListNode head) {
      //check that head is not null, if it is, return head
      if (head == null) {
          return head;
      }

      //set a prev var to head
      ListNode prev = head;
      //set cur var to head.next so that
      ListNode cur = head.next;
      //we can adjust prev.next for first node to null
      prev.next = null;
      //in a while loop, if cur is not null
      while (cur != null) {
      //using next var, grab a snapshot of cur.nex
      ListNode next = cur.next;
      //then point cur.next backwards to prev
      cur.next = prev;
      //then move prev and cur forward
          //set prev = cur
      prev = cur;
          //set cur = next
      cur = next;
      }
      //after while loops concludes, prev will be last element in original list, now the head in reversed list
      //return prev
      return prev;
  }
}