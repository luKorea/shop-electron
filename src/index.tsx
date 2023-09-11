import React, { Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// arco-ui
import { ConfigProvider } from '@arco-design/web-react'
import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import enUS from '@arco-design/web-react/es/locale/en-US'

// 自定义 hooks
import { useChangeTheme, useStorage } from './hooks'
import { GlobalContext } from './context/use-context'
import store from './store'

// 样式
import 'normalize.css'
import './assets/css/common.less'

import App from './App'

import { ELocal, ETheme } from './types'

function FrontNode() {
  const [lang, setLang] = useStorage('arco-lang', ELocal['zh-CN'])
  const [theme, setTheme] = useStorage('arco-theme', ETheme.light)
  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme
  }

  // 暂时只配置两种语言
  function getArcoLocale() {
    return lang === ELocal['en-US'] ? enUS : zhCN
  }

  useEffect(() => {
    useChangeTheme(theme as string)
  }, [theme])

  return (
    <React.StrictMode>
      {/* UI 主题配置 */}
      <ConfigProvider locale={getArcoLocale()}>
        {/* react-redux */}
        <Provider store={store}>
          {/* context */}
          <GlobalContext.Provider value={contextValue}>
            {/* react-router */}
            <Suspense fallback="">
              <HashRouter>
                <App />
              </HashRouter>
            </Suspense>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<FrontNode />)
