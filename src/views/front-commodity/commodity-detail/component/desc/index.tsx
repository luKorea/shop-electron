import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CommodityDescWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const CommodityDescComponent: FC<IProps> = () => {
  return <CommodityDescWrapper>CommodityDescComponent</CommodityDescWrapper>
}

export default memo(CommodityDescComponent)
