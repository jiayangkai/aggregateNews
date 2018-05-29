import {
  getNewsByChannel,
  getChannels,
  searchNews
} from '../service/index.js'
import {
  GET_CHANNEL,
  FETCH_LOADING,
  GET_CHANNELNEWS,
  SET_CHNNELINDEX,
  SET_CHNNELNAME
} from './mutation_types.js'


export default {
  // 获取频道新闻
  async getNewsByChannel({
    commit,
    state
  }, params) {
    let res = await getNewsByChannel(params)
    if(res.data.status=='0'){
      commit(GET_CHANNELNEWS,res)
    }
    return res
  },
  // 获取频道数组
  async getchannel({
    commit,
    state
  }, params) {
    let res = await getChannels(params)
    if(res.data.status=='0'){
      commit(GET_CHANNEL,res.data.result)
      commit(SET_CHNNELNAME,res.data.result[0])
      commit(SET_CHNNELINDEX,0)
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
  FetchLoading({
    commit
  }, params) {
    commit(FETCH_LOADING, params)
  },

}
