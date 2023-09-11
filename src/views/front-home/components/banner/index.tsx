import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const HomeBanner: FC<IProps> = () => {
  return <BannerWrapper>HomeBanner</BannerWrapper>
}

export default memo(HomeBanner)
