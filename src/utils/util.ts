import type { TKeyOfValue } from '@/types/constant'

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
