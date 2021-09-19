// 求交集
function every(a,b) {
  return a.filter(item => b.includes(item))
}

console.log(every([1,2,5], [1,4,2]))