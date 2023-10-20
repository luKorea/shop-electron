import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'

import HomeHeader from './components/header'
import HomeBanner from './components/banner'
import HomeGird from './components/grid'
import TabListComponent from '@/components/business-component/data-list/tab-list'
import FrontSkeletonComponent from '@/base-ui/skeleton'
import LoginModal from '@/components/tip-modal'
import { checkLogin } from '@/utils/util'
import { useNavigate } from 'react-router-dom'

import CommodityListDataComponent from '@/components/business-component/data-list/commodity-list'
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchCommodityLisAction } from '@/store/module/commodity'
import { fetchHomeDataAction } from '@/store/module/home'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  const [pageId] = useState('home-wrapper')
  const [pathname, setPathName] = useState('')
  const loginModalRef = useRef<any>(null)
  const nav = useNavigate()
  const { bannerList, gridList, commodityList } = useAppSelector(
    (state) => ({
      bannerList: state.homeReducer.bannerList,
      gridList: state.homeReducer.gridList,
      commodityList: state.commodityReducer.list
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(fetchCommodityLisAction({}))
    setLoading(false)
  }, [loading])

  function handleShowLoginModal(pathname: string) {
    setPathName(pathname)
    if (loginModalRef.current && !checkLogin()) {
      loginModalRef.current.setVisible(true)
    } else {
      nav(pathname)
    }
  }
  return (
    <FrontSkeletonComponent loading={loading}>
      <HomeWrapper id={pageId}>
        <HomeHeader onGoPage={(pathname) => handleShowLoginModal(pathname)} />
        <HomeBanner bannerList={bannerList} />
        <HomeGird gridList={gridList} />
        <TabListComponent tabList={gridList} />
        <CommodityListDataComponent list={commodityList} />
      </HomeWrapper>
      <LoginModal pathname={pathname} ref={loginModalRef} />
    </FrontSkeletonComponent>
  )
}

export default memo(FrontHomePage)
