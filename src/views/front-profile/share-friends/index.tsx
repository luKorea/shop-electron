import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ShareFriendsWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import { createUniqueString, randomHex } from '@/utils/util'
import classNames from 'classnames'
import FrontCardComponent from '@/components/card/index'
import { useMessageTip } from '@/utils/tip'

interface IProps {
  children?: ReactNode
}

interface IListItem {
  id: string
  name: string
  avatar: string
  phone: string
  status: boolean
}

const ShareFriendsComponent: FC<IProps> = () => {
  const [list, setList] = useState<IListItem[]>([])
  function renderData() {
    const newList: IListItem[] = new Array(100).fill(null).map((_, index) => {
      return {
        id: createUniqueString(),
        name: '用户' + index,
        phone: `1341707204${index}`,
        status: index % 2 === 0,
        avatar: ''
      }
    })
    setList(newList)
  }

  function handleChangeStatus(item: IListItem) {
    if (item.status) {
      useMessageTip('info', '您已经邀请过该好友啦')
      return
    } else {
      const _list = [...list]
      const selectItem = _list.find((i) => i.id === item.id)
      if (selectItem) {
        selectItem.status = true
        setList(_list)
        useMessageTip('success', `邀请用户: ${item.name} 成功`)
      }
    }
  }
  useEffect(() => {
    renderData()
  }, [])
  return (
    <ShareFriendsWrapper>
      <NavBar renderCenter={() => '邀请好友'} />
      <div className="content">
        {list.map((item) => (
          <FrontCardComponent
            key={item.id}
            bordered={false}
            style={{ marginBottom: 'var(--layout-margin)' }}
          >
            <div className="item">
              <div
                className="avatar"
                style={{ backgroundColor: randomHex() }}
              ></div>
              <div className="user-info">
                <div className="user-name">{item.name}</div>
                <div className="user-phone">{item.phone}</div>
              </div>
              <div
                className={classNames({
                  'share-btn': true,
                  'is-share': item.status
                })}
                onClick={() => handleChangeStatus(item)}
              >
                {item.status ? '已' : ''}邀请
              </div>
            </div>
          </FrontCardComponent>
        ))}
      </div>
    </ShareFriendsWrapper>
  )
}

export default memo(ShareFriendsComponent)
