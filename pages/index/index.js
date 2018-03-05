//index.js
/* 一个小程序由四个文件组成：js -- 页面逻辑；wxml -- 页面结构；wxss -- 页面样式表；json -- 页面配置；
描述页面的四个文件必须具有相同的路径和文件名。 */

//获取应用实例
const app = getApp()


Page({
  data: {//页面的初始数据
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {//生命周期函数，监听页面加载
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(){
    //生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    //生命周期函数--监听页面显示
  },
  onHide:function(){
    //生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    //生命周期函数--监听页面卸载
  },
  onPullDownRefresh:function(){
    //页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom:function(){
    //页面上拉触底事件的处理函数
  },
  onShareAppMessage:function(){
    //用户点击右上角转发
    return {title:"自定义转发内容"};
  },
  onPageScroll:function(){
    //页面滚动触发事件的处理函数
  },
  onTabItemTap:function(){
    //当前是 tab 页时，点击 tab 时触发
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
