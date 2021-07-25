var permute = function(nums) {
  const result = []
  const len = nums.length

  if (len > 1) {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const otherNums = nums.slice(0, i).concat(nums.slice(i+1, len))
      const otherPermute = permute(otherNums)
      for (let j = 0; j < otherPermute.length; j++) {
        result.push([num, ...otherPermute[j]])
      }
    }
  } else if (len === 1) {
    result.push(nums)
  }

  return result
}

console.log(permute([]))
console.log(permute([1]))
console.log(permute([1,2,3]))