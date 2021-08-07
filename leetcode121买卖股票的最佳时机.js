var maxProfit = function(prices) {
  if (prices.length === 0) return 0 
  let result = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      } else if (prices[i] - minPrice > result) {
          result = prices[i] - minPrice
      }
  }
  return result
};