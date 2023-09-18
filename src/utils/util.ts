import type { TKeyOfValue } from '@/types/constant'
import { useLocation } from 'react-router-dom'

/**
 * @description 后续完善对 symbol 类型的检出
 * @param {TKeyOfValue} data
 * @param {string} key
 * @returns {string | undefined}
 */
export const getUniqueKey = (
  data: TKeyOfValue,
  key: string
): string | undefined => {
  return Object.keys(data).filter((item) => item === key)[0]
}

// 获取URL 地址参数
export const useGetLocationName = () => {
  const { pathname, search, hash, state, key } = useLocation()
  return {
    pathname,
    search,
    hash,
    key,
    state
  }
}

// 校验用户是否登录
export const checkLogin = () => !!localStorage.getItem('token')
