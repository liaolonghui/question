var rotate = function(nums, k) {
  if (nums.length === 0) return nums
  k = k % nums.length
  return nums.slice(-k).concat(nums.slice(0, -k))
};

console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([1,2,3,4,5,6,7], 11))
console.log(rotate([], 3))