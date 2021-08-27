// 什么叫模拟大师啊（😂）
var canCompleteCircuit = function(gas, cost) {
  if (gas.length === 1) {
      if (gas[0] - cost[0] >= 0) {
          return 0
      }
  }
  for (let i=0; i<gas.length; i++) {
      let now = gas[i]
      let flag = false
      let j
      if (i==gas.length-1) {
        j = 0
      } else {
        j = i+1
      }
      for (; j!==i; ) {
          if (j==0) {
            now = now - cost[cost.length-1]
          } else {
            now = now - cost[j-1]
          }
          if (now < 0) {
            break
          }
          now = now + gas[j]
          if (++j >= gas.length) {
              j = 0
          }
          if (j == i) {
            flag = true
          }
      }
      if (i==0) {
        now = now - cost[cost.length-1]
      } else {
        now = now - cost[i-1]
      }
      if (now >= 0 && flag) {
          return i
      }
  }
  return -1
};