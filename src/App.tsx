import React, { useEffect, useRef, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { setLocalDataAction } from '@/store/module/user'
import { useAppDispatch, useTitle } from './hooks'
import setting from '@/settings.json'
import TabBar from './components/tab-bar'
import { navbarList } from './config/tab-bar'
import { AppWrapper } from './styled'
import { useGetLocationName } from './utils/util'
function App() {
  useTitle(setting.title)
  // 用户登录后, 刷新页面将数据初始化到 store 中
  const dispatch = useAppDispatch()
  const { pathname } = useGetLocationName()
  const [showTabBar, setShowTabBar] = useState(true)
  const pageList = useRef<string[]>(navbarList.map((item) => item.url))
  useEffect(() => {
    function useInitStore() {
      dispatch(setLocalDataAction())
    }
    useInitStore()
  }, [])
  useEffect(() => {
    const isShow = !!pageList.current.find((item) => pathname === item)
    setShowTabBar(isShow)
  }, [pathname])

  // 动态计算页面高度
  function getPageHeight() {
    if (!showTabBar) {
      return {
        height: 'calc(100vh)'
      }
    } else {
      return {
        height: 'calc(100vh - var(--tabbar-height))'
      }
    }
  }
  return (
    <AppWrapper style={getPageHeight()}>
      {useRoutes(routes)}
      {showTabBar && <TabBar />}
    </AppWrapper>
  )
}

export default App
