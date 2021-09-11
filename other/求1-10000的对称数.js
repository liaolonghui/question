function getNum() {
  let result = []
  for (let i = 11; i <= 10000; i++) {
    const str = i.toString().split('').reverse().join('')
    if (i == str) {
      result.push(i)
    }
  }
  return result
}

console.log(getNum())