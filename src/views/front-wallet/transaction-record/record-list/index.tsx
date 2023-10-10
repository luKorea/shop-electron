import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RecordListWrapper } from './styled'
import NavBar from '@/components/nav-bar'
import { IRecordListItem, recordList } from '@/config/wallet/record-list'
import RecordListData from '@/components/data-list/record-list'
import SearchIconComponent from '@/components/search-icon'

interface IProps {
  children?: ReactNode
}

const RecordListComponent: FC<IProps> = () => {
  const [list, setList] = useState<IRecordListItem[]>(recordList)
  const handleSearch = (value: string) => {
    let _list = [...recordList]
    if (!value.length) setList(_list)
    _list = _list.filter((item) => item.type.includes(value))
    setList(_list)
  }
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
      <RecordListData list={list} />
    </RecordListWrapper>
  )
}

export default memo(RecordListComponent)
