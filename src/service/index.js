import fetch from '../common/fetch'

// 获取分类新闻
export const getNewsByChannel = (params) => fetch({
  'url': '/news/get',
  'method': 'post',
  'data': params
})
