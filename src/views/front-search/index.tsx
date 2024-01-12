import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FrontSearchWrapper } from './styled'
import { Divider, Input } from '@arco-design/web-react'
import { IconCloseCircle, IconFilter } from '@arco-design/web-react/icon'
import FilterModal from '@/components/business-component/filter-modal'
import { debounce } from 'lodash'
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchCommodityLisAction } from '@/store/module/commodity'
import { localCache } from '@/utils'
import CommodityListDataComponent from '@/components/business-component/data-list/commodity-list'
import { HISTORY_LIST } from '@/config/constant'

interface IProps {
  children?: ReactNode
}

const SearchComponent: FC<IProps> = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const [historyList, setHistoryList] = useState<string[]>(
    () => localCache.getCache(HISTORY_LIST) ?? []
  )
  const dispatch = useAppDispatch()
  const { commodityList } = useAppSelector(
    (state) => ({
      commodityList: state.commodityReducer.list
    }),
    useAppShallowEqual
  )
  function renderSearch() {
    return (
      <Input.Search
        placeholder="请输入搜索关键词"
        size="large"
        allowClear
        loading={loading}
        searchButton
        onSearch={(value) => handleSearch(value)}
        onChange={(value) => handleSearch(value)}
      />
    )
  }
  function setHistoryValue(value: string) {
    const _list = [...historyList]
    // 判断是否已经存在
    const hasItem = _list.find((item) => item === value)
    if (!hasItem) {
      _list.push(value)
      setHistoryList(_list)
      localCache.setCache(HISTORY_LIST, _list)
    }
  }
  const handleSearch = debounce((value: string) => {
    setValue(value)
    if (!value.length) return
    setLoading(true)
    setHistoryValue(value)
    dispatch(
      fetchCommodityLisAction({
        search_value: value
      })
    )
    setLoading(false)
  }, 300)
  function renderHistoryList() {
    return (
      <div className="history-wrap">
        <div className="title-wrap">
          <div className="theme-title">最近的</div>
          <div
            className="second-title"
            onClick={() => {
              setHistoryList([])
              localCache.removeCache(HISTORY_LIST)
            }}
          >
            清除
          </div>
        </div>
        <Divider />
        {historyList.map((item, index) => (
          <div className="history-item" key={index}>
            <div
              className="second-title ellipsis title"
              onClick={() => handleSearch(item)}
            >
              {item}
            </div>
            <IconCloseCircle
              className="icon-close"
              onClick={() => {
                const _list = [...historyList]
                _list.splice(index, 1)
                setHistoryList(_list)
                localCache.setCache(HISTORY_LIST, _list)
              }}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <FrontSearchWrapper>
      <div className="search-wrap sticky">
        {renderSearch()}
        <IconFilter
          className="icon-filter"
          onClick={() => setVisible(!visible)}
        />
      </div>
      {value.length === 0 && renderHistoryList()}
      {!!value.length && (
        <CommodityListDataComponent
          list={commodityList}
          nothingTitle="对不起, 无法找到您输入的关键字, 请在此检查或使用其他关键字搜索"
        />
      )}
      <FilterModal
        visible={visible}
        onToggleModalState={(visible) => setVisible(visible)}
      />
    </FrontSearchWrapper>
  )
}

export default memo(SearchComponent)
