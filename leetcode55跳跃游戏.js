// 这里可以用 贪心 解题最快。 dp也可


// 用dp会很慢，所以本题推荐贪心
// dp （自顶向下（top-down））
var canJump = function(nums) {
  const len = nums.length
  let memo = new Array(len).fill(0) // 0表示未知，1表示通路，-1不通
  memo[len-1] = 1

  function jump (position) {
      if (memo[position] === 1) {
          return true
      } else if (memo[position] === -1) {
          return false
      }
      const max = Math.min(position + nums[position], len-1) // 最多跳多远
      for (let i = position+1; i <= max; i++) {
          const jumpResult = jump(i)
          if (jumpResult) {
              memo[position] = 1 // 标记为通路
              return true
          }
      }
      memo[position] = -1 // 标记为不通
      return false
  }

  const result = jump(0) // 从第一位开始jump...
  return result
};
// dp （自底向上（bottom-up））
var canJump = function(nums) {
  const len = nums.length
  let memo = new Array(len).fill(0) // 0表示未知，1表示通路，-1不通
  memo[len-1] = 1

  for (let i = len-2; i >= 0; i--) {
      const max = Math.min(i+nums[i], len-1)
      for (let j = i+1; j <= max; j++) {
          if (memo[j] === 1) {
              memo[i] = 1
              break // 只要找到一个通路就可以了
          }
      }
  }

  if (memo[0] === 1) {
      return true
  } else {
      return false
  }

};



// 贪心算法
var canJump = function(nums) {
    
    let maxJump = nums.length - 1
    let current = nums.length - 2

    while (current >= 0) {
        if (nums[current]+current >= maxJump) {
            maxJump = current
        }
        current--
    }

    return maxJump === 0

};