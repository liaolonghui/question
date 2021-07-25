var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let l1 = l2 = dummy

  for (let i=0; i<n; i++) {
      l2 = l2.next
  }
  while(l2.next !== null) {
      l1 = l1.next
      l2 = l2.next
  }

  l1.next = l1.next.next
  return dummy.next
};