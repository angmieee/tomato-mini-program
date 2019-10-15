let { http } = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: {
      current: 1
    },
    todos: [],
    tomatoes: []
  },

  onSwiperChange(event) {
    this.setData({
      'swiper.current': event.detail.current
    })
  },
  onTomatoTap() {
    this.setData({
      'swiper.current': 0
    })
  },
  onTaskTap() {
    this.setData({
      'swiper.current': 1
    })
  },
  getFormatted(date) {
    let hour = date.getHours().toString()
    let minutes = date.getMinutes().toString()
    if (!hour[1]) {
      hour = '0' + hour
    }
    if (!minutes[1]) {
      minutes = '0' + minutes
    }
    let result = hour + ':' + minutes
    return result
  },
  updateData() {
    http.get('/todos?is_group=yes').then((res) => {
      let todos = res.data.resources || res.data.resource
      res.data.formatTime = []
      for (let key in todos) {
        todos[key].forEach((todo) => {
          let updated_at = new Date(todo.updated_at)
          todo.formatTime = this.getFormatted(new Date(updated_at))
          return todo
        })
      }
      this.setData({
        todos: res.data.resources || res.data.resource
      })
    })
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
    this.updateData()
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