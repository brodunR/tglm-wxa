// pages/find/find.js

var item = {
  cover: 'icons/cover.png',
  title: 'MALELEO苹果6背夹充电宝超薄iPhone6s专用8电池plus便携式',
  currentPrice: 89.90, 
  saleCountOfMonth: 4.84,
  discountPrice: 29.90,
  ticketPrice: 60,
  ticketPrice: 60,
  ticketSurplus: 47838,
  rebate: 9.06
};
var liveItems = [];
for(var i=0;i<20;i++){
  liveItems.push(item);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    liveTabs: [
      {text: '女装'}, 
      { text: '家居家装' }, 
      { text: '数码家电' }, 
      { text: '母婴' }, 
      { text: '食品' }, 
      { text: '鞋包配饰' }, 
      { text: '美妆个护' }, 
      { text: '男装' }, 
      { text: '内衣' },
      { text: '运动户外' }
    ],
    selectedLiveTab: '女装',
    liveItems: liveItems,
  },
  selectLiveTab: function (event){
    this.setData({
      selectedLiveTab: event.currentTarget.dataset.tagText
    });
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