/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
     let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;         // Move 1 step
        fast = fast.next.next;    // Move 2 steps

        if (slow === fast) {      // Cycle detected
            return true;
        }
    }

    return false; // No cycle
};