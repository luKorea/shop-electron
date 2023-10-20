import HttpRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import { localCache } from '@/utils'
import { AUTHORIZATION, TOKEN } from '@/config/constant'

// 使用实例完整
const http = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache(TOKEN)
      if (token && config.headers) {
        config.headers[AUTHORIZATION] = token
      }
      return config
    },
    requestInterceptorCatch(error) {
      return Promise.reject(error)
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(error) {
      return Promise.reject(error)
    }
  },
  showLoading: true
})

export default http
