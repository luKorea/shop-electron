export type TKeyOfValue = Record<string, string>

// 消息提示类型
export type TMessageType =
  | 'info'
  | 'useMessage'
  | 'success'
  | 'warning'
  | 'error'
  | 'loading'
  | 'normal'
  | 'config'
  | 'clear'

export interface IVoidType {
  (): void
}
