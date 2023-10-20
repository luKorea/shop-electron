import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CommodityListDataWrapper } from './styled'
import { Divider, Rate, Tag, Typography } from '@arco-design/web-react'
import { ICommodityItem } from '@/types/module/commodity-list'
import LazyImage from '@/components/lazy-image'
import { formatMoney } from '@/utils/format'
import { IconHeart, IconHeartFill } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'
import { PAGE_COMMODITY_DETAIL } from '@/router/constant'
import NothingPage from '@/components/nothing-page'

interface IProps {
  children?: ReactNode
  list: ICommodityItem[]
  nothingTitle?: string
}

const CommodityListDataComponent: FC<IProps> = (props) => {
  const { list = [] } = props
  const nav = useNavigate()
  function handleGoDetail(item: ICommodityItem) {
    nav(`${PAGE_COMMODITY_DETAIL}/${item.id}`)
  }
  function renderData() {
    return (
      <CommodityListDataWrapper>
        {list.map((item) => (
          <div
            className="item"
            key={item.id}
            onClick={() => handleGoDetail(item)}
          >
            <div className="collect">
              {item.isCollect ? (
                <IconHeartFill style={{ color: 'var(--theme-color)' }} />
              ) : (
                <IconHeart />
              )}
            </div>
            <LazyImage
              url={item.img}
              width={'100%'}
              height={150}
              extraClassName="item-image"
            />
            <div className="title ellipsis">{item.title}</div>
            <div className="sku">
              <Rate
                readonly
                count={1}
                className="rate"
                allowHalf
                defaultValue={item.score}
              />
              <Typography.Text>{item.score}</Typography.Text>
              <Divider type="vertical" />
              <Tag bordered color="gray">
                月售 {item.sales}
              </Tag>
            </div>
            <div className="amount">{formatMoney({ money: item.amount })}</div>
          </div>
        ))}
      </CommodityListDataWrapper>
    )
  }
  return (
    <>
      {!list.length ? <NothingPage text={props.nothingTitle} /> : renderData()}
    </>
  )
}

export default memo(CommodityListDataComponent)
