// var removeDuplicates = function(s) {
//   let flag = true
//   let left = 0
//   for(let i=1; i<s.length; i++) {
//       if (s[left] === s[i]) {
//           flag = false
//           s = s.slice(0, i) + s.slice(i+1, s.length)
//           s = s.slice(0, left) + s.slice(left+1, s.length)
//           i--
//       } else {
//           left++
//       }
//   }
//   if (flag) {
//     return s
//   } else {
//     return removeDuplicates(s)
//   }
// };
// 103/106 超出了

var removeDuplicates = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length-1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
};


console.log(removeDuplicates("abbaca"))