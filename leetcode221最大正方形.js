var maximalSquare = function(matrix) {
  if (!matrix || matrix.length === 0) return 0
  const rows = matrix.length, cols = matrix[0].length
  let max = 0
  let dp = new Array(rows+1).fill([]).map(row => {
    return row = new Array(cols+1).fill(0)
  })
  for (let i=1; i<=rows; i++) {
      for (let j=1; j<=cols; j++) {
          if (matrix[i-1][j-1] == '1') {
              dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
              max = Math.max(max, dp[i][j])
          }
      }
  }
  return max * max
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))