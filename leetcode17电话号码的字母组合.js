// 2(abc) 3(def) 4(ghi) 5(jkl) 6(mno) 7(pqrs) 8(tuv) 9(wxyz)
// 输入几个数字，得出数字对应的字母之间的排列组合

// digits的长度 0-4
// digits[i]是2-9中的一个数字

let letterArr = [
  ' ',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz'
]

function letterCombinations(digits) {
  let result = [] // 结果集
  if (digits.length===0) return result
  findCombination(digits, 0, '', result)
  return result
}
// digits是所有输入的数字。 index是当前索引。 str是排列组合
function findCombination(digits, index, str, result) {
  if (index === digits.length) return result.push(str) // 把当前得到的排列组合push进结果集中
  const c = digits[index]
  const letters = letterArr[c] // 拿到数字对应的letters
  for (let i = 0; i < letters.length; i++) {
    findCombination(digits, index+1, str+letters[i], result)
  }
}
console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
console.log(letterCombinations('3'))
console.log(letterCombinations(''))

