import type { TKeyOfValue } from '@/types/constant'
import dayjs from 'dayjs'
import { useLocation } from 'react-router-dom'
import { localCache } from './cache'
import { TOKEN } from '@/config/constant'

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
export const checkLogin = () => !!localCache.getCache(TOKEN)

// 生成唯一字符串
export function createUniqueString(): string {
  const timestamp = String(Number(new Date()))
  const randomNum = String((1 + Math.random()) * 65536)
  return Number(randomNum + timestamp).toString(32)
}

export const randomHex = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}
export const randomNUmber = (m: number, n: number) => {
  return Math.floor(Math.random() * (m - n + 1)) + n
}

export const styleStrToObject = (styleStr: string) => {
  const obj: any = {}
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (_: any, g: string) {
      return g.toUpperCase()
    })
    .replace(/;\s?$/g, '')
    .split(/:|;/g)
  for (let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '')
  }

  return obj
}

export const splitBankNumber = (cardNumber: string): string => {
  return cardNumber.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

export const getNowTimeText = () => {
  const time = +dayjs().format('HH')
  if (time >= 0 && time <= 11) {
    return '早上好'
  } else if (time >= 11 && time <= 13) {
    return '中午好'
  } else if (time >= 13 && time <= 18) {
    return '下午好'
  } else if (time >= 18 && time <= 24) {
    return '晚上好'
  }
}
