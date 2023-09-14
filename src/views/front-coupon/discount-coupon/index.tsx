import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Index: FC<IProps> = () => {
  return <div>2</div>
}

export default memo(Index)
