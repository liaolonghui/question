// 调用api一直可以的
var reverseString = function(s) {
  return s.reverse()
};

// 双指针
var reverseString = function(s) {
  let left = 0
  let right = s.length-1
  while (left < right) {
      const temp = s[left]
      s[left] = s[right]
      s[right] = temp
      right--
      left++
  }
  return s
};