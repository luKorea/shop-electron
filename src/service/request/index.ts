import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HttpRequestConfig } from './types'

class HttpRequest {
  // 声明成员
  instance: AxiosInstance

  constructor(config: HttpRequestConfig) {
    // 创建实例
    this.instance = axios.create(config)

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    // 全局响应栏拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
    // 单独请求拦截器
    this.instance.interceptors.request.use(
      (config.interceptors as any)?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    // 单独响应拦截器
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  // 将config类型设置为扩展类型
  request<T = any>(config: HttpRequestConfig<T>) {
    // 处理单个请求成功拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 处理单个响应成功拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err)
          }
          reject(err)
        })
    })
  }

  // 扩展所有请求
  get<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }
  delete<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }
  head<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'HEAD'
    })
  }
  options<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'OPTIONS'
    })
  }
  put<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'PUT'
    })
  }
  patch<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
  purge<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'PURGE'
    })
  }
  link<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'LINK'
    })
  }
  unlink<T = any>(config: HttpRequestConfig<T>) {
    return this.request<T>({
      ...config,
      method: 'UNLINK'
    })
  }
}

export default HttpRequest
