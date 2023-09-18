import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { ProfileWrapper } from './styled'
import { IServiceItem, serviceList } from '@/config/profile/service'
import { IconRight } from '@arco-design/web-react/icon'
import LoginModal from '@/components/login-modal'
import { checkLogin, useGetLocationName } from '@/utils/util'
import { useNavigate } from 'react-router-dom'
import NavBar from '@/components/nav-bar'

interface IProps {
  children?: ReactNode
}

const ProfileComponents: FC<IProps> = () => {
  const { pathname } = useGetLocationName()
  const loginModalRef = useRef<any>(null)
  const nav = useNavigate()
  function handleChangeEvent(item: IServiceItem) {
    if (item.isLogin && !checkLogin()) {
      loginModalRef.current && loginModalRef.current.setVisible(true)
    } else {
      nav(item.url)
    }
  }
  return (
    <ProfileWrapper>
      <NavBar renderLeft={() => '个人中心'} />
      <div className="avatar">头像</div>
      <div className="service-wrap">
        {serviceList.map((item, index) => (
          <div
            className="service-item"
            key={index}
            onClick={() => handleChangeEvent(item)}
          >
            <div className="service-left">
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
            </div>
            <div className="service-right">
              <IconRight />
            </div>
          </div>
        ))}
      </div>
      <LoginModal pathname={pathname} ref={loginModalRef} />
    </ProfileWrapper>
  )
}

export default memo(ProfileComponents)
