// 2022.3.9  1157 / 1157
// 执行用时：108 ms, 在所有 JavaScript 提交中击败了29.58%的用户
// 内存消耗：50.3 MB, 在所有 JavaScript 提交中击败了11.22%的用户
var convert = function(s, numRows) {
  if (numRows === 1) return s
  // Array.from(new Array(3),()=>{return new Array(3).fill(false)}) 另一种创建二维数组的方式
  let arr = new Array(numRows).fill().map(item => new Array())

  let index = 0;

  let col = -1;

  function z(direction) {
    if (direction === 'bottom') {
      col++
      for(let row = 0; row < arr.length; row++) {
        if (!s[index]) return;
        arr[row][col] = s[index]
        index++
      }
      z('top')
    } else if (direction === 'top') {
      for(let row = arr.length - 2; row > 0; row--) {
        if (!s[index]) return;
        col++
        arr[row][col] = s[index]
        index++
      }
      z('bottom')
    }
  }
  z('bottom')

  let str = ''
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col]) {
        str += arr[row][col]
      }
    }
  }

  return str
};


// convert('PAYPALISHIRING', 3)
console.log(convert('PAYPALIS,HIRING', 3));