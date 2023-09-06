import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { FC, ReactNode, memo, useEffect, useState } from 'react'
import { useRef } from 'react'
import { ViewWrapper } from './styled'
interface IProps {
  children?: ReactNode
}

const ScrollView: FC<IProps> = (props) => {
  /** 定义内部的状态 */
  // 显示左边按钮
  const [showLeft, setShowLeft] = useState(false)
  // 显示右边按钮
  const [showRight, setShowRight] = useState(false)
  // 记录当前位置索引
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef<any>()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef<any>()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight: boolean) {
    // 获取到最新索引
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    // 拿到最新索引元素
    const newEl = scrollContentRef.current.children[newIndex]
    // 拿到距离左边的距离
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    // 记录最新索引
    setPosIndex(newIndex)
    // 是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
}

export default memo(ScrollView)
