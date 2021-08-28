var hasCycle = function(head) {
  if (!head) return false
  let prev = next = head
  while (prev.next && next.next && next.next.next) {
      prev = prev.next
      next = next.next.next
      if (prev === next) {
          return true
      }
  }
  return false
};