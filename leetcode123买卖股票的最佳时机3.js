// 需要继续领悟
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let dp = Array.from(Array(3), () => new Array(prices.length))
  for (let i=0; i<prices.length; i++) {
      dp[0][i] = 0
  }
  for (let i=0; i<3; i++) {
      dp[i][0] = 0
  }
  for (let i=1; i<3; i++) {
      let maxProfit = -prices[0]
      for (let j=1; j<prices.length; j++) {
          dp[i][j] = Math.max(dp[i][j-1], prices[j]+maxProfit)
          maxProfit = Math.max(maxProfit, dp[i-1][j]-prices[j])
      }
  }
  return dp[2][prices.length-1]
};