var rotateString = function(s, goal) {
  const len = s.length
  for (let i=0; i<len; i++) {
      if (s === goal) {
          return true
      }
      s = s.slice(1, len) + s.slice(0, 1)
  }
  return false
};

// 网上看到的牛逼解法
