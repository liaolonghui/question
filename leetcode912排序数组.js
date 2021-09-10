// 快排
var sortArray = function(nums, left, right) {
  if (left >= right) {
      return
  }

  left = left || 0
  right = right || nums.length-1

  const num = nums[left]
  let leftPoint = left
  let rightPoint = right

  while (leftPoint < rightPoint) {
      while (leftPoint < rightPoint && nums[rightPoint] >= num) {
          rightPoint--
      }
      while (leftPoint < rightPoint && nums[leftPoint] <= num) {
          leftPoint++
      }
      if (leftPoint < rightPoint) {
          const temp = nums[leftPoint]
          nums[leftPoint] = nums[rightPoint]
          nums[rightPoint] = temp
      }
  }

  nums[left] = nums[leftPoint]
  nums[leftPoint] = num

  sortArray(nums, left, leftPoint-1)
  sortArray(nums, leftPoint+1, right)

  return nums
};


console.log(sortArray([5,2,3,1]))