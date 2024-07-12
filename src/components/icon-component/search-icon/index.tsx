import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { debounce } from 'lodash'
import { Input } from '@arco-design/web-react'
import { IconClose, IconSearch } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import { SearchWrapper } from './styled'

interface IProps {
  children?: ReactNode
  onHandleSearch: (value: string) => void
  placeholder?: string
  wait?: number
  // 是否显示搜索输入框
  showSearchInput?: boolean
  // 搜索输入框宽度
  searchInputWidth?: string
  // 是否显示搜索前缀
  showInputPrefix?: boolean
}

const SearchIconComponent: FC<IProps> = (props) => {
  const {
    placeholder = '按名称搜索',
    wait = 500,
    onHandleSearch,
    showSearchInput = false,
    searchInputWidth = '200px',
    showInputPrefix = true
  } = props
  const handleSearch = debounce((value: string) => {
    if (value.length) setLoading(true)
    setTimeout(() => {
      onHandleSearch(value)
      setLoading(false)
    }, wait)
  }, wait)
  const [showInput, setShowInput] = useState(showSearchInput)
  const [loading, setLoading] = useState(false)
  return (
    <SearchWrapper>
      {showInput ? (
        <Input.Search
          className={classNames(showInput ? 'fadeIn' : 'fadeOut')}
          placeholder={placeholder}
          size="large"
          allowClear
          style={{ width: searchInputWidth }}
          loading={loading}
          searchButton
          onSearch={(value) => handleSearch(value)}
          onChange={(value) => handleSearch(value)}
          prefix={
            showInputPrefix ? (
              <IconClose
                onClick={() => {
                  setShowInput(false)
                  onHandleSearch('')
                }}
              />
            ) : (
              ''
            )
          }
        />
      ) : (
        <IconSearch onClick={() => setShowInput(true)} />
      )}
    </SearchWrapper>
  )
}

export default memo(SearchIconComponent)
