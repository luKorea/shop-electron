import { createUniqueString } from '@/utils/util'

export interface IMessageManagementItem {
  title: string
  checked?: boolean
  id: string
  loading?: boolean
}

export const messageManagementList: IMessageManagementItem[] = [
  {
    title: '普通消息',
    checked: true,
    id: createUniqueString()
  },
  {
    title: '声音',
    checked: true,
    id: createUniqueString()
  },
  {
    title: '震动',
    checked: false,
    id: createUniqueString()
  },
  {
    title: '优惠活动',
    checked: true,
    id: createUniqueString()
  },
  {
    title: '支付提醒',
    checked: false,
    id: createUniqueString()
  },
  {
    title: '资金返回提醒',
    checked: false,
    id: createUniqueString()
  },
  {
    title: '自动更新',
    checked: true,
    id: createUniqueString()
  },
  {
    title: '新服务',
    checked: false,
    id: createUniqueString()
  },
  {
    title: '新提示',
    checked: false,
    id: createUniqueString()
  }
]
