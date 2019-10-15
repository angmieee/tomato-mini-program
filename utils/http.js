let app = getApp()
const { t_app_id, t_app_secret, host } = app.globalData
let request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      data,
      header: {
        Authorization: `Bearer ${wx.getStorageSync('X-token')}`,
        't-app-id': t_app_id,
        't-app-secret': t_app_secret
      },
      method,
      dataType: 'json',
      responseType: 'text',
      success(res) {
        console.log(res)
        if (res.statusCode >= 400) {
          reject(res)
        } else {
          resolve(res)
        }
        wx.setStorageSync('X-token', res.header['X-token'])
      },
      fail(res) {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        })
        reject(res)
      },
      complete(res) { },
    })
  })
}
let http = {
  get: (url) => {
    return request('get', url)
  },
  delete: (url, data) => {
    return request('delete', url, data)
  },
  put: (url, data) => {
    return request('put', url, data)
  },
  post: (url, data) => {
    return request('post', url, data)
  }
}
module.exports = {
  http
}