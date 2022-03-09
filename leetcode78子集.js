var subsets = function(nums) {
  let result = []
  
  function backTrack(start, arr) {
    result.push([...arr])
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i])
      backTrack(i + 1, arr)
      arr.pop()
    }
  }

  backTrack(0, [])

  return result
};

console.log(subsets([1,2,3]))