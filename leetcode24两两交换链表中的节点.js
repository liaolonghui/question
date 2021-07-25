var swapPairs = function(head) {
  let current = head

  while (current && current.next) {
      const temp = current.val
      current.val = current.next.val
      current.next.val = temp
      current = current.next.next
  }

  return head
};