var rightSideView = function(root, d=0, result=[]) {
  if (root) {
      if (!result[d]) {
          result[d] = root.val
      }
      rightSideView(root.right, d+1, result)
      rightSideView(root.left, d+1, result)
  }
  return result
};