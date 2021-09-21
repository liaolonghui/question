let arr = [1,2,3,4,5,6,7,8,9,10]
// 十人抽奖(不可重复)

let old = []
function getOne(arr) {
  const index = Math.floor(Math.random() * (arr.length + 1))
  if (old.includes(index)) {
    return getOne(arr)
  } else {
    old.push(index)
    return index
  }
}

// 抽十次试试看
for (let index = 0; index < 10; index++) {
  console.log(getOne(arr))
}