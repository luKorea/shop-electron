import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './styled'
import SearchComponent from './components/search-cpn'
import UserInfoComponent from './components/user-info'

interface IProps {
  children?: ReactNode
}

const HomeHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <UserInfoComponent />
      <SearchComponent />
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
