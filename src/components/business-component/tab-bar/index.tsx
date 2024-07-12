import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { TabBarWrapper } from './styled'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { IListItem, navbarList } from '@/config/tab-bar'
import { useGetLocationName } from '@/utils/util'

interface IProps {
  children?: ReactNode
}

const TabBar: FC<IProps> = () => {
  const [selectIndex, setSelectIndex] = useState(0)
  const { pathname } = useGetLocationName()
  const nav = useNavigate()

  function handleChangeItem(item: IListItem, index: number) {
    if (index === selectIndex) return
    setSelectIndex(index)
    nav(item.url)
  }

  // 根据当前地址栏设置选中 tab
  function settingSelectToUrl() {
    const selectItem = navbarList.find((item) => item.url === pathname)
    const selectIndex = navbarList.findIndex((item) => item.url === pathname)
    selectItem && handleChangeItem(selectItem, selectIndex)
  }
  useEffect(() => {
    settingSelectToUrl()
  }, [pathname])
  return (
    <TabBarWrapper>
      {navbarList?.map((item, index) => (
        <div
          className="item"
          key={index}
          onClick={() => handleChangeItem(item, index)}
        >
          <img
            src={selectIndex === index ? item.select_icon : item.icon}
            className="item-image"
          />
          <div
            className={classNames('item-text', {
              'select-text': selectIndex === index
            })}
          >
            {item.title}
          </div>
        </div>
      ))}
    </TabBarWrapper>
  )
}

export default memo(TabBar)
