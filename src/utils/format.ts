import dayjs from 'dayjs'

// 扩展UTC
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

/**
 *
 * @param utcString utc时间
 * @param format  格式化类型
 * @returns
 */
export function formatUTC(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
