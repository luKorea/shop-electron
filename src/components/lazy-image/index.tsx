import { Image } from '@arco-design/web-react'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LazyLoadImageWrapper } from './styled'

interface IProps {
  children?: ReactNode
  url: string
  width: number | string
  height: number | string
  extraClassName: string
  threshold: number
}

const LazyImage: FC<Partial<IProps>> = (props) => {
  const { url, width = 40, height = 40, threshold = 1, extraClassName } = props
  return (
    <LazyLoadImageWrapper>
      <Image
        className={extraClassName}
        width={width}
        height={height}
        src={url}
        lazyload={{ threshold }}
        loader={true}
        loaderClassName={'image-demo-loader-animate'}
      />
    </LazyLoadImageWrapper>
  )
}

export default memo(LazyImage)
