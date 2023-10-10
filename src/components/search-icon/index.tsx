import React, { memo, useState } from 'react'
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
}

const SearchIconComponent: FC<IProps> = (props) => {
  const { placeholder = '按名称搜索', wait = 500, onHandleSearch } = props
  const handleSearch = debounce((value: string) => {
    setLoading(true)
    setTimeout(() => {
      onHandleSearch(value)
      setLoading(false)
    }, wait)
  }, wait)
  const [showInput, setShowInput] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <SearchWrapper>
      {showInput ? (
        <Input.Search
          className={classNames(showInput ? 'fadeIn' : 'fadeOut')}
          placeholder={placeholder}
          size="large"
          allowClear
          style={{ width: '200px' }}
          loading={loading}
          searchButton
          onSearch={(value) => handleSearch(value)}
          onChange={(value) => handleSearch(value)}
          prefix={
            <IconClose
              onClick={() => {
                setShowInput(false)
                onHandleSearch('')
              }}
            />
          }
        />
      ) : (
        <IconSearch onClick={() => setShowInput(true)} />
      )}
    </SearchWrapper>
  )
}

export default memo(SearchIconComponent)
