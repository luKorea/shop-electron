import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { SettingWrapper } from './styled'
import LayoutModal from '@/components/tip-modal/index'
import { IconExport } from '@arco-design/web-react/icon'
import { Button } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import { PAGE_PROFILE_INDEX } from '@/router/constant'
import { localCache } from '@/utils'

interface IProps {
  children?: ReactNode
}

const SettingComponent: FC<IProps> = () => {
  const nav = useNavigate()
  const logoutModalRef = useRef<any>(null)
  function showTipModal() {
    logoutModalRef.current && logoutModalRef.current.setVisible(true)
  }
  function handleLogout() {
    localCache.clearCache()
    nav(PAGE_PROFILE_INDEX)
  }
  return (
    <SettingWrapper>
      <Button
        type="primary"
        onClick={() => showTipModal()}
        long
        shape="round"
        icon={<IconExport />}
      >
        退出登录
      </Button>
      <LayoutModal
        ref={logoutModalRef}
        title="退出登录"
        content="是否退出登录?"
        onHandleOk={() => handleLogout()}
      />
    </SettingWrapper>
  )
}

export default memo(SettingComponent)
