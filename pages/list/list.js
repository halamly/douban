Page({
  data: {
    list: [],
    title: "loading"
  },
  onLoad(params) {
    const apiUrl = 'http://t.yushu.im/v2/movie/' + params.type
    const _this = this
    wx.request({
      url: apiUrl,
      data: {},
      method: 'GET', 
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        _this.setData({ list: res.data.subjects,title:params.name})
      }
    })
  }
})
