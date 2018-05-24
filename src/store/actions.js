import {
  getNewsByChannel
} from '../service/index'

export default {
    // 调用接口方法
  async getNewsByChannel({
    commit
  }, params) {
    let res = await getNewsByChannel(params)
    return res
  }
}
