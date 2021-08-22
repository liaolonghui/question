var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a,b) => a-b)
  const len = arr.length
  if (arr.length % 2 === 0) {
      return (arr[len/2] + arr[(len/2)-1]) / 2
  } else {
      return arr[Math.floor(len/2)]
  }
};