var a
console.log('1 a:' + a)
if (true) {
  a = 1
  function a () {}
  a = 5
  console.log('2 a:' + a)
}
console.log('3 a:' + a)