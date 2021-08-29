// 双循环
var middleNode = function(head) {
  let curr = head
  let len = 0
  while (curr !== null) {
      len++
      curr = curr.next
  }
  const mid = Math.floor(len/2 + 1)
  for (let i=1; i<mid; i++) {
      head = head.next
  }
  return head
};


// 推荐解法：快慢指针