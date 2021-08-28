// 使用栈来解决
var reverseList = function(head) {
  if (!head) return head
  let stack = []
  let curr = head

  while (curr) {
      stack.push(curr)
      curr = curr.next
  }
  curr = head = stack.pop()
  while (stack.length > 0) {
      curr.next = stack.pop()
      curr = curr.next
  }
  curr.next = null
  return head
};

// 多指针
var reverseList = function(head) {
  let prev = null
  let curr = next = head
  while (next) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
};
// 简化
var reverseList = function(head) {
  let prev = null
  let curr = head
  while (curr !== null) {
      [curr.next, prev, curr] = [prev, curr, curr.next]
  }
  return prev
};



// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
