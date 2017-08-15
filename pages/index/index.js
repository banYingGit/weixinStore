//index.js
//获取应用实例
//var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    header: {
      title: '首页',
      goBack: true
    },
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
      text: [
        '用户“小飞飞”20分钟前拍下psd转html',
        '用户“阿里贝贝”22分钟前拍下psd转vue',
        '用户“杜鹏”25分钟前拍下小游戏',
        '用户“xiaoqian”28分钟前拍下psd转html'
      ],
    },
    footer: {}
  }
})
