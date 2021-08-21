// 菜鸟的暴力解，超时了。惨。。。。。
var maxProduct = function(nums) {
  if (nums.length === 0) return 0
  let max = nums[0]
  function getMax (nums, now, i) {
      if (i >= nums.length) return
      if (nums[i] === 0) {
        max = Math.max(max, 0)
        getMax(nums, 1, ++i)
      } else {
        const num1 = now * nums[i]
        const num2 = nums[i]
        console.log(max, num1, num2)
        max = Math.max(max, num1, num2)
        const index = ++i
        getMax(nums, num1, index)
        getMax(nums, num2, index)
      }
  }
  getMax(nums, 1, 0)
  return max
};
console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
// console.log(maxProduct([0,-1,4,-4,5,-2,-1,-1,-2,-3,0,-3,0,1,-1,-4,4,6,2,3,0,-5,2,1,-4,-2,-1,3,-4,-6,0,2,2,-1,-5,1,1,5,-6,2,1,-3,-6,-6,-3,4,0,-2,0,2]))


// 滑动窗口解法 (因为有负数的情况，所以要维护一个min)
var maxProduct = function(nums) {
  let max = 1
  let min = 1
  let result = nums[0]
  for (let num of nums) {
      let curMax = Math.max(num, num*max, num*min)
      let curMin = Math.min(num, num*max, num*min)
      max = curMax
      min = curMin
      result = Math.max(result, max)
  }
  return result
};

