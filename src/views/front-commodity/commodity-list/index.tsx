import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CommodityListWrapper } from './styled'
import CommodityListDataComponent from '@/components/business-component/data-list/commodity-list'
import NavBar from '@/components/business-component/nav-bar'
import FrontSkeletonComponent from '@/base-ui/skeleton'
import { useLocation } from 'react-router-dom'
import {
  useAppDispatch,
  useAppSelector,
  useAppShallowEqual,
  useScroll
} from '@/hooks'
import { IPageInfo } from '@/types/constant'
import { fetchCommodityLisAction } from '@/store/module/commodity'
import TabListComponent from '@/components/business-component/data-list/tab-list'

interface IProps {
  children?: ReactNode
}

const CommodityListComponent: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  const [pageInfo, setPageInfo] = useState<IPageInfo>({
    current_page: 1,
    page_size: 10
  })
  const { commodityList, gridList } = useAppSelector(
    (state) => ({
      commodityList: state.commodityReducer.list,
      gridList: state.homeReducer.gridList
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()
  const { state } = useLocation()
  const { isReachBottom } = useScroll()
  function getData() {
    dispatch(
      fetchCommodityLisAction({
        ...pageInfo,
        type: state.type
      })
    )
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [pageInfo])
  useEffect(() => {
    if (isReachBottom) {
      setPageInfo({
        ...pageInfo,
        current_page: ++pageInfo.current_page
      })
      console.log(123123)

      getData()
    }
  }, [isReachBottom])

  return (
    <CommodityListWrapper>
      <NavBar renderCenter={() => '商品列表'} isSticky={false} />
      <FrontSkeletonComponent loading={loading}>
        <TabListComponent tabList={gridList} />
        <CommodityListDataComponent list={commodityList} />
      </FrontSkeletonComponent>
    </CommodityListWrapper>
  )
}

export default memo(CommodityListComponent)
