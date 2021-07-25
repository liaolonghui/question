var searchRange = function(nums, target) {
  let start = end = -1

  for (let i=0; i<nums.length; i++) {
      if (nums[i] === target) {
          if (start === -1) {
              start = end = i
          } else {
              end = i
          }
      }
  }

  return [start, end]
};

// 推荐使用“二分查找”解答。