import { useChangeTheme, useStorage } from '@/hooks'
import { ELocal, ETheme } from '@/types'
import { ComponentConfig } from '@arco-design/web-react/es/ConfigProvider/interface'
import { Locale } from '@arco-design/web-react/es/locale/interface'
import { useEffect } from 'react'

import zhCN from '@arco-design/web-react/es/locale/zh-CN'
import enUS from '@arco-design/web-react/es/locale/en-US'

export function useGetStyledConfig() {
  const [lang, setLang] = useStorage('arco-lang', ELocal['zh-CN'])
  const [theme, setTheme] = useStorage('arco-theme', ETheme.light)
  return {
    lang,
    setLang,
    theme,
    setTheme
  }
}

// context 注入
export function useGlobalConfig() {
  const { lang, setLang, theme, setTheme } = useGetStyledConfig()

  useEffect(() => {
    useChangeTheme(theme as string)
  }, [theme])
  return {
    lang,
    setLang,
    theme,
    setTheme
  }
}
// 暂时只配置两种语言
export function useArcoLocale(): Locale {
  const { lang } = useGetStyledConfig()
  return lang === ELocal['en-US'] ? enUS : zhCN
}

// 修改 arco 组件样式
export function useCommentConfig(): ComponentConfig {
  return {
    Modal: {
      focusLock: false,
      style: {
        width: '90%'
      }
    },
    DatePicker: {
      style: {
        width: '100%'
      }
    },
    Divider: {
      className: 'arco-divider-extra'
    },
    Drawer: {
      className: 'arco-drawer-extra',
      style: {
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px'
      },
      headerStyle: {
        borderBottom: 'none'
      }
    }
  }
}
