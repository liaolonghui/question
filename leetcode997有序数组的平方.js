// 调用api一直可以的

var sortedSquares = function(nums) {
  nums = nums.map(num => num*num).sort((a,b) => a-b)
  return nums
};