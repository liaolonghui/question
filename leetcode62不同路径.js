var uniquePaths = function(m, n) {
    let dp = new Array(n).fill([])

    for (let col = 0; col < n; col++) {
        dp[col][0] = 1
    }
    for (let row = 0; row < m; row++) {
        dp[0][row] = 1
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }

    return dp[n-1][m-1]
};