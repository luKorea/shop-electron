import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MessageManagementWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import {
  IMessageManagementItem,
  messageManagementList
} from '@/config/profile/message-management'
import { Switch } from '@arco-design/web-react'
import FrontCardComponent from '@/components/card/index'

interface IProps {
  children?: ReactNode
}

const MessageManagementComponent: FC<IProps> = () => {
  const [list, setList] = useState<IMessageManagementItem[]>(
    () => messageManagementList
  )
  function handleChange(checked: boolean, id: string) {
    const newList = [...list]
    const selectItem = newList.find((item) => item.id === id)
    if (selectItem) {
      selectItem.loading = true
      selectItem.checked = checked
      setTimeout(() => {
        selectItem.loading = false
      }, 100)
    }
    setList(newList)
  }
  return (
    <MessageManagementWrapper>
      <NavBar renderCenter={() => <div className="page-title">消息</div>} />
      <div className="wrap">
        {list.map((item) => (
          <FrontCardComponent
            key={item.id}
            style={{ marginBottom: 'var(--layout-margin)' }}
          >
            <div className="item">
              <div className="title">{item.title}</div>
              <Switch
                defaultChecked={item.checked}
                size="small"
                onChange={(e) => handleChange(e, item.id)}
              ></Switch>
            </div>
          </FrontCardComponent>
        ))}
      </div>
    </MessageManagementWrapper>
  )
}

export default memo(MessageManagementComponent)
