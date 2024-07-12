import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Index: FC<IProps> = () => {
  return <div>Index</div>
}

export default memo(Index)
