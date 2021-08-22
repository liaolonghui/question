var reverse = function(x) {
  let str = x.toString()
  if (str[0] == '-') {
      str = Number('-' + str.slice(1, str.length).split('').reverse().join(''))
  } else {
      str = Number(str.split('').reverse().join(''))
  }
  if (str<Math.pow(-2,31) || str>Math.pow(2,31)-1) return 0
  return str
};

// Math.pow()