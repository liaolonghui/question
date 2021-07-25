// 从数组中找出三个数之和为0的，有几个解就输出几个解，但不能有重复解。


// 1.给数组排序

// 2.遍历数组，从0到length-2 （why？）因为i为length-2的时候，只能拿到倒数两个数字，拿不到三个数字了。。。。。。

// 3.如果当前的数字等于前一个数字则跳过这个数（why？）防止出现重复解。。。。。。

// 4.如果数字不同，则设置start=i+1，end=length-1，查看i，start，end三数之和比零大还是小。小则start++，大则end--，等于则加入到结果里。

// 5.返回结果


var threeSum = function(nums) {
  const result = []

  nums.sort((a, b) => a-b)

  for (let i = 0; i < nums.length-2; i++) {
    if (i === 0 || nums[i] !== nums[i-1]) {
      let start = i + 1, end = nums.length - 1
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) { // 等于0
          result.push([nums[i], nums[start], nums[end]])
          start++
          end--
          while (start<end && nums[start] === nums[start-1]) {
            start++
          }
          while (start<end && nums[end] === nums[end+1]) {
            end--
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) { // 小于0
          start++
        } else { // 大于0
          end--
        }
      }
    }
  }

  return result
};