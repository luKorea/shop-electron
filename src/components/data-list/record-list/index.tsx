import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecordListWrapper } from './styled'
import { IRecordListItem } from '@/config/wallet/record-list'
import { formatMoney } from '@/utils/format'
import { useNavigate } from 'react-router-dom'
import { PAGE_WALLET_RECORD_DETAIL } from '@/router/constant'
import NothingPage from '@/components/nothing-page'
import LazyImage from '@/components/lazy-image'

interface IProps {
  children?: ReactNode
  list: IRecordListItem[]
}

const RecordListDataComponent: FC<IProps> = (props) => {
  const { list = [] } = props
  const nav = useNavigate()
  function goRecordDetail(id: string | number) {
    nav(`${PAGE_WALLET_RECORD_DETAIL}/${id}`)
  }
  return (
    <RecordListWrapper>
      {list?.length ? (
        list.map((item) => (
          <div
            className="record-item"
            key={item.id}
            onClick={() => goRecordDetail(item.id)}
          >
            <LazyImage className="item-image" url={item.image} />
            <div className="item-info">
              <div className="item-title">{item.type}</div>
              <div className="item-time">{item.time}</div>
            </div>
            <div className="item-amount">
              {formatMoney({ money: item.amount })}
            </div>
          </div>
        ))
      ) : (
        <NothingPage />
      )}
    </RecordListWrapper>
  )
}

export default memo(RecordListDataComponent)
