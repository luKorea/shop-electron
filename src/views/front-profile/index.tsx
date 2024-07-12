import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ProfileWrapper } from './styled'
import { IServiceItem, serviceList } from '@/config/profile/service'
import { IconEdit, IconMessage, IconRight } from '@arco-design/web-react/icon'
import LoginModal from '@/components/tip-modal'
import { checkLogin, useGetLocationName } from '@/utils/util'
import { useNavigate } from 'react-router-dom'
import NavBar from '@/components/business-component/nav-bar'
import { Avatar, Divider } from '@arco-design/web-react'
import { PAGE_PROFILE_USER_INFO } from '@/router/constant'
import classNames from 'classnames'
import { useAppSelector, useAppShallowEqual } from '@/hooks'
import logoImage from '@/assets/logo.png'

interface IProps {
  children?: ReactNode
}

const ProfileComponents: FC<IProps> = () => {
  const { pathname } = useGetLocationName()
  const [selectPageName, setSelectPageName] = useState(pathname)
  const loginModalRef = useRef<any>(null)
  const nav = useNavigate()
  const { userInfo } = useAppSelector(
    (state) => ({
      userInfo: state.userReducer.userInfo
    }),
    useAppShallowEqual
  )
  console.log(userInfo)

  function handleChangeEvent(item: IServiceItem) {
    item.url && setSelectPageName(item.url)
    if (item.isLogin && !checkLogin()) {
      loginModalRef.current && loginModalRef.current.setVisible(true)
    } else {
      item.url && nav(item.url)
    }
  }

  function renderAvatar() {
    if (checkLogin()) {
      return (
        <div
          className="edit-info"
          onClick={() =>
            handleChangeEvent({
              url: PAGE_PROFILE_USER_INFO
            })
          }
        >
          <img className="image" alt="avatar" src={logoImage} />
          <div className="icon">
            <IconEdit className={classNames('icon-class', 'abs-icon')} />
          </div>
        </div>
      )
    } else {
      return (
        <Avatar
          size={64}
          onClick={() =>
            handleChangeEvent({
              url: '',
              isLogin: true
            })
          }
        >
          点击登录
        </Avatar>
      )
    }
  }
  return (
    <ProfileWrapper>
      <NavBar
        renderLeft={() => '个人中心'}
        renderRight={() => <IconMessage className="icon-class" />}
      />
      {renderAvatar()}
      <Divider />
      <div className="service-wrap">
        {serviceList.map((item) => (
          <div
            className="service-item"
            key={item.id}
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
      <LoginModal pathname={selectPageName} ref={loginModalRef} />
    </ProfileWrapper>
  )
}

export default memo(ProfileComponents)
