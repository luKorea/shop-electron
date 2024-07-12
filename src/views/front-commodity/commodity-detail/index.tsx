import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchCommodityDetailAction } from '@/store/module/commodity'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { CommodityDetailWrapper } from './styled'

import CommodityBannerComponent from './component/banner'
import CommodityDescComponent from './component/desc'
import FrontCardComponent from '@/components/card/index'
import { Divider } from '@arco-design/web-react'
import { formatMoney } from '@/utils/format'
import ConfirmBtn from '@/components/form-component/confirm-btn'
interface IProps {
  children?: ReactNode
}

const CommodityDetailComponent: FC<IProps> = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const { current_info, bannerList } = useAppSelector(
    (state) => ({
      current_info: state.commodityReducer.current_info,
      bannerList: state.homeReducer.bannerList
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchCommodityDetailAction(id!))
  }, [id])

  function handleGetSelectInfo() {
    setLoading(true)
    console.log('-----------')
  }
  return (
    <CommodityDetailWrapper>
      <CommodityBannerComponent list={bannerList} />
      <FrontCardComponent>
        <CommodityDescComponent />
      </FrontCardComponent>
      <div className="reduce-wrap fixed-wrap">
        <div className="amount-wrap">
          <div>
            <div className="second-title">总价</div>
            <div className="theme-title">{formatMoney({ money: '999' })}</div>
          </div>
          <ConfirmBtn
            confirmText={'加入购物车'}
            onClick={() => handleGetSelectInfo()}
            loading={loading}
          ></ConfirmBtn>
        </div>
      </div>
    </CommodityDetailWrapper>
  )
}

export default memo(CommodityDetailComponent)
