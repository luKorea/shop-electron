import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RecordListWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import { IRecordListItem, recordList } from '@/config/wallet/record-list'
import RecordListData from '@/components/business-component/data-list/record-list'
import SearchIconComponent from '@/components/icon-component/search-icon'
import FrontSkeletonComponent from '@/base-ui/skeleton'

interface IProps {
  children?: ReactNode
}

const RecordListComponent: FC<IProps> = () => {
  const [list, setList] = useState<IRecordListItem[]>(recordList)
  const [loading, setLoading] = useState(true)
  const handleSearch = (value: string) => {
    let _list = [...recordList]
    if (!value.length) setList(_list)
    _list = _list.filter((item) => item.type.includes(value))
    setList(_list)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <RecordListWrapper>
      <NavBar
        renderCenter={() => '交易记录'}
        renderRight={() => (
          <SearchIconComponent
            onHandleSearch={(value) => handleSearch(value)}
          />
        )}
      />
      <FrontSkeletonComponent loading={loading}>
        <RecordListData list={list} />
      </FrontSkeletonComponent>
    </RecordListWrapper>
  )
}

export default memo(RecordListComponent)
