import axios from 'axios'
import {apiUrl} from './env.js'

// axios 全局配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['content-type'] = 'application/json;charset=UTF-8'
axios.defaults.baseUrl = apiUrl
// CORS跨域
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('开始请求')
    console.log(`请求地址: ${config.url}`)
    return config
  }, function (error) {
    // Do something with request error
    console.log('请求失败')
    return Promise.reject(error)
  })
  axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    console.log('接收响应')
    return config
  }, function (error) {
    // Do something with request error
    console.log('响应出错')
    return Promise.reject(error)
  })

export default axios