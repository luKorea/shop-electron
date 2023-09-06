// types.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 扩展 AxiosRequestConfig
interface HttpInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HttpRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HttpInterceptors<T>
  showLoading?: boolean
}
