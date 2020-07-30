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
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let l3 = new ListNode(null, null)
	let prev = l3

	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			prev.next = l1
			l1 = l1.next
		} else {
			prev.next = l2
			l2 = l2.next
		}
		prev = prev.next
	}

	if (l1 === null) {
		prev.next = l2
	}
	if (l2 === null) {
		prev.next = l1
	}

	return l3.next
}
