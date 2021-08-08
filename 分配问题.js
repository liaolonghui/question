// 贪心算法  （局部最优）

var findContentChildren = function(g, s) {
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)
  let i = j = 0
  while (g[i] && s[j]) {
      if (s[j++] >= g[i]) {
          i++
      }
  }
  return i
};