import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './styled'
import { Button } from '@arco-design/web-react'

interface IProps {
  children?: ReactNode
}

const HomeHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <Button type={'primary'}>测试主题色修改</Button>
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
