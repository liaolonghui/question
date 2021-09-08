var inorderTraversal = function(root, result=[]) {
    if (!root) return []
    inorderTraversal(root.left, result)
    result.push(root.val)
    inorderTraversal(root.right, result)
    return result
};