import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import routes from './router'
import { setLocalDataAction } from '@/store/module/user'
import { useAppDispatch, useTitle } from './hooks'
import setting from '@/settings.json'
import TabBar from './components/business-component/tab-bar'
import { navbarList } from './config/tab-bar'
import { AppWrapper } from './styled'
import { checkLogin, useGetLocationName } from './utils/util'
import { PAGE_MEMBER } from './router/constant'
import { REDIRECT_URL } from './config/constant'
import { useMessageTip } from './utils/tip'
function App() {
  useTitle(setting.title)
  // 用户登录后, 刷新页面将数据初始化到 store 中
  const dispatch = useAppDispatch()
  const { pathname } = useGetLocationName()
  const [showTabBar, setShowTabBar] = useState(true)
  const pageList = useRef<string[]>(navbarList.map((item) => item.url))
  const nav = useNavigate()
  function isGoLoginPage() {
    routes.find((item) => {
      if (pathname.includes(item?.path ?? '') && item.children?.length) {
        const selectItem = item.children.find((i) => i.path === pathname)
        if (selectItem?.isLogin) {
          if (!checkLogin()) {
            useMessageTip('warning', '登录信息已失效, 请重新登录')
            nav(`${PAGE_MEMBER}?${REDIRECT_URL}=${selectItem.path}`, {
              replace: true
            })
          }
        }
      }
    })
  }
  useEffect(() => {
    function useInitStore() {
      dispatch(setLocalDataAction())
    }
    useInitStore()
    isGoLoginPage()
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
