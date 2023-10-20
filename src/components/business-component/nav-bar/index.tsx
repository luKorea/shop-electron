import React, { memo } from 'react'
import type { CSSProperties, FC, ReactNode } from 'react'
import { NabBarWrapper } from './styled'

import { IconArrowLeft } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

type TNode = () => ReactNode
interface IProps {
  children?: ReactNode
  showLeft?: boolean
  renderLeft?: TNode
  renderCenter?: TNode
  renderRight?: TNode
  isSticky?: boolean
}
const NabBar: FC<IProps> = (props) => {
  const {
    renderLeft,
    renderCenter,
    renderRight,
    showLeft = true,
    isSticky = true
  } = props
  const nav = useNavigate()
  function goBack() {
    nav(-1)
  }

  const style: CSSProperties = isSticky
    ? {
        position: 'sticky',
        top: 0,
        zIndex: 99
      }
    : {}

  function getDefaultRenderLeft() {
    if (renderLeft) return renderLeft()
    return <IconArrowLeft className="back-icon" onClick={goBack} />
  }
  return (
    <NabBarWrapper style={style}>
      {showLeft && <div className="left">{getDefaultRenderLeft()}</div>}
      <div className="center">{renderCenter && renderCenter()}</div>
      <div className="right">{renderRight && renderRight()}</div>
    </NabBarWrapper>
  )
}

export default memo(NabBar)
