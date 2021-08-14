// 贪心
var maxProfit = function(prices) {
  let result = 0
  for (let i=0; i<prices.length; i++) {
      if (prices[i+1] > prices[i]) {
          result += prices[i+1]-prices[i]
      }
  }
  return result
};


// 常规思路
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  let profit = 0
  let valley = peak = prices[0]
  let i = 0
  while (i < prices.length-1) {
      while (i < prices.length-1 && prices[i]>=prices[i+1]) {
          i++
      }
      valley = prices[i]
      while (i < prices.length-1 && prices[i]<=prices[i+1]) {
          i++
      }
      peak = prices[i]
      profit += peak - valley
  }
  return profit
};