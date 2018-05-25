import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
    fetchLoading: false,
    firstPage: null,
    user:{},
    // 
    islogin:false,
    // 当前选中频道
    channelindex:-1,
    // 当前频道名称
    channelname:'',
    // 收藏的新闻
    collectionnews:[],
    // 当前可用频道
    currentchannels:[],
    // 移除的频道
    deletedchannels:[]
}

export default new Vuex.Store({
    state,
    actions
})