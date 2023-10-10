import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HelpCenterWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import { Space, Tabs, Typography } from '@arco-design/web-react'
import { contactUsList } from '@/config/front-member'
import FrontCardComponent from '@/components/card/index'
import { IconToBottom, IconToTop } from '@arco-design/web-react/icon'
import {
  ITypeItem,
  ITypeItemList,
  helpList
} from '@/config/profile/help-center'
const TabPane = Tabs.TabPane

interface IProps {
  children?: ReactNode
}

const HelpCenterComponent: FC<IProps> = () => {
  const [tabList] = useState<{ title: string; key: string }[]>([
    {
      title: '常见问题',
      key: '1'
    },
    {
      title: '联系我们',
      key: '2'
    }
  ])
  const [activeTab, setActiveTab] = useState('1')

  const [typeList, setTypeList] = useState<ITypeItem[]>(helpList)
  const [activeType, setActiveType] = useState('all')

  function handleChangeShowDesc(item: ITypeItemList, parentIndex: number) {
    const _list = [...helpList]
    const selectItem = _list[parentIndex].list.find((i) => i.id === item.id)
    if (selectItem) {
      selectItem.show = !selectItem.show
      setTypeList(_list)
    }
  }

  //渲染问题分类
  function renderQuestion() {
    return (
      <div className="question-wrap">
        <Tabs
          animation={true}
          activeTab={activeType}
          onChange={setActiveType}
          lazyload
          type={'rounded'}
        >
          {typeList.map((item, index) => (
            <TabPane key={item.key} title={item.title}>
              {renderQuestionItem(typeList[index].list, index)}
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
  // 渲染问题项
  function renderQuestionItem(data: ITypeItemList[], parentIndex: number) {
    return data.map((item, index) => (
      <FrontCardComponent
        key={index}
        bordered={false}
        shadow={true}
        style={{ marginBottom: 20 }}
        onClick={() => handleChangeShowDesc(item, parentIndex)}
      >
        <Space
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: item.show ? '10px' : ''
          }}
        >
          <Typography.Text>{item.title}</Typography.Text>
          {item.show ? <IconToTop /> : <IconToBottom />}
        </Space>
        {item.show && (
          <Space>
            <Typography.Text>{item.desc}</Typography.Text>
          </Space>
        )}
      </FrontCardComponent>
    ))
  }
  // 渲染联系我们
  function renderConcatUs() {
    return contactUsList.map((item, index) => (
      <FrontCardComponent
        key={index}
        bordered={false}
        shadow={true}
        style={{ marginBottom: 20 }}
      >
        <Space
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="icon-class">{item.icon}</div>
          <Typography.Text>{item.type}</Typography.Text>
        </Space>
      </FrontCardComponent>
    ))
  }

  return (
    <HelpCenterWrapper>
      <NavBar renderCenter={() => '帮助中心'} />
      <Tabs
        animation={true}
        activeTab={activeTab}
        onChange={setActiveTab}
        lazyload
      >
        {tabList.map((item) => (
          <TabPane key={item.key} title={item.title}>
            {activeTab === '1' && renderQuestion()}
            {activeTab === '2' && renderConcatUs()}
          </TabPane>
        ))}
      </Tabs>
    </HelpCenterWrapper>
  )
}

export default memo(HelpCenterComponent)
