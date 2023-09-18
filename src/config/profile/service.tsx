import React from 'react'

import {
  PAGE_ADDRESS_LIST,
  PAGE_PROFILE_HELP_CENTER,
  PAGE_PROFILE_MESSAGE_MANAGEMENT,
  PAGE_PROFILE_PASSWORD_MANAGEMENT,
  PAGE_PROFILE_SECURITY_CENTER,
  PAGE_PROFILE_SHARE_FRIENDS,
  PAGE_WALLET_MY_WALLET
} from '@/router/constant'
import { ReactNode } from 'react'
import {
  IconCodeSandbox,
  IconExclamationCircle,
  IconLocation,
  IconLock,
  IconNotification,
  IconSafe,
  IconUserAdd
} from '@arco-design/web-react/icon'

export interface IServiceItem {
  title: string
  url: string
  isLogin: boolean
  icon: ReactNode
}
export const serviceList: IServiceItem[] = [
  {
    icon: <IconLocation className="icon-class" />,
    title: '地址管理',
    isLogin: true,
    url: PAGE_ADDRESS_LIST
  },
  {
    icon: <IconNotification className="icon-class" />,
    title: '消息',
    isLogin: true,
    url: PAGE_PROFILE_MESSAGE_MANAGEMENT
  },
  {
    icon: <IconCodeSandbox className="icon-class" />,
    title: '钱包',
    isLogin: true,
    url: PAGE_WALLET_MY_WALLET
  },
  {
    icon: <IconSafe className="icon-class" />,
    title: '安全',
    isLogin: true,
    url: PAGE_PROFILE_SECURITY_CENTER
  },
  {
    icon: <IconLock className="icon-class" />,
    title: '密码',
    isLogin: true,
    url: PAGE_PROFILE_PASSWORD_MANAGEMENT
  },
  {
    icon: <IconExclamationCircle className="icon-class" />,
    title: '帮助',
    isLogin: false,
    url: PAGE_PROFILE_HELP_CENTER
  },
  {
    icon: <IconUserAdd className="icon-class" />,
    title: '分享好友',
    isLogin: false,
    url: PAGE_PROFILE_SHARE_FRIENDS
  }
]
