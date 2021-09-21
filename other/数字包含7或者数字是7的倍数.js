function isSeven(num) {
  return (num % 7 === 0) || (num.toString().indexOf(7) > -1)
}

console.log(isSeven(7))
console.log(isSeven(17))
console.log(isSeven(14))
console.log(isSeven(28))
console.log(isSeven(71))

