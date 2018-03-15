Page({
data:{
  title:'',
  movie:{}
},
onLoad(params){
  const apiUrl = 'http://t.yushu.im/v2/movie/subject/' + params.id
  const _this = this
  wx.request({
    url: apiUrl,
    data: {},
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
     _this.setData({movie:res.data,title:res.data.title})
    }
  })

},
 onReady () {
  wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
}

















})