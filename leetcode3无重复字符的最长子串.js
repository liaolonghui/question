var lengthOfLongestSubstring = function(s) {
  let set = new Set()
  let maxLen = 0
  let i = j = 0
  for (; i < s.length; i++) {
      if (set.has(s[i])) {
          while(set.has(s[i])) {
              set.delete(s[j])
              j++
          }
          set.add(s[i])
      } else {
          set.add(s[i])
          maxLen = Math.max(set.size, maxLen)
      }
  }
  return maxLen
};