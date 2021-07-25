// 回文串（从前往后和从后往前一样）

// 从中心扩散的思想....
// 但如果是cbaabd的话就会出现问题（用该思想不能得出baab最长回文子串），所以要判断两次（设i为中心。i-1与i+1开始往两边扩散，i与i+1开始扩散）

const longestPalindrome = function(s) {

  if (s.length < 2) {
    return s
  }

  let start = 0
  let maxLen = 1 // 默认为1，防止出现类似'ab'这样的字符串

  function expandAroundCenter (left, right) { // 从中心向四周扩散
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1
        start = left
      }
      left--
      right++
    }
  }

  for (let index = 0; index < s.length; index++) {
    expandAroundCenter(index-1, index+1)
    expandAroundCenter(index, index+1)
  }

  return s.substr(start, maxLen)

};