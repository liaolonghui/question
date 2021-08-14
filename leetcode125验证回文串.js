var isPalindrome = function(s) {
  const reg = /[^a-zA-Z0-9]/g
  s = s.replace(reg, '').toLowerCase()
  if (s.length < 2) return true
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))