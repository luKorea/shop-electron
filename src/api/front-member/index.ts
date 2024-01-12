import http from '@/service'
import { ILoginParams } from '@/types/module/user'

/**
 * 发起用户登录请求的API
 * @param {ILoginParams} data - 登录所需的数据对象
 * @returns {Promise<any>} - 返回HTTP POST请求的结果
 */
export const loginApi = (data: ILoginParams) => {
  return http.post({
    url: '/auth/login',
    data
  })
}

/**
 * 发起用户注册请求的API
 * @param {any} data - 注册所需的数据对象
 * @returns {Promise<any>} - 返回HTTP POST请求的结果
 */
export const registerApi = (data: any) => {
  return http.post({
    url: '/auth/register',
    data
  })
}

/**
 * 获取验证码
 * @param {string} phone - 手机号码
 * @returns {Promise<any>} - 发送验证码的HTTP请求结果
 */
export const getVerificationCode = (phone: string) => {
  return http.post({
    url: '/auth/verification-code',
    data: {
      phone
    }
  })
}
