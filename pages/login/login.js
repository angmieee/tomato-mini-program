// pages/login/login.js
const { http } = require('../../utils/http.js')
const { app_id, app_secret } = getApp().globalData

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // login(e){
  //   let encrypted_data = e.detail.encryptedData
  //   let iv = e.detail.iv
  //   let code 

  //   wx.login({
  //     success(res) {
  //       code = res.code
  //       if (res.code) {
  //         //发起网络请求
  //         http.post('/sign_in/mini_program_user',{
  //           code,
  //           iv,
  //           encrypted_data,
  //           app_id,
  //           app_secret
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   })
  // },

  login(event) {
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    this.wxLogin(encrypted_data, iv)
  },
  wxLogin(encrypted_data, iv) {
    wx.login({
      success: (res) => this.loginMe(res.code, iv, encrypted_data)
    })
  },
  loginMe(code, iv, encrypted_data) {
    http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret,
    })
    .then(response => {
      this.saveMessage(response)
      wx.reLaunch({ url: "/pages/home/home" })
    })
  },
  saveMessage(response) {
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync('X-token', response.header["X-token"])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})