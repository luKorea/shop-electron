import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const graphValidateCodeComponent: FC<IProps> = () => {
  return <div>graphValidateCodeComponent</div>
}

export default memo(graphValidateCodeComponent)
