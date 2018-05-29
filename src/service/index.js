import fetch from '../common/fetch'

// 获取分类新闻
export const getNewsByChannel = (params) => fetch({
  'url': 'api/news/get?' + params +'&appkey=32156feecb44b2ec',
  'method': 'post',
})
// 获取频道
export const getChannels = () => fetch({
  'url': 'api/news/channel?appkey=32156feecb44b2ec',
  'method': 'post',
})
// 搜索新闻
export const searchNews = (params) => fetch({
  'url': 'api/news/search?' + params + '&appkey=32156feecb44b2ec',
  'method': 'post',
})
