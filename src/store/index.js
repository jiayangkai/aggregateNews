import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  fetchLoading: false,
  showCollectionImg: true,
  user: {},
  // 
  islogin: false,
  // 当前选中频道
  channelIndex: 0,
  // 当前频道名称
  channelName: '',
  channelNew: {},
  channelArr: [],
  channelNews: [],
  // 收藏的新闻
  collectionNews: [],
  // 移除的频道
  deletedChannels: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
