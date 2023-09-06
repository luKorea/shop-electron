import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { setLocalDataAction } from '@/store/module/user'
import { useAppDispatch } from './hooks'
function App() {
  // 用户登录后, 刷新页面将数据初始化到 store 中
  const dispatch = useAppDispatch()
  useEffect(() => {
    function useInitStore() {
      dispatch(setLocalDataAction())
    }
    useInitStore()
  }, [])
  return <div className="App">{useRoutes(routes)}</div>
}

export default App
