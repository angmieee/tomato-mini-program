// pages/home/home.js
const { http } = require('../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    visibleConfirm: false
  },

  toTomato(){
    wx.navigateTo({
      url: '/pages/tomato/tomato',
    })
  },

  changeTaskStatus(e){
    let item = this.data.list[e.currentTarget.dataset.index]
    item.completed = true
    this.setData({ list: this.data.list })
    http.put(`/todos/${item.id}`,{
      completed: true
    })
  },

  getTaskContent(event) {
    let todo = { id: this.data.list.length + 1, description: event.detail, completed: false }
    this.data.list.push(todo)
    this.setData({ list: this.data.list })
    http.post('/todos',{
      description: `${event.detail}`
    })
  },

  showConfirm(){
    this.setData({visibleConfirm: true})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    http.get('/todos?completed=false').then(res=>{
      this.setData({ list: res.data.resources }) 
    })
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