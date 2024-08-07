import {
  PAGE_ADDRESS_LIST,
  PAGE_PROFILE_HELP_CENTER,
  PAGE_PROFILE_MESSAGE_MANAGEMENT,
  PAGE_PROFILE_PASSWORD_MANAGEMENT,
  PAGE_PROFILE_SECURITY_CENTER,
  PAGE_PROFILE_SETTING,
  PAGE_PROFILE_SHARE_FRIENDS,
  PAGE_WALLET_ELECTRONIC_LIST
} from '@/router/constant'
import { ReactNode } from 'react'
import {
  IconCodeSandbox,
  IconExclamationCircle,
  IconLocation,
  IconLock,
  IconNotification,
  IconSafe,
  IconSettings,
  IconUserAdd
} from '@arco-design/web-react/icon'
import { createUniqueString } from '@/utils/util'

export interface IServiceItem {
  title?: string
  url?: string
  isLogin?: boolean
  icon?: ReactNode
  id?: string
}
export const serviceList: IServiceItem[] = [
  {
    icon: <IconLocation className="icon-class" />,
    title: '地址管理',
    isLogin: true,
    url: PAGE_ADDRESS_LIST,
    id: createUniqueString()
  },
  {
    icon: <IconNotification className="icon-class" />,
    title: '消息中心',
    isLogin: true,
    url: PAGE_PROFILE_MESSAGE_MANAGEMENT,
    id: createUniqueString()
  },
  {
    icon: <IconCodeSandbox className="icon-class" />,
    title: '钱包管理',
    isLogin: true,
    url: PAGE_WALLET_ELECTRONIC_LIST,
    id: createUniqueString()
  },
  {
    icon: <IconSafe className="icon-class" />,
    title: '安全中心',
    isLogin: true,
    url: PAGE_PROFILE_SECURITY_CENTER,
    id: createUniqueString()
  },
  {
    icon: <IconLock className="icon-class" />,
    title: '密码管理',
    isLogin: true,
    url: PAGE_PROFILE_PASSWORD_MANAGEMENT,
    id: createUniqueString()
  },
  {
    icon: <IconExclamationCircle className="icon-class" />,
    title: '帮助中心',
    isLogin: false,
    url: PAGE_PROFILE_HELP_CENTER,
    id: createUniqueString()
  },
  {
    icon: <IconUserAdd className="icon-class" />,
    title: '分享好友',
    isLogin: true,
    url: PAGE_PROFILE_SHARE_FRIENDS,
    id: createUniqueString()
  },
  {
    icon: <IconSettings className="icon-class" />,
    title: '设置中心',
    isLogin: true,
    url: PAGE_PROFILE_SETTING,
    id: createUniqueString()
  }
]
