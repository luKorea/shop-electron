import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { BackTop } from '@arco-design/web-react'
import { IconCaretUp } from '@arco-design/web-react/icon'
import { BackTopWrapper } from './styled'

interface IProps {
  children?: ReactNode
  customId: string
  visibleHeight?: number
  style?: {
    [key: string]: string
  }
}

const FrontBackTop: FC<IProps> = (props) => {
  const {
    customId,
    visibleHeight = 30,
    style = { position: 'absolute' }
  } = props
  return (
    <BackTopWrapper>
      <BackTop
        visibleHeight={visibleHeight}
        style={style}
        target={() => document.getElementById(customId) as HTMLElement}
      />
    </BackTopWrapper>
  )
}

export default memo(FrontBackTop)
