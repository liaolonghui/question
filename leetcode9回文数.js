// var isPalindrome = function(x) {
//   x = x.toString()
//   let y = x.split('').reverse().join('')
//   return x === y
// };


var isPalindrome = function(x) {
  x = x.toString()
  let left = 0
  let right = x.length-1
  while (left < right) {
      if (x[left] !== x[right]) {
          return false
      }
      left++
      right--
  }
  return true
};

console.log(isPalindrome(121))