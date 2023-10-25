import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FrontAddressListWrapper } from './styled'
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchAddressListAction } from '@/store/module/address'
import FrontCardComponent from '@/components/card/index'
import NothingPage from '@/components/nothing-page'
import ConfirmBtn from '@/components/form-component/confirm-btn'
import { useNavigate } from 'react-router-dom'
import { PAGE_ADDRESS_ADD_ADDRESS } from '@/router/constant'
import { Button, Checkbox, Divider } from '@arco-design/web-react'
import { IconEdit } from '@arco-design/web-react/icon'
import { IAddressItem } from '@/types/module/address'
import FrontSkeletonComponent from '@/base-ui/skeleton'
import NavBar from '@/components/business-component/nav-bar'

interface IProps {
  children?: ReactNode
}

const FrontAddressListComponent: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const [loading, setLoading] = useState(true)
  const { list } = useAppSelector(
    (state) => ({
      list: state.addressReducer.list
    }),
    useAppShallowEqual
  )

  useEffect(() => {
    dispatch(fetchAddressListAction())
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  function handleChangeChecked(item: IAddressItem) {
    console.log(item, '--------')
  }
  return (
    <FrontAddressListWrapper className="page">
      <FrontSkeletonComponent loading={loading}>
        <NavBar renderCenter={() => '管理收货地址'} />
        <div className="has-fixed-wrap-height">
          {list.length ? (
            list.map((item) => (
              <FrontCardComponent
                key={item.id}
                bordered={true}
                style={{ marginBottom: 'var(--layout-margin)' }}
              >
                <div className="user-info">
                  <div
                    className="theme-title"
                    style={{ marginRight: 'var(--layout-margin)' }}
                  >
                    {item.name}
                  </div>
                  <div className="theme-title">{item.phone}</div>
                </div>
                <div className="address second-title">
                  <span>{item.province}</span>
                  <span>{item.city}</span>
                  <span>{item.region}</span>
                  <span>{item.address}</span>
                </div>
                <Divider />
                <div className="edit-wrap">
                  <Checkbox
                    checked={item.is_default}
                    onChange={() => handleChangeChecked(item)}
                  >
                    {item.is_default ? '默认地址' : '设为默认'}
                  </Checkbox>
                  <Button
                    type="text"
                    icon={<IconEdit />}
                    onClick={() => {
                      nav(`${PAGE_ADDRESS_ADD_ADDRESS}?type=edit`, {
                        state: item
                      })
                    }}
                  >
                    编辑
                  </Button>
                </div>
              </FrontCardComponent>
            ))
          ) : (
            <NothingPage text="您暂时还没有添加收货地址, 快去添加吧" />
          )}
        </div>
        <div className="fixed-wrap">
          <ConfirmBtn
            confirmText={'添加地址'}
            onClick={() => nav(PAGE_ADDRESS_ADD_ADDRESS)}
          />
        </div>
      </FrontSkeletonComponent>
    </FrontAddressListWrapper>
  )
}

export default memo(FrontAddressListComponent)
