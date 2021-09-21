let str = '874 45dsa    sda  sada'

for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    str = str.slice(0,i) + str.slice(i+1, str.length)
    i--
  }
}

console.log(str)