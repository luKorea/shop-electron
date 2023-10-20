import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RechargeWalletWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import classNames from 'classnames'
import { formatMoney } from '@/utils/format'
import { InputNumber } from '@arco-design/web-react'
import ConfirmBtn from '@/components/form-component/confirm-btn'

interface IProps {
  children?: ReactNode
}

const rechargeWalletComponent: FC<IProps> = () => {
  const [list] = useState<number[]>([
    100, 200, 300, 400, 500, 600, 700, 800, 900
  ])
  const [selectIndex, setSelectIndex] = useState<number>()
  const [selectBalance, setSelectBalance] = useState<number>()
  function handleSelectBalance(index: number, balance: number) {
    setSelectIndex(index)
    setSelectBalance(balance)
  }
  function handleRechargeBalance() {
    console.log(selectBalance, '----')
  }
  return (
    <RechargeWalletWrapper>
      <NavBar renderCenter={() => '充值钱包'} />
      <div className="second-title">余额充值</div>
      <div className="balance-list">
        {list.map((item, index) => (
          <div
            className={classNames('balance-item', {
              'select-item': selectIndex === index
            })}
            key={index}
            onClick={() => handleSelectBalance(index, item)}
          >
            {formatMoney({ money: item })}
          </div>
        ))}
        {list.slice(0, 3).map((_, index) => (
          <div className="after-item" key={index}></div>
        ))}
      </div>
      <div className="balance-input">
        <InputNumber
          placeholder="请输入充值金额"
          value={selectBalance}
          onChange={setSelectBalance}
          size="large"
          prefix="¥"
          hideControl={true}
        />
      </div>
      <ConfirmBtn
        confirmText={'确认'}
        onClick={() => handleRechargeBalance()}
      ></ConfirmBtn>
    </RechargeWalletWrapper>
  )
}

export default memo(rechargeWalletComponent)
