import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TabBarWrapper } from './styled'

import { IconArrowLeft } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

type TNode = () => ReactNode
interface IProps {
  children?: ReactNode
  renderLeft?: TNode
  renderCenter?: TNode
  renderRight?: TNode
}

const TabBar: FC<IProps> = (props) => {
  const { renderLeft, renderCenter, renderRight } = props
  const nav = useNavigate()
  function goBack() {
    nav(-1)
  }

  function getDefaultRenderLeft() {
    if (renderLeft) return renderLeft()
    return (
      <div className="back-icon" onClick={goBack}>
        <IconArrowLeft />
      </div>
    )
  }

  return (
    <TabBarWrapper>
      <div className="left">{getDefaultRenderLeft()}</div>
      <div className="center">{renderCenter && renderCenter()}</div>
      <div className="right">{renderRight && renderRight()}</div>
    </TabBarWrapper>
  )
}

export default memo(TabBar)
