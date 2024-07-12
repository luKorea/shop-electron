import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { MoreIconWrapper } from './styled'
import { Button, Dropdown, Menu } from '@arco-design/web-react'
import IconMore from '@/assets/svg/icon-more'
import { useNavigate } from 'react-router-dom'
import { PAGE_HOME, PAGE_PROFILE_INDEX } from '@/router/constant'
import TipModal from '@/components/tip-modal'
import { localCache } from '@/utils'
import { useAppDispatch } from '@/hooks'
import { logoutAction } from '@/store/module/user'

interface IProps {
  children?: ReactNode
  menuList?: ReactNode
}

const MoreIconComponent: FC<IProps> = (props) => {
  const nav = useNavigate()
  const logoutModalRef = useRef<any>(null)
  const dispatch = useAppDispatch()
  function renderDefaultDropList() {
    return (
      <Menu>
        <Menu.Item key="profile" onClick={() => nav(PAGE_PROFILE_INDEX)}>
          个人中心
        </Menu.Item>
        <Menu.Item
          key="logout"
          onClick={() => {
            logoutModalRef.current && logoutModalRef.current.setVisible(true)
          }}
        >
          退出登录
        </Menu.Item>
      </Menu>
    )
  }
  const { menuList = renderDefaultDropList() } = props
  function handleLogout() {
    if (logoutModalRef.current) {
      dispatch(logoutAction())
      logoutModalRef.current.setVisible(false)
      nav(PAGE_HOME)
    }
  }
  return (
    <MoreIconWrapper>
      <Dropdown droplist={menuList} position={'bottom'}>
        <Button
          style={{ width: '20px' }}
          type={'text'}
          icon={<IconMore width={16} height={16} />}
        ></Button>
      </Dropdown>
      <TipModal
        ref={logoutModalRef}
        title="退出登录"
        content="您确定要退出登录吗?"
        onHandleOk={() => handleLogout()}
      />
    </MoreIconWrapper>
  )
}

export default memo(MoreIconComponent)
