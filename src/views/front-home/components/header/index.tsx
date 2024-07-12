import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper, SearchWrapper, UserInfoWrapper } from './styled'
import { useNavigate } from 'react-router-dom'
import {
  PAGE_PROFILE_COLLECTING,
  PAGE_PROFILE_MESSAGE_CENTER,
  PAGE_SEARCH
} from '@/router/constant'
import FilterModal from '@/components/business-component/filter-modal'
import NavBar from '@/components/business-component/nav-bar'
import { IconFilter, IconSearch } from '@arco-design/web-react/icon'
import { getNowTimeText } from '@/utils/util'
import { imageUrl } from '@/config/image'
import IconMessage from '@/assets/svg/icon-message'
import IconCollect from '@/assets/svg/icon-collect'
import { useAppSelector, useAppShallowEqual } from '@/hooks'

interface IProps {
  children?: ReactNode
  onGoPage: (pathname: string) => void
}

const HomeHeader: FC<IProps> = (props) => {
  const nav = useNavigate()
  const [visible, setVisible] = useState(false)
  const { userInfo } = useAppSelector(
    (state) => ({
      userInfo: state.userReducer.userInfo
    }),
    useAppShallowEqual
  )

  function handleGoPage(pathname: string) {
    props.onGoPage && props.onGoPage(pathname)
  }

  function renderUserInfo() {
    return (
      <UserInfoWrapper>
        <img className="logo-gif" src={imageUrl.logoImage} alt="" />
        <div className="info-wrap">
          <div className="time-info">{getNowTimeText()}</div>
          <div className="user-name">{userInfo.username ?? '游客'}</div>
        </div>
        <div className="icon-wrap">
          <div
            style={{ marginRight: '6px' }}
            onClick={() => handleGoPage(PAGE_PROFILE_MESSAGE_CENTER)}
          >
            <IconMessage width={32} height={32} />
          </div>
          <div onClick={() => handleGoPage(PAGE_PROFILE_COLLECTING)}>
            <IconCollect width={32} height={32} />
          </div>
        </div>
      </UserInfoWrapper>
    )
  }
  function renderSearch() {
    return (
      <SearchWrapper>
        <NavBar
          isSticky={false}
          showLeft={false}
          renderCenter={() => (
            <div className="search-input" onClick={() => nav(PAGE_SEARCH)}>
              <IconSearch className="icon-search" />
              关键词搜索
            </div>
          )}
          renderRight={() => (
            <IconFilter
              className="icon-filter"
              onClick={() => setVisible(true)}
            />
          )}
        />
        <FilterModal
          visible={visible}
          onToggleModalState={(state) => setVisible(state)}
        />
      </SearchWrapper>
    )
  }
  return (
    <HeaderWrapper>
      {renderUserInfo()}
      {renderSearch()}
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
