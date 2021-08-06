var deleteDuplicates = function(head) {
    let current = head

    while (current && current.next) {
        if (current.val === current.next.val) {
            // 删
            current.next = current.next.next
        } else {
            val = current.next.val
            current = current.next
        }
    }

    return head
}