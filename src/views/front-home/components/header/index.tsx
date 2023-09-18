import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import SearchComponent from './components/search-cpn'

interface IProps {
  children?: ReactNode
}

const HomeHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <NavBar />
      <SearchComponent />
    </HeaderWrapper>
  )
}

export default memo(HomeHeader)
