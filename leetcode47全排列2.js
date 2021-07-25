// 要求当输入[1,1,2]这样的数组时，也能返回不重复解

var permuteUnique = function(nums) {
  nums.sort((a,b) => a-b) // 排序
  const result = []
  const len = nums.length

  if (len > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (i === 0 || nums[i] !== nums[i-1]) { // 去重
        const num = nums[i]
        const otherNums = nums.slice(0, i).concat(nums.slice(i+1, len))
        const otherPermute = permuteUnique(otherNums)
        for (let j = 0; j < otherPermute.length; j++) {
          result.push([num, ...otherPermute[j]])
        }
      }
    }
  } else {
    result.push(nums)
  }

  return result
};


console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([3, 3, 0, 3]))