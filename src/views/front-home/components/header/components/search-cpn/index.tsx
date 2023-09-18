import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SearchWrapper } from './styled'
import { IconFilter, IconSearch } from '@arco-design/web-react/icon'
import NavBar from '@/components/nav-bar'
import { useNavigate } from 'react-router-dom'
import { PAGE_SEARCH } from '@/router/constant'
import FilterModal from '@/components/filter-modal'

interface IProps {
  children?: ReactNode
}

const SearchComponent: FC<IProps> = () => {
  const nav = useNavigate()
  const [visible, setVisible] = useState(false)
  return (
    <SearchWrapper>
      <NavBar
        showLeft={false}
        renderCenter={() => (
          <div className="search-input" onClick={() => nav(PAGE_SEARCH)}>
            <IconSearch className="icon-search" />
          </div>
        )}
        renderRight={() => (
          <IconFilter
            className="icon-filter"
            onClick={() => setVisible(true)}
          />
        )}
      />
      <FilterModal visible={visible} />
    </SearchWrapper>
  )
}

export default memo(SearchComponent)
