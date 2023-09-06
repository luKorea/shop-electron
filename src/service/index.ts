import HttpRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

// 使用实例完整
const http = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      return config
    },
    requestInterceptorCatch(error) {
      return error
    },
    responseInterceptor(res) {
      console.log(res)
      return res
    },
    responseInterceptorCatch(error) {
      return error
    }
  },
  showLoading: true
})

export default http
