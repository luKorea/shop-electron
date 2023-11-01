import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// arco-ui
import { ConfigProvider } from '@arco-design/web-react'

// 自定义 hooks
import { GlobalContext } from './src/context/use-context'
import store from './src/store'

// 样式
import 'normalize.css'
import './assets/css/common.less'

import App from './src/App'
import {
  useArcoLocale,
  useCommentConfig,
  useGlobalConfig
} from './src/config/arco-config'

function FrontNode() {
  return (
    <ConfigProvider
      locale={useArcoLocale()}
      componentConfig={useCommentConfig()}
    >
      {/* UI 主题配置 */}
      {/* react-redux */}
      <Provider store={store}>
        {/* context */}
        <GlobalContext.Provider value={useGlobalConfig()}>
          {/* react-router */}
          <Suspense fallback="">
            <HashRouter>
              <App />
            </HashRouter>
          </Suspense>
        </GlobalContext.Provider>
      </Provider>
    </ConfigProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<FrontNode />)
