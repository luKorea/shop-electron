import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NothingPageWrapper } from './styled'
import { imageUrl } from '@/config/image'
import { Typography } from '@arco-design/web-react'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
  image: string
  imageClass: string
  text: string
  textClass: string
  renderNode: () => ReactNode
}

const NothingPage: FC<Partial<IProps>> = (props) => {
  const {
    image = imageUrl.nothingDataImage,
    text = '暂无数据',
    renderNode,
    imageClass,
    textClass
  } = props
  return (
    <NothingPageWrapper>
      <img
        src={image}
        alt={text}
        className={classNames('nothing-img', { imageClass })}
      />
      <Typography.Text
        style={{ color: 'var(--second-color' }}
        className={classNames({ textClass })}
      >
        {text}
      </Typography.Text>
      {renderNode && renderNode()}
    </NothingPageWrapper>
  )
}

export default memo(NothingPage)
