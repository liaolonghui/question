
// 1.检查是否为空数组
// 2.遍历所有字符串，将字母的出现频率放到数组对应位置里（利用ascii）
// 3.建立一个长度为26的数组，起始值为0
// 4.遍历数组，按照相同字母出现频率进行分组归类（使用hashMap）
// 5.遍历map，将结果返回
var groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return []
  }

  let map = new Map()
  strs.forEach(str => {
    const charArr = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const arrIndex = str.charCodeAt(i) - 97
      charArr[arrIndex]++
    }
    const key = charArr
    if (map.has(key)) {
      map.set(key, [...map.get(key), str])
    } else {
      map.set(key, [str])
    }
  })

  const result = []
  for (const arr of map) {
    result.push(arr[1])
  }
  
  return result

};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))