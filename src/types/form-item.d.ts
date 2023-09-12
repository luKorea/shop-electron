import { ReactNode } from 'react'

export type TFormType = 'input' | 'password' | 'button'

export type TSize = 'mini' | 'small' | 'default' | 'large'
export type TStatus = 'warning' | 'danger' | 'success' | 'default'
export type TButtonType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'dashed'
  | 'text'
  | 'outline'
export type TButtonShape = 'circle' | 'round' | 'square'

export interface IFormItem {
  field: string
  label: string
  type: TFormType
  placeholder?: string
  rules?: {
    [key: string]: unknown
  }[]
  size: TSize
  allowClear?: boolean
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  btnType?: IButtonType
}

export interface IButtonType {
  text: string
  type: TButtonType
  status: TStatus
  shape: TButtonShape
}
