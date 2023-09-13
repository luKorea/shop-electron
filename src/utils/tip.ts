import { Message } from '@arco-design/web-react'

import { TMessageType } from '@/types/constant'
import type { MessageProps } from '@arco-design/web-react'

/**
 *
 * @param {TMessageType} type
 * @param {MessageProps | string} config
 */
export function useMessageTip(
  type: TMessageType,
  config: MessageProps | string
) {
  Message?.[type]?.(config)
}
