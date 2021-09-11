const obj = {
  say: () => {
    console.log(this)
  },
  run() {
    console.log(this)
  }
}

obj.say()

obj.run()