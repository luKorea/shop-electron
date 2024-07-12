import { ReactNode } from 'react'
import {
  IconFaceBookCircleFill,
  IconGoogleCircleFill,
  IconLarkColor,
  IconQqCircleFill,
  IconTiktokColor,
  IconTwitterCircleFill,
  IconWeiboCircleFill,
  IconXiguaColor
} from '@arco-design/web-react/icon'

export type TLoginType =
  | 'QQ'
  | 'Google'
  | 'Weibo'
  | 'Facebook'
  | 'Twitter'
  | 'Lark'
  | 'Tiktok'
  | 'Xigua'

export interface ILoginType {
  icon: ReactNode
  url?: string
  type: TLoginType
  title?: string
}

export const typeList: ILoginType[] = [
  { icon: <IconLarkColor />, type: 'Lark' },
  { icon: <IconTiktokColor />, type: 'Tiktok' },
  { icon: <IconXiguaColor />, type: 'Xigua' }
]

export const contactUsList: ILoginType[] = [
  { icon: <IconFaceBookCircleFill />, type: 'Facebook' },
  { icon: <IconGoogleCircleFill />, type: 'Google' },
  { icon: <IconQqCircleFill />, type: 'QQ' },
  { icon: <IconTwitterCircleFill />, type: 'Twitter' },
  { icon: <IconWeiboCircleFill />, type: 'Weibo' }
]
