import fetch from '../common/fetch'

// 获取分类新闻
export const getNewsByChannel = (params) => fetch({
  'url': '/news/get',
  'method': 'post',
  'data': params
})
// 获取频道
export const getChannels = (params) => fetch({
  'url': '/news/channel',
  'method': 'post',
  'data': params
})
// 搜索新闻
export const searchNews = (params) => fetch({
  'url': '/news/search',
  'method': 'post',
  'data': params
})
