const twoSum = function(nums, target) {
  const map = new Map()
  for (let index = 0; index < nums.length; index++) {
    const need = target - nums[index]
    if (map.has(need)) {
      return [map.get(need), index]
    } else {
      map.set(nums[index], index)
    }
  }
  return null
};

console.log(twoSum([2, 7, 11, 15], 9))