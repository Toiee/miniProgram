Page({
  data: {
    name: 'Mfxx',
    age: 18,
    students: [
      {id: 110, name: 'copy', age: 30},
      {id: 100, name: 'jems1', age: 34},
      {id: 125, name: 'why2', age: 35},
      {id: 145, name: 'codin2', age: 38}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1. 错误做法
    // this.data.counter += 1
    // console.log(this.data.counter)
    // 2. this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter-1
    })
  }
})

// 编程范式
// 1. 命令式编程
// 原生操作dom, jquery 获取监听设置操作....
// 2. 声明式编程: 框架 vue react 声明式编程

// MVVM 架构让我们从命令式编程转移到声明式编程
// VM - ViewModel
// 1. Data Bindings  绑定model层的数据到View
// 2. DOM Listeners 监听DOM