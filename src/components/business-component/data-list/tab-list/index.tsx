import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Tabs } from '@arco-design/web-react'
import { TabListWrapper } from '@/assets/css/mixins'

const TabPane = Tabs.TabPane
interface IProps {
  children?: ReactNode
  tabList: any[]
  getSelectValue?: (value: string) => void
}

const TabListComponent: FC<IProps> = (props) => {
  const { tabList = [] } = props
  const [reverseList] = useState(() => {
    const _list = tabList.slice(0, tabList.length - 1)
    _list.unshift({
      title: '全部',
      type: 'all'
    })
    return _list
  })
  const [activeType, setActiveType] = useState('all')
  return (
    <TabListWrapper>
      <Tabs
        animation={true}
        activeTab={activeType}
        onChange={(value) => {
          setActiveType(value)
          props.getSelectValue && props.getSelectValue(value)
        }}
        lazyload
        type={'rounded'}
      >
        {reverseList.map((item) => (
          <TabPane key={item.type} title={item.title}></TabPane>
        ))}
      </Tabs>
    </TabListWrapper>
  )
}

export default memo(TabListComponent)
