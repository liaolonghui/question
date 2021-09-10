var levelOrder = function(root, floor=0, result=[]) {
    if (!root) return []
    result[floor] = result[floor] || []
    result[floor].push(root.val)
    if (root.left) {
        levelOrder(root.left, floor+1, result)
    }
    if (root.right) {
        levelOrder(root.right, floor+1, result)
    }
    return result
};