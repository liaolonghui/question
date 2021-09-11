Promise.resolve(new Promise((resolve, reject) => {
  reject(555)
})).then((result) => {
  console.log('成功' + result)
}).catch((err) => {
  console.error('失败' + err)
})









// directive
// 指令 指示