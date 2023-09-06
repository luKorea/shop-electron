import { throttle } from 'underscore'
import { useEffect, useState } from 'react'

export function useScroll(elRef: any) {
  let el = window as any
  const [isReachBottom, setIsReachBottom] = useState(false)
  const [clientHeight, setClientHeight] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      setClientHeight(document.documentElement.clientHeight)
      setScrollTop(document.documentElement.scrollTop)
      setScrollHeight(document.documentElement.scrollHeight)
    } else {
      setClientHeight(el.clientHeight)
      setScrollTop(el.scrollTop)
      setScrollHeight(el.scrollHeight)
    }
    // 参数偏差0.5
    if (Math.round(clientHeight + scrollTop) >= scrollHeight) {
      console.log('滚动到底部了')
      setIsReachBottom(true)
    }
  }, 100)

  useEffect(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
    return () => {
      el.removeEventListener('scroll', scrollListenerHandler)
    }
  }, [])
  return {
    isReachBottom,
    clientHeight,
    scrollTop,
    scrollHeight
  }
}
