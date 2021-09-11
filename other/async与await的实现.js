async function getOne() {
  return 1
}
// 相当于
function getOneP() {
  return Promise.resolve(1)
}



async function hasAwait() {
  await 1
  await 2
  await 3
  return 4
}
// 相当于
function hasAwaitP() {
  return Promise.resolve(1).then(() => {
    return Promise.resolve(2).then(() => {
      return Promise.resolve(3).then(() => {
        return 4
      })
    })
  })
}
console.log(hasAwait())
console.log(hasAwaitP())