var app = getApp() 
//index.js
//获取应用实例
//var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    swiper: {
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      circular: true,
      imgUrls: [
        '../image/1.jpg',
        '../image/2.jpg',
        '../image/3.jpg',
        '../image/4.jpg'
      ],
    },
    mes: {
      autoplay: true,
      interval: '5000',
      duration: '300',
      circular: true,
      vertical: true,
      text: [
        '用户“小飞飞”20分钟前拍下psd转html',
        '用户“阿里贝贝”22分钟前拍下psd转vue',
        '用户“杜鹏”25分钟前拍下小游戏',
        '用户“xiaoqian”28分钟前拍下psd转html'
      ],
    },
    icon: [
      {
        src: '../image/process1.png',
        text: '制作流程'
      }, {
        src: '../image/case1.png',
        text: '案例展示'
      }, {
        src: '../image/Code1.png',
        text: '下单定制'
      }, {
        src: '../image/user1.png',
        text: '关于我们'
      }
    ],
    goods: [{
      src: '../image/timg1.jpg',
      title: 'psd转html'
    },
    {
      src: '../image/timg2.jpg',
      title: 'psd转vue'
    },
    {
      src: '../image/timg3.jpg',
      title: 'psd转angularjs'
    }, {
      src: '../image/timg3.jpg',
      title: 'Jquery组件特效'
    },
    {
      src: '../image/timg2.jpg',
      title: 'layabox 游戏开发'
    },
    {
      src: '../image/timg3.jpg',
      title: '微信小程序开发'
    }]
  },
  tapName: function (e) {
    console.log(e, e.currentTarget.id)

  }
})
