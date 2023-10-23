import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CommodityBannerWrapper } from './styled'
import { Carousel } from '@arco-design/web-react'
import { IconArrowLeft, IconLeft } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  list: any[]
}

const CommodityBannerComponent: FC<IProps> = (props) => {
  const { list = [] } = props
  const nav = useNavigate()
  return (
    <CommodityBannerWrapper>
      <IconArrowLeft className="back-icon" onClick={() => nav(-1)} />
      <Carousel
        indicatorType="line"
        indicatorPosition="bottom"
        showArrow="never"
        style={{ width: '100%', height: '100%' }}
        animation="fade"
        autoPlay
        className={'carousel-wrap'}
      >
        {list.map((src, index) => (
          <img src={src} key={index} className="item-img" />
        ))}
      </Carousel>
    </CommodityBannerWrapper>
  )
}

export default memo(CommodityBannerComponent)
