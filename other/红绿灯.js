// 红3s 黄1s 绿2s

function light() {
  console.log('红')
  setTimeout(() => {
    console.log('黄')
    setTimeout(() => {
      console.log('绿')
      setTimeout(() => {
        light()
      }, 2000)
    }, 1000)
  }, 3000)
}

light()