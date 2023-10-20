import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HttpRequestConfig } from './types'
import { useMessageTip } from '@/utils/tip'
import { localCache } from '@/utils'
import { TOKEN } from '@/config/constant'
import { useAppDispatch } from '@/hooks'
import { logoutAction } from '@/store/module/user'

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
        return Promise.reject(err)
      }
    )
    // 全局响应栏拦截器
    this.instance.interceptors.response.use(
      (res) => {
        const { authorization } = res.headers
        if (authorization) {
          localCache.setCache(TOKEN, authorization)
        }
        return res.data
      },
      (err) => {
        const { response } = err
        if (response.data.code === 401) {
          const dispatch = useAppDispatch()
          dispatch(logoutAction())
        } else {
          useMessageTip('error', response?.data?.msg ?? '出错啦')
        }
        return Promise.reject(response ? response.data : err)
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
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<T>(async (resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
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
