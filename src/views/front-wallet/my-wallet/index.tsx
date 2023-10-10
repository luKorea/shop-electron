import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MyWalletWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import MoreIcon from '@/components/more-icon'
import { IRecordListItem, recordList } from '@/config/wallet/record-list'
import { useNavigate } from 'react-router-dom'
import {
  PAGE_WALLET_RECHARGE_WALLET,
  PAGE_WALLET_RECORD_LIST
} from '@/router/constant'
import RecordListData from '@/components/data-list/record-list'
import SearchIconComponent from '@/components/search-icon'
import LoginAuth from '@/components/login-auth'
import { formatMoney } from '@/utils/format'
import IconCard from '@/assets/svg/icon-card'

interface IProps {
  children?: ReactNode
}

const MyWalletComponent: FC<IProps> = () => {
  const [list, setList] = useState<IRecordListItem[]>(recordList.slice(0, 10))
  const nav = useNavigate()
  const handleSearch = (value: string) => {
    let _list = [...recordList.slice(0, 10)]
    if (!value.length) setList(_list)
    _list = _list.filter((item) => item.type.includes(value))
    setList(_list)
  }
  function handleRenderRight() {
    return (
      <>
        <SearchIconComponent onHandleSearch={(value) => handleSearch(value)} />
        <MoreIcon />
      </>
    )
  }
  return (
    <MyWalletWrapper>
      <NavBar
        renderLeft={() => '我的钱包'}
        renderRight={() => handleRenderRight()}
      />
      <div className="card-wrap">
        <div className="user-name">
          korealu
          <IconCard width={40} height={40} />
        </div>
        <div className="user-card-number">1090 9090 8098 8901 0090</div>
        <div className="amount-text">您的余额</div>
        <div className="amount-wrap">
          <div className="amount">{formatMoney({ money: 909078089 })}</div>

          <div
            className="amount-btn"
            onClick={() => nav(PAGE_WALLET_RECHARGE_WALLET)}
          >
            去充值
          </div>
        </div>
      </div>
      <NavBar
        renderLeft={() => '交易记录'}
        renderRight={() => (
          <div onClick={() => nav(PAGE_WALLET_RECORD_LIST)}>更多</div>
        )}
      />
      <RecordListData list={list} />
    </MyWalletWrapper>
  )
}

export default LoginAuth(memo(MyWalletComponent))
