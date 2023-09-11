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

/**
 *
 * @param {IParams.money} money 金额
 * @param {*} decimals 小数后几位
 * @param {*} isCNY 是否按国家格式化金钱
 * @param {*} local 国家
 * @returns
 */

interface IParams {
  money: string | number
  decimals: number
  isCNY: boolean
  local: string
}

interface ILocal {
  [key: string]: any
}

interface ILocalStyle {
  [key: string]: ILocal
}

export const formatMoney = ({
  money,
  decimals = 2,
  isCNY = false,
  local = 'zh-CN'
}: IParams) => {
  const localStyle: ILocalStyle = {
    'zh-CN': {
      style: 'currency', // 货币形式
      currency: 'CNY', // "CNY"是人民币
      currencyDisplay: 'symbol' // 默认“symbol”，中文中代表“¥”符号
    }
  }
  const config: ILocal = {
    maximumFractionDigits: decimals // 使用的小数位数的最大数目。可能的值是从 0 到 20
  }
  if (isCNY) {
    for (const key in localStyle[local]) {
      config[key] = localStyle[local][key]
    }
  }
  return new Intl.NumberFormat(local, config).format(+money)
}
