var reverseBetween = function(head, left, right) {
    let prev = null
    let curr = head
    let next = head
    for (let i=1; i<left; i++) {
        prev = curr
        curr = curr.next
    }
    let prev2 = prev
    let curr2 = curr
    for (let i=left; i<=right; i++) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    // 如果left是0，则要注意了。
    if (prev2 !== null) {
        prev2.next = prev
    } else {
        head = prev
    }
    curr2.next = curr
    return head
};