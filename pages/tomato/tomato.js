// pages/tomato/tomato.js
Page({

  data: {
    time: 1500,
    timer: '',
    timerId: '',
    stopButton: false,
    againButton: false
  },

  changeTime(){
    let m = Math.floor(this.data.time/60)
    let s = Math.floor(this.data.time%60)
    if(s === 0){
      s = '00'
    }
    if((s+'').length === 1){
      s = '0' + s
    }
    if ((m + '').length === 1) {
      m = '0' + m
    }
    this.setData({ timer: `${m}:${s}` })
  },

  clearTimer(){
    clearInterval(this.data.timerId)
    this.setData({ stopButton: false })
  },

  startTimer(){
    this.setData({ stopButton: true })
    this.data.timerId = setInterval(() => {
      if (this.data.time === 0) {
        clearInterval(this.data.timerId)
        this.setData({ againButton:true} )
        return
      }
      this.data.time = this.data.time - 1
      this.changeTime()
    }, 1000)
  },

  startAgain(){
    this.setData( {
      time: 1500,
      stopButton: false,
      againButton: false
    } )
    this.changeTime()
  },

  goBack(){
    wx.navigateBack({
      
    })
  },

  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {
    this.changeTime() //进入页面开始就渲染
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