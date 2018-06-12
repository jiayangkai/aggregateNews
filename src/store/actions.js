import {
  getNewsByChannel,
  getChannels,
  searchNews
} from '../service/index.js'
import {
  SET_CHANNEL,
  FETCH_LOADING,
  SET_CHANNELNEWS,
  SET_CHNNELINDEX,
  SET_CHNNELNAME,
  SET_COLLECTNEWS,
  SHOW_COLLECT_IMG
} from './mutation_types.js'


export default {
  // 获取频道新闻
  async getNewsByChannel({
    commit
  }, params) {
    let res = await getNewsByChannel(params)
    if (res.data.status == '0') {
      commit(SET_CHANNELNEWS, res)
    }
    return res
  },
  // 获取频道数组
  async getchannel({
    commit
  }, params) {
    let res = await getChannels(params)
    if (res.data.status == '0') {
      commit(SET_CHANNEL, res.data.result)
      commit(SET_CHNNELNAME, res.data.result[0])
      commit(SET_CHNNELINDEX, 0)
    }
    return res
  },
  // 搜索新闻
  async searchnews({
    commit
  }, params) {
    let res = await searchNews(params)
    return res
  },
  // 设置loading状态
  FetchLoading({
    commit
  }, params) {
    commit(FETCH_LOADING, params)
  },
  // 新闻收藏
  CollectNews({
    commit
  }, params) {
    commit(SET_COLLECTNEWS, params)
  },
  // 设置收藏按钮状态
  ShowCollectionImg({
    commit
  }, params) {
    commit(SHOW_COLLECT_IMG, params)
  }

}
