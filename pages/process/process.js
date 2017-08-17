//list.js
//获取应用实例
Page({
  data: {
    bar: {
      class1: 'active',
      class2: '',
      class3: ''
    },
    box: {
      show1: true,
      show2: false,
      show3: false
    },
    jqueryData: [{
      src: '../image/css.jpg',
      title: 'css3+html5+javascript',
      money: '99.00'
    }]
  },
  barName: function (e) {
    var el = e.target.id
    console.log('el', el)
    if (el == "bar1") {

      this.setData({
        bar: {
          class1: 'active',
          class2: '',
          class3: ''
        },
        box: {
          show1: true,
          show2: false,
          show3: false
        }
      })

    } else if (el == "bar2") {
      this.setData({
        bar: {
          class1: '',
          class2: 'active',
          class3: ''
        },
        box: {
          show1: false,
          show2: true,
          show3: false
        }
      })
    } else if (el == "bar3") {
      this.setData({
        bar: {
          class1: '',
          class2: '',
          class3: 'active'
        },
        box: {
          show1: false,
          show2: false,
          show3: true
        }
      })
    }
  },
  onLoad: function () {
    this.getdata();

  },
getdata: function () {
    wx.request({
      url: 'https://wx.dufe.edu.cn/1.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
