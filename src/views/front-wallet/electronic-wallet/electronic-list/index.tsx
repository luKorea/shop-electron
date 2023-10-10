import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ElectronicListWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import { Button, Space, Typography } from '@arco-design/web-react'
import { IPayTypeItem, payTypeList } from '@/config/wallet/pay-type'
import FrontCardComponent from '@/components/card/index'
import ConfirmBtn from '@/components/confirm-btn'
import { useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const electronicListComponent: FC<IProps> = () => {
  const [selectIndex, setSelectIndex] = useState(0)
  const [payType, setPayType] = useState<IPayTypeItem>(payTypeList[selectIndex])
  const nav = useNavigate()
  function handleSelectPayType(index: number, item: IPayTypeItem) {
    if (index === selectIndex) return
    setSelectIndex(index)
    setPayType(item)
  }
  function handleChangePayType() {
    console.log(payType, '-------')
  }
  return (
    <ElectronicListWrapper>
      <NavBar renderCenter={() => '电子钱包'} />
      <div className="second-title">选择充值方式</div>

      {payTypeList.map((item, index) => {
        return (
          <FrontCardComponent
            key={item.id}
            bordered={selectIndex === index}
            style={{ marginBottom: 'var(--layout-margin)' }}
            onClick={() => handleSelectPayType(index, item)}
          >
            <Space className={'pay-item'}>
              <div className="left">
                {item.icon}
                <Typography.Text className={'left-title'}>
                  {item.title}
                </Typography.Text>
              </div>
              {selectIndex === index && (
                <div className="right">{item.balance}</div>
              )}
            </Space>
          </FrontCardComponent>
        )
      })}

      <Space direction={'vertical'} style={{ width: '100%' }}>
        <Button
          long
          shape="round"
          size="large"
          style={{ marginBottom: '40px' }}
        >
          添加银行卡
        </Button>
        <ConfirmBtn
          confirmText={'确认'}
          onClick={() => handleChangePayType()}
        ></ConfirmBtn>
      </Space>
    </ElectronicListWrapper>
  )
}

export default memo(electronicListComponent)
