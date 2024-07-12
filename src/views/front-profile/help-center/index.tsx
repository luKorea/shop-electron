import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HelpCenterWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import { Space, Tabs, Typography } from '@arco-design/web-react'
import { contactUsList } from '@/config/front-member'
import FrontCardComponent from '@/components/card/index'
import { cloneDeep } from 'lodash'
import { IconDown, IconUp } from '@arco-design/web-react/icon'
import SearchIconComponent from '@/components/icon-component/search-icon'
import {
  ITypeItem,
  ITypeItemList,
  helpList
} from '@/config/profile/help-center'
import NothingPage from '@/components/nothing-page'
const TabPane = Tabs.TabPane

interface IProps {
  children?: ReactNode
}

const HelpCenterComponent: FC<IProps> = () => {
  //一级分类
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
  // 二级分类
  const [typeList, setTypeList] = useState<ITypeItem[]>(helpList)
  const [activeType, setActiveType] = useState('all')

  // 展开问题详情
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
        {renderSearch()}
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
    return (
      <>
        {data.length ? (
          data.map((item, index) => (
            <FrontCardComponent
              key={index}
              bordered={false}
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
                {item.show ? <IconUp /> : <IconDown />}
              </Space>
              {item.show && (
                <Space>
                  <Typography.Text>{item.desc}</Typography.Text>
                </Space>
              )}
            </FrontCardComponent>
          ))
        ) : (
          <NothingPage />
        )}
      </>
    )
  }

  //渲染搜索区域
  function renderSearch() {
    return (
      <FrontCardComponent style={{ marginBottom: 20 }}>
        <SearchIconComponent
          showSearchInput={true}
          showInputPrefix={false}
          onHandleSearch={(value) => handleSearchList(value)}
          searchInputWidth="100%"
          placeholder="按标题搜索"
        />
      </FrontCardComponent>
    )
  }

  // 搜索内容
  function handleSearchList(value: string) {
    const _list = cloneDeep(helpList)
    if (!value.length) {
      setTypeList(_list)
      return
    }
    const selectQuestionList = _list.find((i) => i.key === activeType)
    if (selectQuestionList) {
      const selectItem = selectQuestionList?.list.filter((item) =>
        item.title.includes(value)
      )
      if (selectItem && selectQuestionList.list) {
        selectQuestionList.list = selectItem
        setTypeList(_list)
      }
    }
  }
  // 渲染联系我们
  function renderConcatUs() {
    return contactUsList.map((item, index) => (
      <FrontCardComponent
        key={index}
        bordered={false}
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
