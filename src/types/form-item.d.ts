import { ButtonProps, RulesProps } from '@arco-design/web-react'
import { ReactNode } from 'react'

export type TFormType =
  | 'input'
  | 'password'
  | 'confirm-password'
  | 'button'
  | 'verification-code'
  | 'date-picker'
  | 'select'
  | 'input-number'
  | 'graph-validate-code'
export type TSize = 'mini' | 'small' | 'default' | 'large'

interface IButtonType extends ButtonProps {
  text: string | number
}

interface ISelectItem {
  disabled?: boolean
  label: ReactNode | string
  value: string | number
  extra?: any
}
export interface IFormItem {
  btnType?: Partial<IButtonType>
  field: string
  label?: string
  type: TFormType
  placeholder?: string
  rules?: RulesProps[]
  size?: TSize
  allowClear?: boolean
  prefix?: string | ReactNode
  suffix?: string | ReactNode
  selectOptions?: ISelectItem[]
  dependencies?: string[]
  [key as string]?: unknown
}
