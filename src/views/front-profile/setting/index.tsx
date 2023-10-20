import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { SettingWrapper } from './styled'
import LayoutModal from '@/components/tip-modal/index'
import { IconExport } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'
import { PAGE_PROFILE_INDEX } from '@/router/constant'
import ConfirmBtn from '@/components/form-component/confirm-btn'
import NavBar from '@/components/business-component/nav-bar'
import { logoutAction } from '@/store/module/user'
import { useAppDispatch } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const SettingComponent: FC<IProps> = () => {
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const logoutModalRef = useRef<any>(null)
  function showTipModal() {
    logoutModalRef.current && logoutModalRef.current.setVisible(true)
  }
  function handleLogout() {
    dispatch(logoutAction())
    nav(PAGE_PROFILE_INDEX)
  }
  return (
    <SettingWrapper>
      <NavBar renderCenter={() => '设置中心'} />
      <ConfirmBtn
        confirmText="退出登录"
        onClick={() => showTipModal()}
        icon={<IconExport />}
      ></ConfirmBtn>
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
