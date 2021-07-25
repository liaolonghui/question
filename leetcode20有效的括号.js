var isValid = function(s) {
  let obj = {
      '(': -3,
      '[': -2,
      '{': -1,
      '}': 1,
      ']': 2,
      ')': 3
  }

  let stack = []

  for (let i=0; i<s.length; i++) {
      if (stack.includes(-obj[s[i]])) {
          // 存在
          if (-obj[s[i]] !== stack.pop()) {
              return false
          }
      } else {
          stack.push(obj[s[i]])
      }
  }

  if (stack.length) {
      return false
  } else {
      return true
  }
};


console.log(isValid('()'))