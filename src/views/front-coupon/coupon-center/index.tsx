import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Index: FC<IProps> = () => {
  return <div>1123333333333333</div>
}

export default memo(Index)
