// pages/lb/lb.js
Page({
  data: {
    // text:"这是一个页面"
    result: []
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.tian0o0.top/api/now',
      method: 'GET',
      success: function (res) {
        that.setData({
          result: res.data.data
        })
      }

    })
  }


})
