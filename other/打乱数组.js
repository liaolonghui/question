// let arr = [1,2,3,4,5,6]
// arr.sort((a,b) => 0.5 - Math.random())
// console.log(arr)



let arr = [1,2,3,4,5,6]
function randomArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = parseInt(Math.random() * arr.length)
    const temp = arr[index]
    arr[index] = arr[i]
    arr[i] = temp
  }
  return arr
}
console.log(randomArr(arr))