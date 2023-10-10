import React, { memo, useEffect, useState } from 'react'
import type { CSSProperties, FC, ReactNode } from 'react'
import { RecordDetailWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import MoreIcon from '@/components/more-icon'
import { Divider, Menu, Tag } from '@arco-design/web-react'
import {
  IconDown,
  IconCloudDownload,
  IconPrinter,
  IconShareAlt
} from '@arco-design/web-react/icon'
import { useParams } from 'react-router-dom'
import FrontCardComponent from '@/components/card/index'
import BarCodeComponent from '@/components/bar-code'
import { IRecordListItem, recordList } from '@/config/wallet/record-list'
import NothingPage from '@/components/nothing-page'
import LazyImage from '@/components/lazy-image'
import { formatMoney } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const RecordDetailComponent: FC<IProps> = () => {
  const { id } = useParams()
  const [itemData, setItemData] = useState<IRecordListItem | null>(null)
  const iconStyle: CSSProperties = {
    marginRight: '10px',
    fontSize: '16px',
    verticalAlign: 'middle'
  }

  const cardStyled: CSSProperties = {
    marginBottom: 'var(--layout-margin)'
  }

  useEffect(() => {
    console.log(recordList)
    const data = recordList.find((item) => id === item.id)
    setItemData(data ?? null)
  }, [id])

  function renderDropDown() {
    return (
      <Menu>
        <Menu.Item key="1">
          <IconShareAlt style={{ ...iconStyle, transform: 'rotate(180deg)' }} />
          分享电子数据
        </Menu.Item>
        <Menu.Item key="2">
          <IconCloudDownload style={iconStyle} />
          下载电子发票
        </Menu.Item>
        <Menu.Item key="2">
          <IconPrinter style={iconStyle} />
          打印
        </Menu.Item>
      </Menu>
    )
  }

  function renderRecordInfo() {
    return (
      <>
        {/* 商品信息 */}
        <FrontCardComponent style={cardStyled}>
          <div className="item">
            <LazyImage className="item-image" url={itemData?.image} />
            <div className="item-info">
              <div className="item-title">{itemData?.type}</div>
              <div className="second-title">{itemData?.time}</div>
            </div>
            <Tag color="magenta">粉色</Tag>
          </div>
        </FrontCardComponent>
        {/* 账单信心 */}
        <FrontCardComponent style={cardStyled}>
          <div className="item">
            <div className="second-title">金额</div>
            <div className="theme-title">{formatMoney({ money: '999' })}</div>
          </div>
          <div className="item">
            <div className="second-title">优惠</div>
            <div className="theme-title">{formatMoney({ money: '222' })}</div>
          </div>
          <Divider />
          <div className="item">
            <div className="second-title">总计</div>
            <div className="theme-title">{formatMoney({ money: '777' })}</div>
          </div>
        </FrontCardComponent>
        {/* 订单信息 */}
        <FrontCardComponent style={cardStyled}>
          <div className="item">
            <div className="second-title">付款方式</div>
            <div className="theme-title">电子钱包</div>
          </div>
          <div className="item">
            <div className="second-title">日期</div>
            <div className="theme-title">{itemData?.time}</div>
          </div>
          <div className="item">
            <div className="second-title">订单标号</div>
            <div className="theme-title">{itemData?.id}</div>
          </div>
          <Divider />
          <div className="item">
            <div className="second-title">状态</div>
            <Tag color="var(--theme-color)">已付款</Tag>
          </div>
        </FrontCardComponent>
        {/* 订单详情 */}
        <FrontCardComponent style={cardStyled}>
          <div className="item">
            <div className="second-title">类别</div>
            <div className="theme-title">
              订单
              <IconDown />
            </div>
          </div>
        </FrontCardComponent>
      </>
    )
  }
  return (
    <RecordDetailWrapper>
      <NavBar
        renderCenter={() => '交易记录详情'}
        renderRight={() => <MoreIcon menuList={renderDropDown()} />}
      />
      <FrontCardComponent style={cardStyled}>
        <BarCodeComponent value={id + ''} />
      </FrontCardComponent>
      {!itemData ? <NothingPage /> : renderRecordInfo()}
    </RecordDetailWrapper>
  )
}

export default memo(RecordDetailComponent)
