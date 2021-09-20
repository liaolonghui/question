var intersection = function(nums1, nums2) {
  let result = []
  nums1.map(item => {
      if (nums2.includes(item) && !result.includes(item)) {
          result.push(item)
      }
  })
  return result
};