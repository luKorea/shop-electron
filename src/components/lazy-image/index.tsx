import { Image, Skeleton } from '@arco-design/web-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  url: string
  width: number
  height: number
  className: string
  threshold: number
}

const LazyImage: FC<Partial<IProps>> = (props) => {
  const { url, width = 40, height = 40, threshold = 1, className } = props
  return (
    <Image
      className={className}
      width={width}
      height={height}
      src={url}
      lazyload={{ threshold }}
      loader={<Skeleton image={{ shape: 'circle' }} text={false} animation />}
    />
  )
}

export default memo(LazyImage)
