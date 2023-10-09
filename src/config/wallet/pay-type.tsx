import IconAlipay from '@/assets/svg/icon-alipay'
import IconApple from '@/assets/svg/icon-apple'
import IconCreditCard from '@/assets/svg/icon-credit-card'
import IconWallet from '@/assets/svg/icon-wallet'
import IconWechat from '@/assets/svg/icon-wechat'
import { formatMoney } from '@/utils/format'
import { createUniqueString } from '@/utils/util'
import React from 'react'
import { ReactNode } from 'react'

export type ITPayType = 'apple' | 'alipay' | 'wechat' | 'wallet' | 'creditCard'

export interface IPayTypeItem {
  icon: ReactNode
  title: string
  id: string
  balance: string
  type: ITPayType
}

const iconStyle: { width: number; height: number } = {
  width: 26,
  height: 26
}

export const payTypeList: IPayTypeItem[] = [
  {
    icon: <IconApple {...iconStyle} />,
    title: '苹果',
    id: createUniqueString(),
    balance: formatMoney({ money: 3000534534500 }),
    type: 'apple'
  },
  {
    icon: <IconAlipay {...iconStyle} />,
    title: '支付宝',
    id: createUniqueString(),
    balance: formatMoney({ money: 45343 }),
    type: 'alipay'
  },
  {
    icon: <IconWechat {...iconStyle} />,
    title: '微信',
    id: createUniqueString(),
    balance: formatMoney({ money: 76767676 }),
    type: 'wechat'
  },
  {
    icon: <IconWallet {...iconStyle} />,
    title: '电子钱包',
    id: createUniqueString(),
    balance: formatMoney({ money: 9898989 }),
    type: 'wallet'
  },
  {
    icon: <IconCreditCard {...iconStyle} />,
    title: '信用卡',
    id: createUniqueString(),
    balance: formatMoney({ money: 99999 }),
    type: 'creditCard'
  }
]
